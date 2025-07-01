import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Target, Users, CheckCircle, Zap, Star } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Save 90% of Your Time",  
      description: "What used to take hours now takes minutes with AI-powered summarization"
    },
    {
      icon: Target,
      title: "Laser-Focused Summaries",
      description: "Get exactly what you need with customizable summary lengths and styles"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with real-time editing and sharing capabilities"
    },
    {
      icon: CheckCircle,
      title: "Always Accurate",
      description: "Advanced AI ensures your summaries capture all the key points"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process documents instantly with our optimized AI infrastructure"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Professional-grade summaries that maintain context and meaning"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}