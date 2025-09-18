import { Download, BookOpen, Video, FileText, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const resources = [
  {
    id: 1,
    title: "JavaScript Cheat Sheet",
    description: "Complete reference guide for modern JavaScript syntax and methods",
    type: "PDF",
    icon: FileText,
    color: "electric",
    size: "2.4 MB",
    downloads: "5.2k"
  },
  {
    id: 2,
    title: "React Components Library",
    description: "Reusable React components with TypeScript and Tailwind CSS",
    type: "Code",
    icon: BookOpen,
    color: "cyber",
    size: "15.6 MB",
    downloads: "3.8k"
  },
  {
    id: 3,
    title: "CSS Grid & Flexbox Guide",
    description: "Visual guide to modern CSS layout techniques with examples",
    type: "Interactive",
    icon: ExternalLink,
    color: "neon",
    size: "Online",
    downloads: "8.1k"
  },
  {
    id: 4,
    title: "Python Automation Scripts",
    description: "Collection of useful Python scripts for everyday automation tasks",
    type: "Code",
    icon: FileText,
    color: "tech",
    size: "5.7 MB",
    downloads: "2.9k"
  },
  {
    id: 5,
    title: "Web Development Roadmap",
    description: "Step-by-step learning path from beginner to full-stack developer",
    type: "Guide",
    icon: BookOpen,
    color: "electric",
    size: "1.8 MB",
    downloads: "12.5k"
  },
  {
    id: 6,
    title: "Video Tutorials Series",
    description: "Comprehensive video series covering advanced development topics",
    type: "Video",
    icon: Video,
    color: "cyber",
    size: "2.1 GB",
    downloads: "6.3k"
  }
];

const Resources = () => {
  return (
    <section id="resources" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Learning <span className="bg-gradient-to-r from-neon to-tech bg-clip-text text-transparent">Resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Boost your learning with our curated collection of guides, templates, and tools
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => {
            const IconComponent = resource.icon;
            return (
              <Card 
                key={resource.id}
                className="group bg-card border-border hover-lift hover:border-primary/30 transition-all duration-300 cursor-code"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg 
                      ${resource.color === 'electric' ? 'bg-electric/10' : 
                        resource.color === 'cyber' ? 'bg-cyber/10' : 
                        resource.color === 'neon' ? 'bg-neon/10' : 
                        'bg-tech/10'}`}>
                      <IconComponent className={`h-6 w-6 
                        ${resource.color === 'electric' ? 'text-electric' : 
                          resource.color === 'cyber' ? 'text-cyber' : 
                          resource.color === 'neon' ? 'text-neon' : 
                          'text-tech'}`} />
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full
                      ${resource.color === 'electric' ? 'bg-electric/20 text-electric' : 
                        resource.color === 'cyber' ? 'bg-cyber/20 text-cyber' : 
                        resource.color === 'neon' ? 'bg-neon/20 text-neon' : 
                        'bg-tech/20 text-tech'}`}>
                      {resource.type}
                    </span>
                  </div>
                  
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {resource.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Resource Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span>{resource.downloads}</span>
                    </span>
                    <span>{resource.size}</span>
                  </div>

                  {/* Download Button */}
                  <Button 
                    className={`w-full group/btn
                      ${resource.color === 'electric' ? 'bg-electric hover:bg-electric/90' : 
                        resource.color === 'cyber' ? 'bg-cyber hover:bg-cyber/90' : 
                        resource.color === 'neon' ? 'bg-neon hover:bg-neon/90' : 
                        'bg-tech hover:bg-tech/90'} text-white`}
                  >
                    {resource.type === 'Interactive' ? 'Open' : 'Download'}
                    <Download className="ml-2 h-4 w-4 group-hover/btn:translate-y-0.5 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center bg-secondary/30 rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get notified when we add new resources, templates, and learning materials to our collection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:ring-2 focus:ring-electric/50 focus:border-electric outline-none"
            />
            <Button className="bg-gradient-to-r from-electric to-cyber hover:from-electric/90 hover:to-cyber/90 text-white px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;