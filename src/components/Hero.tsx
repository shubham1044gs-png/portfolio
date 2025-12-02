import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Shubham_Resume.pdf";
    link.download = "Shubham_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Developer workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-20 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Shubham Kumar
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-in">
            Full Stack Developer
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms] opacity-0">
            Crafting beautiful and functional web experiences with modern
            technologies. Passionate about clean code, user experience, and
            innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in [animation-delay:400ms] opacity-0">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-glow-primary hover:shadow-glow-accent transition-all duration-300"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              onClick={downloadResume}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div className="flex gap-6 justify-center animate-fade-in [animation-delay:600ms] opacity-0">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              onClick={() =>
                window.open("https://github.com/shubham1044gs-png", "_blank")
              }
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/shubham-kumar-5863b6331/"
                )
              }
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              onClick={() =>
                (window.location.href = "mailto:shubham1044gs@gmail.com")
              }
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float z-20"
      >
        <ChevronDown className="h-8 w-8 text-primary animate-pulse" />
      </button>
    </section>
  );
};

export default Hero;
