import './globals.css';
import type { Metadata } from 'next';
import { AuthProvider } from '@/components/providers/auth-provider';
import { Navbar } from '@/components/navigation/navbar';

export const metadata: Metadata = {
  title: 'AuthApp - Secure Authentication',
  description: 'Modern authentication with Google OAuth integration',
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
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}