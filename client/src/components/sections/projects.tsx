import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "LinkSuraksha",
      category: "Security",
      description: "Secure Payment Ecosystem with privacy-first approach using temporary, encrypted service accounts to eliminate direct bank detail exposure.",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      alt: "Secure payment ecosystem with encrypted transactions",
      tech: ["Node.js", "React", "MongoDB", "Tailwind CSS"],
      badges: ["Live", "GitHub"],
      featured: "National Fintech Security Hackathon Winner"
    },
    {
      title: "Wisdom Hub",
      category: "Web",
      description: "Educational Resource Platform engineered as a full-stack MERN platform for collaborative resource sharing with role-based access for students and educators.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      alt: "Educational resource platform with collaborative features",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      badges: ["Live", "GitHub"],
      featured: "Full-Stack Web Application"
    },
    {
      title: "Locksy",
      category: "Mobile",
      description: "Secure Password Manager developed as a cross-platform Flutter app with AES-256 encryption for secure, local-first password management.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      alt: "Secure password management with AES encryption",
      tech: ["Flutter", "Dart", "AES-256", "Local Storage"],
      badges: ["GitHub"],
      featured: "AES-256 Encryption, Local-First"
    }
  ];

  const filters = ["All", "Web", "Mobile", "Security", "Blockchain"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="projects-title">Featured Projects</h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4" data-testid="projects-subtitle">
            Innovative solutions built with cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
              data-testid={`project-card-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <img 
                src={project.image}
                alt={project.alt}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
                data-testid={`project-image-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              />
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold" data-testid={`project-title-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.badges.map((badge) => (
                      <span 
                        key={badge}
                        className={`px-2 py-1 text-xs rounded ${
                          badge === "Live" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"
                        }`}
                        data-testid={`project-badge-${badge.toLowerCase()}-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4" data-testid={`project-description-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 w-full">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-muted text-xs rounded flex-shrink-0 max-w-full truncate"
                      data-testid={`project-tech-${tech.toLowerCase().replace(/\s+/g, '-')}-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-accent">Featured:</span> {project.featured}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center px-4"
        >
          <div className="glass inline-flex flex-wrap justify-center rounded-lg p-2 gap-1 max-w-full">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 sm:px-4 py-2 rounded text-xs sm:text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                  activeFilter === filter 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted"
                }`}
                data-testid={`filter-button-${filter.toLowerCase()}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
