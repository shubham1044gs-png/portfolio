import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
      icon: <Palette className="h-6 w-6" />
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
      icon: <Code className="h-6 w-6" />
    },
    {
      category: "Tools & Others",
      technologies: ["Git", "Docker", "AWS", "Figma", "Jest"],
      icon: <Rocket className="h-6 w-6" />
    },
    {
      category: "Soft Skills",
      technologies: ["Leadership", "Communication", "Problem Solving", "Team Work"],
      icon: <Users className="h-6 w-6" />
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-text-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate full-stack developer with 3+ years of experience creating 
            digital solutions that make a difference. I love turning complex problems 
            into simple, beautiful designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              Started my journey in computer science with a fascination for how technology 
              can solve real-world problems. Over the years, I've worked on diverse projects 
              ranging from e-commerce platforms to data visualization tools.
            </p>
            <p className="text-muted-foreground mb-4">
              I believe in writing clean, maintainable code and creating intuitive user 
              experiences. When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="bg-card-gradient rounded-lg p-8 border border-border/50">
            <h3 className="text-xl font-semibold mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Experience</span>
                <span className="font-semibold">3+ Years</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Projects Completed</span>
                <span className="font-semibold">25+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Current Focus</span>
                <span className="font-semibold">Full Stack</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Location</span>
                <span className="font-semibold">India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.category} 
              className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-primary"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.technologies.map((tech) => (
                    <li key={tech} className="text-sm text-muted-foreground">
                      {tech}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;