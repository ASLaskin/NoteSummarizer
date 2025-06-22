import { NextRequest, NextResponse } from 'next/server';
import { extractTextFromFile } from '@/lib/extractTextFromFile';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    //validate file type 
    const allowedTypes = [
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'application/pdf'
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Unsupported file type. Please upload a PowerPoint (.ppt, .pptx) or PDF file.' },
        { status: 400 }
      );
    }

    //convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    const extractedText = await extractTextFromFile(buffer, file.name);

    return NextResponse.json({
      success: true,
      text: extractedText,
      fileName: file.name,
      wordCount: extractedText.split(/\s+/).filter((word: string | any[]) => word.length > 0).length
    });

  } catch (error) {
    console.error('Text extraction error:', error);

    return NextResponse.json(
      {
        error: 'Failed to get text from file',
      },
      { status: 500 }
    );
  }
}