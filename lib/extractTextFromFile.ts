import officeParser from 'officeparser';

//dynamic import for pdf-parse to avoid webpack issues
const getPdfParse = async () => {
  const pdfParse = await import('pdf-parse');
  return pdfParse.default;
};

/**
 * @param buffer - File buffer
 * @param fileName - Original file name for type detection
 */
export async function extractTextFromFile(buffer: Buffer, fileName: string): Promise<string> {
  const fileExtension = fileName.toLowerCase().split('.').pop();

  try {
    switch (fileExtension) {
      case 'ppt':
      case 'pptx':
        return await extractFromPowerPoint(buffer);

      case 'pdf':
        return await extractFromPDF(buffer);

      default:
        throw new Error(`Wrong file type`);
    }
  } catch (error) {
    throw new Error(`Failed to extract text`);
  }
}

//uses office parser to get text ppt
async function extractFromPowerPoint(buffer: Buffer): Promise<string> {
  try {
    const data = await officeParser.parseOfficeAsync(buffer);
    const text = cleanText(data || '');


    if (!text) {
      throw new Error('No text found in ppt file');
    }

    return text;
  } catch (error) {
    throw new Error(`PowerPoint parsing failed`);
  }
}

//uses pdf parser to get text from pdf
async function extractFromPDF(buffer: Buffer): Promise<string> {
  try {
    const pdf = await getPdfParse();
    const data = await pdf(buffer);
    const text = cleanText(data.text || '');

    if (!text) {
      throw new Error('No text found in pdf file');
    }

    return text;
  } catch (error) {
    throw new Error(`PDF parsing failed`);
  }
}

//This function is from chatgpt to clean up the text that we get from file
function cleanText(text: string): string {
  if (!text || typeof text !== 'string') {
    return '';
  }

  return text
    // Normalize line breaks
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')

    // Remove excessive whitespace
    .replace(/[ \t]+/g, ' ')  // Multiple spaces/tabs to single space
    .replace(/\n{3,}/g, '\n\n')  // Multiple newlines to double newline

    // Clean up common formatting artifacts
    .replace(/\u00A0/g, ' ')  // Non-breaking spaces to regular spaces
    .replace(/\u2019/g, "'")  // Smart apostrophes to regular apostrophes
    .replace(/\u201C|\u201D/g, '"')  // Smart quotes to regular quotes
    .replace(/\u2013|\u2014/g, '-')  // En/em dashes to regular dashes
    .replace(/\u2026/g, '...')  // Ellipsis character to three dots

    // Remove invisible/control characters (except newlines and tabs)
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g, '')

    // Clean up bullet points and special characters
    .replace(/[•·▪▫◦‣⁃]/g, '• ')  // Normalize bullet points

    // Remove extra spaces around punctuation
    .replace(/\s+([,.!?;:])/g, '$1')  // Remove space before punctuation
    .replace(/([.!?])\s*\n/g, '$1\n')  // Clean sentence endings

    // Final cleanup
    .replace(/^\s+|\s+$/gm, '')  // Trim each line
    .replace(/\n\s*\n/g, '\n\n')  // Clean up paragraph breaks
    .trim();  // Trim the entire string
}