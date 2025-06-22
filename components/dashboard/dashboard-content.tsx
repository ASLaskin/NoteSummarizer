'use client';

import { useSession } from 'next-auth/react';
import UploadForm from './upload-form';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { use, useState } from 'react';
import { LoadingModal } from './loading-dialog';
import { DemoModal } from './demo-modal';

interface SummarizeResponse {
  summary: string;
}

export function DashboardContent() {
  const { data: session } = useSession();
  const [isLoadingOpen, setIsLoadingOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const allowApiCall = process.env.NEXT_PUBLIC_ALLOW_API_CALL

  const handleUploadSubmit = async (settings: any) => {
    console.log(settings)

    if (!allowApiCall) {
      //add toast 
      return;
    }

    if (allowApiCall === "false") {
      if (settings.file.name === "sample.pptx") {
        setIsLoadingOpen(true);
        try {
          const formData = new FormData();
          formData.append('file', settings.file);

          const response = await fetch('/api/extract-text', {
            method: 'POST',
            body: formData,
          });

          const result = await response.json();

          console.log('API Response:', result);
          console.log('Extracted text:', result.text);

          const SummarizeResponse = await fetch('/api/summarize', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({text: result.text})
          })

          const summaryResult: SummarizeResponse = await SummarizeResponse.json();
          console.log('Summary:', summaryResult.summary);



        } catch (error) {
          console.error('Error calling API:', error);
        }
      } else {
        setIsDemoOpen(true);
        //goes back to tell them to use sample pptx
      }
    }
  };

  //this will be used once we have results
  const handleDialogClose = () => {
    setIsLoadingOpen(false)
  };

  return (
    <div>

      <h1>{allowApiCall}</h1>
      <UploadForm onSubmit={handleUploadSubmit} />


      <LoadingModal isOpen={isLoadingOpen} onClose={handleDialogClose} />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />

    </div>
  );
}