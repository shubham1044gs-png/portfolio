import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { features } from "process";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Photo Booth",
      description:
        "A modern, responsive photography portfolio website built with React and Vite, featuring a clean gallery layout and smooth user experience.",
      image: "public/photobooth.png",
      technologies: ["React", "Node.js", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/shubham1044gs-png/PhotoBooth",
      // demo: "https://demo.com",
      featured: true,
    },
    {
      title: "Music - Learning Brocher",
      description:
        "A Frontend orientend modern, responsive web application for a music learning school built with React, and Tailwind CSS.",
      image: "public/musicLearning.png",
      technologies: ["React", "TypeScript", "Framer Motion", "Tailwind"],
      github: "https://github.com/shubham1044gs-png/Music-Learning-School",
      // demo: "https://demo.com",
      // featured:true
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics with beautiful data visualizations.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "D3.js", "OpenWeather API", "Chart.js"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Social Media Analytics",
      description:
        "Comprehensive social media analytics platform that tracks engagement, growth metrics, and provides actionable insights for content creators.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Redis"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing modern design principles, smooth animations, and optimal user experience across all devices.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Learning Management System",
      description:
        "Educational platform with course management, progress tracking, interactive quizzes, and video streaming capabilities for online learning.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      technologies: ["Next.js", "Node.js", "MySQL", "AWS S3", "JWT"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating various technologies and
            design approaches. Each project represents a unique challenge and
            solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .slice(0, showAll ? projects.length : 2)
            .map((project, index) => (
              <Card
                key={project.title}
                className={`group bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-primary overflow-hidden ${
                  project.featured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    {project.featured && (
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/30"
                      >
                        Featured
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-border/50 hover:border-primary/50 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    {/* <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 shadow-glow-primary hover:shadow-glow-accent transition-all duration-300"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            size="lg"
            className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            {showAll ? (
              <>
                <ChevronUp className="mr-2 h-5 w-5" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-5 w-5" />
                View More Projects
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
