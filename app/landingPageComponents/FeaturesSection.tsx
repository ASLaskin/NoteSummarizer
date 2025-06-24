import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Edit3, Zap } from 'lucide-react';

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Summarization",
      description: "Transform lengthy content into concise, actionable summaries with advanced AI",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Edit3,
      title: "Google Docs-Style Editor",
      description: "Collaborative editing with real-time sync and rich formatting options",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Get summaries in seconds, not minutes. Built for speed and efficiency",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Note-Taking
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to transform how you work with information
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  activeFeature === index 
                    ? 'ring-2 ring-blue-500 shadow-lg' 
                    : 'hover:shadow-md'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.color} mr-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 min-h-96 flex items-center justify-center">
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${features[activeFeature].color} mb-4`}>
                  {(() => {
                    const IconComponent = features[activeFeature].icon;
                    return <IconComponent className="h-12 w-12 text-white" />;
                  })()}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {features[activeFeature].title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {features[activeFeature].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}