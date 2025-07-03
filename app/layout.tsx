import './globals.css';
import type { Metadata } from 'next';
import { AuthProvider } from '@/components/providers/auth-provider';
import { Navbar } from '@/components/navigation/navbar';
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: 'Note Nectar',
  description: 'Summarize your pptx into a text editor',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <Navbar />
            <Toaster />
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}