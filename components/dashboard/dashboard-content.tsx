'use client';

import { useSession } from 'next-auth/react';

export function DashboardContent() {
  const { data: session } = useSession();

  // if (!session) {
  //   return null;
  // }

  return (
    <div>
      Dashboard

    </div>
  );
}