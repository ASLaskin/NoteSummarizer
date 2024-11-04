import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';

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

    const fileBuffer = await streamToBuffer(req.body);

    return new Promise((resolve) => {
      const pythonProcess = exec('python scripts/summarize_pdf.py', (error, stdout, stderr) => {
        if (error) {
          console.error(`Python Script Error: ${stderr}`);
          return resolve(new NextResponse('Error processing PDF', { status: 500 }));
        } else {
          console.log(`Python Script Output: ${stdout}`);
          return resolve(new NextResponse(JSON.stringify({ notes: stdout.trim() }), { status: 200 }));
        }
      });

      if (pythonProcess.stdin) {
        pythonProcess.stdin.write(fileBuffer);
        pythonProcess.stdin.end();
      } else {
        console.error('stdin is null');
        return resolve(new NextResponse('Error processing PDF', { status: 500 }));
      }
    });
  } catch (error) {
    console.error('Error handling file upload:', error);
    return new NextResponse('Error uploading file', { status: 500 });
  }
}
