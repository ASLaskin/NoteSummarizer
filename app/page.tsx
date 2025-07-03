'use client';

import { useRouter } from 'next/navigation';

import HeroSection from './landingPageComponents/HeroSection';
import FeaturesSection from './landingPageComponents/FeaturesSection';
import HowItWorksSection from './landingPageComponents/HowItWorksSection';
import BenefitsSection from './landingPageComponents/BenefitsSection';
import CTASection from './landingPageComponents/CTASection';

export default function Home() {
  const router = useRouter();


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