import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

async function streamToBuffer(stream: ReadableStream<Uint8Array>) {
  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];

  let done = false;
  while (!done) {
    const { value, done: readerDone } = await reader.read();
    if (value) {
      chunks.push(value);
    }
    done = readerDone;
  }

  return Buffer.concat(chunks);
}

export const config = {
  api: {
    bodyParser: false, 
  },
};

export async function POST(req: NextRequest) {
  try {
    if (!req.body) {
      return new NextResponse('No file uploaded', { status: 400 });
    }

    const tempPath = path.join(process.cwd(), 'public', 'uploads', 'uploaded.pdf');
    const fileBuffer = await streamToBuffer(req.body);
    fs.writeFileSync(tempPath, fileBuffer);
    return new Promise((resolve) => {
      exec(`python scripts/summarize_pdf.py ${tempPath}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${stderr}`);
          resolve(new NextResponse('Error processing PDF', { status: 500 }));
        } else {
          console.log(`Output: ${stdout}`);
          resolve(new NextResponse(JSON.stringify({ notes: stdout }), { status: 200 }));
        }
      });
    });
  } catch (error) {
    console.error('Error handling file upload:', error);
    return new NextResponse('Error uploading file', { status: 500 });
  }
}
