import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles } from 'lucide-react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface HeroSectionProps {
  router: AppRouterInstance;
}

export default function HeroSection({ router }: HeroSectionProps) {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const words = ['Notes', 'Research', 'Articles', 'Documents', 'Ideas'];
  
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (typedText.length < currentWord.length) {
        setTypedText(currentWord.slice(0, typedText.length + 1));
      } else {
        setTimeout(() => {
          setTypedText('');
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);
      }
    }, typedText.length === currentWord.length ? 2000 : 150);

    return () => clearTimeout(timeout);
  }, [typedText, currentWordIndex, words]);

  const stats = [
    { number: "10k+", label: "Documents Processed" },
    { number: "95%", label: "Time Saved" },
    { number: "4.9/5", label: "User Rating" }
  ];

  return (
    <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6 animate-bounce">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Note Taking
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Summarize Your{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </span>
            <span className="block mt-2">Made Simple</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your lengthy notes, research papers, and documents into clear, 
            actionable summaries with our AI-powered editor. Experience the future of note-taking.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => router.push('/auth/register')}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Summarizing Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => router.push('/auth/signin')}
              className="text-lg px-8 py-4 hover:bg-gray-50 transition-all duration-200 border-2 hover:border-blue-300"
            >
              Sign In
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}