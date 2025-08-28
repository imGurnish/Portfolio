import Navigation from "@/components/ui/navigation";
import FloatingParticles from "@/components/ui/floating-particles";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background animate-gradient bg-[length:400%_400%]"></div>
        <FloatingParticles />
      </div>

      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Gurnish Singh Sangha. Built with React, Vite, and Tailwind CSS.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Designed with ❤️ for innovation and security
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
