import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Brain, Edit3 } from 'lucide-react';

export default function HowItWorksSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Three simple steps to transform your notes
          </p>
        </div>

        <Tabs defaultValue="upload" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Upload
            </TabsTrigger>
            <TabsTrigger value="process" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Process
            </TabsTrigger>
            <TabsTrigger value="edit" className="flex items-center gap-2">
              <Edit3 className="w-4 h-4" />
              Edit & Share
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="text-center">
            <Card className="p-8">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Upload Your Content</h3>
              <p className="text-gray-600 text-lg mb-6">
                Drop your documents, paste text, or start typing directly in our editor
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Drag & drop your files here</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="process" className="text-center">
            <Card className="p-8">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Processing</h3>
              <p className="text-gray-600 text-lg mb-6">
                Our advanced AI analyzes and creates intelligent summaries in seconds
              </p>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                <div className="flex items-center justify-center space-x-4">
                  <div className="animate-pulse w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="animate-pulse w-4 h-4 bg-blue-500 rounded-full" style={{animationDelay: '0.2s'}}></div>
                  <div className="animate-pulse w-4 h-4 bg-purple-500 rounded-full" style={{animationDelay: '0.4s'}}></div>
                </div>
                <p className="text-gray-600 mt-4">AI is analyzing your content...</p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="edit" className="text-center">
            <Card className="p-8">
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Edit3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Edit & Collaborate</h3>
              <p className="text-gray-600 text-lg mb-6">
                Refine your summaries with our Google Docs-style editor and share with your team
              </p>
              <div className="bg-white border rounded-lg p-6 text-left">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-blue-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}