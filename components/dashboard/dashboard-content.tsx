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
import { useState } from 'react';
import { LoadingModal } from './loading-dialog';
import { DemoModal } from './demo-modal';

export function DashboardContent() {
  const { data: session } = useSession();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const allowApiCall = process.env.NEXT_PUBLIC_ALLOW_API_CALL

  const handleUploadSubmit = (settings: any) => {
    console.log(settings);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>

      <h1>{allowApiCall}</h1>
      <UploadForm onSubmit={handleUploadSubmit} />


      <LoadingModal isOpen={isDialogOpen} onClose={handleDialogClose} />
      <DemoModal isOpen={isDialogOpen} onClose={handleDialogClose} />
       
    </div>
  );
}