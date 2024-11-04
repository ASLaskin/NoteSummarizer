import sys
import io
import logging
from PyPDF2 import PdfReader
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from transformers import pipeline

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")

def extract_text_from_pdf(pdf_content):
    try:
        reader = PdfReader(pdf_content)
        slide_texts = []

        for page_number in range(len(reader.pages)):
            page = reader.pages[page_number]
            text = page.extract_text()
            if text:
                slide_texts.append(text.strip())
            else:
                logging.warning(f"Page {page_number + 1} contains no text.")

        if not slide_texts:
            logging.error("No text could be extracted from the PDF.")
        
        return slide_texts

    except Exception as e:
        logging.error(f"Failed to extract text from PDF: {e}")
        return []

def group_slides_by_similarity(slide_texts, threshold=0.5):
    if not slide_texts:
        return []

    vectorizer = TfidfVectorizer().fit_transform(slide_texts)
    vectors = vectorizer.toarray()
    similarities = cosine_similarity(vectors)
    groups = []
    current_group = [0]

    for i in range(1, len(similarities)):
        if similarities[i - 1, i] > threshold:
            current_group.append(i)
        else:
            groups.append(current_group)
            current_group = [i]

    if current_group:
        groups.append(current_group)

    logging.info(f"Total groups formed: {len(groups)}")
    return groups

def generate_summaries(slide_texts, groups, summarizer):
    notes = []
    max_tokens = 1024  

    for group in groups:
        group_text = " ".join([slide_texts[i] for i in group])

        if len(group_text.strip()) == 0:
            logging.warning(f"Group {groups.index(group) + 1} is empty after text extraction.")
            continue

        if len(group_text.split()) > max_tokens:
            group_text = " ".join(group_text.split()[:max_tokens])
            logging.warning(f"Group {groups.index(group) + 1} text truncated to {max_tokens} tokens.")

        try:
            input_length = len(group_text.split())
            max_summary_length = min(input_length // 2, 150)
            summary = summarizer(group_text, max_length=max_summary_length, min_length=30, do_sample=False)[0]['summary_text']
            notes.append(f"Group {groups.index(group) + 1} Notes: {summary}")
        except IndexError as e:
            logging.error(f"IndexError in summarizer for group {groups.index(group) + 1}: {e}")
        except Exception as e:
            logging.error(f"Unexpected error in summarizer for group {groups.index(group) + 1}: {e}")

    return notes

def main():
    pdf_content = sys.stdin.buffer.read()
    slide_texts = extract_text_from_pdf(io.BytesIO(pdf_content))
    
    if not slide_texts:
        logging.error("Aborting due to failure in PDF text extraction.")
        return

    slide_groups = group_slides_by_similarity(slide_texts, threshold=0.5)
    
    if slide_groups:
        summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
        slide_notes = generate_summaries(slide_texts, slide_groups, summarizer)
        
        for note in slide_notes:
            print(note.encode("utf-8", errors="ignore").decode("utf-8"))
    else:
        logging.info("No groups created from the PDF content.")

if __name__ == "__main__":
    main()
