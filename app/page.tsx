'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import HeroSection from './landingPageComponents/HeroSection';
import FeaturesSection from './landingPageComponents/FeaturesSection';
import HowItWorksSection from './landingPageComponents/HowItWorksSection';
import BenefitsSection from './landingPageComponents/BenefitsSection';
import CTASection from './landingPageComponents/CTASection';

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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <HeroSection router={router} />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <CTASection router={router} />
    </div>
  );
}