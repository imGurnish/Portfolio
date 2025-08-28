import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      category: "Frontend",
      icon: "💻",
      items: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      category: "Backend",
      icon: "🔧",
      items: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 82 }
      ]
    },
    {
      category: "Security",
      icon: "🔒",
      items: [
        { name: "Cryptography", level: 80 },
        { name: "Web Security", level: 75 }
      ]
    },
    {
      category: "Mobile",
      icon: "📱",
      items: [
        { name: "Flutter", level: 85 },
        { name: "Dart", level: 83 }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          data-testid="skills-title"
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300"
              data-testid={`skill-card-${skillGroup.category.toLowerCase()}`}
            >
              <div className="text-3xl mb-4">{skillGroup.icon}</div>
              <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name} className="text-left">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm" data-testid={`skill-name-${skill.name.toLowerCase().replace('.', '')}`}>{skill.name}</span>
                      <span className="text-sm" data-testid={`skill-level-${skill.name.toLowerCase().replace('.', '')}`}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full skill-bar"
                        initial={{ width: 0 }}
                        animate={{ width: isVisible ? `${skill.level}%` : 0 }}
                        transition={{ duration: 2, delay: index * 0.1 }}
                        data-testid={`skill-bar-${skill.name.toLowerCase().replace('.', '')}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
