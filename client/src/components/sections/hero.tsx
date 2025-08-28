import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 gradient-text" data-testid="hero-title">
            Gurnish Singh Sangha
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-muted-foreground" data-testid="hero-subtitle">
            Computer Science Student & Cybersecurity Enthusiast
          </p>
          <p className="text-base sm:text-lg mb-8 sm:mb-12 text-muted-foreground max-w-2xl mx-auto px-4" data-testid="hero-description">
            Building secure and innovative solutions with modern technologies. 
            Passionate about fintech, blockchain, and cybersecurity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection("projects")}
              className="glass px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-primary/20 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              data-testid="button-view-work"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-primary to-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:opacity-80 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              data-testid="button-contact"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Cards Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-20 left-10 glass p-4 rounded-xl animate-float hidden lg:block"
        >
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" 
            alt="Cybersecurity concept with digital lock" 
            className="w-32 h-24 object-cover rounded-lg" 
            data-testid="img-cybersecurity-concept"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-40 right-10 glass p-4 rounded-xl animate-float hidden lg:block" 
          style={{ animationDelay: "2s" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200" 
            alt="Modern tech workspace with laptop and code" 
            className="w-32 h-24 object-cover rounded-lg" 
            data-testid="img-tech-workspace"
          />
        </motion.div>
      </div>
    </section>
  );
}
