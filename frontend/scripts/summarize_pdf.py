import sys
from PyPDF2 import PdfReader
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from transformers import pipeline

def extract_text_from_pdf(file_path):
    reader = PdfReader(file_path)
    slide_texts = []

    for page_number in range(len(reader.pages)):
        page = reader.pages[page_number]
        text = page.extract_text()
        slide_texts.append(text)

    return slide_texts

def group_slides_by_similarity(slide_texts, threshold=0.5):
    vectorizer = TfidfVectorizer().fit_transform(slide_texts)
    vectors = vectorizer.toarray()
    similarities = cosine_similarity(vectors)
    groups = []
    current_group = [0]

    for i in range(1, len(similarities)):
        if similarities[i-1, i] > threshold:
            current_group.append(i)
        else:
            groups.append(current_group)
            current_group = [i]

    if current_group:
        groups.append(current_group)

    return groups

def generate_summaries(slide_texts, groups, summarizer):
    notes = []
    for group in groups:
        group_text = " ".join([slide_texts[i] for i in group])
        if len(group_text.strip()) > 0:
            summary = summarizer(group_text, max_length=150, min_length=30, do_sample=False)[0]['summary_text']
            notes.append(f"Group {groups.index(group) + 1} Notes: {summary}")
    return notes

def main(pdf_file):
    slide_texts = extract_text_from_pdf(pdf_file)
    slide_groups = group_slides_by_similarity(slide_texts, threshold=0.5)
    summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
    slide_notes = generate_summaries(slide_texts, slide_groups, summarizer)
    for note in slide_notes:
        print(note)

if __name__ == "__main__":
    main(sys.argv[1])
