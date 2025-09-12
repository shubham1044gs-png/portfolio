import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 px-6 border-t border-border/50 text-center">
        <p className="text-muted-foreground">
          © 2024 Shubham Kumar. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default Index;
