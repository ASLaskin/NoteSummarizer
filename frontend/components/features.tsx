import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Search, Share2, Zap } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <FileText className="h-8 w-8 mb-2 text-primary" />,
      title: "Smart Note Organization",
      description: "Automatically categorize and tag your notes for effortless retrieval."
    },
    {
      icon: <Search className="h-8 w-8 mb-2 text-primary" />,
      title: "Powerful Search",
      description: "Find any note instantly with our advanced search capabilities."
    },
    {
      icon: <Share2 className="h-8 w-8 mb-2 text-primary" />,
      title: "Seamless Sharing",
      description: "Collaborate with ease by sharing notes and notebooks with your team."
    },
    {
      icon: <Zap className="h-8 w-8 mb-2 text-primary" />,
      title: "Quick Capture",
      description: "Jot down ideas rapidly with our streamlined note-taking interface."
    }
  ]

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Supercharge Your Note-Taking</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card">
              <CardHeader>
                <CardTitle className="flex flex-col items-center text-center">
                  {feature.icon}
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}