'use client';

import { useSession } from 'next-auth/react';
import UploadForm from './upload-form';

export function DashboardContent() {
  const { data: session } = useSession();



  return (
    <div>
      <UploadForm onSubmit={(settings) => console.log(settings)} />
    </div>
  );
}