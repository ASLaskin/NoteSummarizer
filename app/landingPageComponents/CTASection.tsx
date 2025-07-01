import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface CTASectionProps {
  router: AppRouterInstance;
}

export default function CTASection({ router }: CTASectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Note-Taking?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join thousands of professionals who've already revolutionized their workflow
        </p>
        <Button
          size="lg"
          onClick={() => router.push('/auth/register')}
          className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Get Started Free Today
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}