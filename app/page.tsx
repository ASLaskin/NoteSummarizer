'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

import { ArrowRight} from 'lucide-react';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [session, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (session) {
    return null; //will redirect to dashboard
  }

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Summarizing Notes
              <span className="block bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                Made Simple
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Lorem Ipsum
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => router.push('/auth/register')}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => router.push('/auth/signin')}
                className="text-lg px-8 py-3 hover:bg-gray-50 transition-all duration-200"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}