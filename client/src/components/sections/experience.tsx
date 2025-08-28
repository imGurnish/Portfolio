import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Coordinator @ CYPH3R Club",
      organization: "IIIT Kota",
      period: "Aug 2025 – Present",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Cybersecurity workshop with hands-on CTF activities",
      achievements: [],
      color: "accent"
    },
    {
      title: "Web-Master @ IIIT Kota",
      organization: "Indian Institute of Information Technology, Kota",
      period: "March 2025 – Present",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Campus event portal development with modern web technologies",
      achievements: [],
      color: "secondary"
    }
  ];

  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="experience-title">Experience</h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4" data-testid="experience-subtitle">
            Leadership and technical roles shaping the cybersecurity community
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-primary hidden md:block"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row${index % 2 === 1 ? '-reverse' : ''} items-center`}
              >
                <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                  <img 
                    src={exp.image}
                    alt={exp.alt}
                    className="w-full h-64 object-cover rounded-xl shadow-lg" 
                    data-testid={`experience-image-${index}`}
                  />
                </div>
                <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${exp.color} rounded-full border-4 border-background`}></div>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="glass p-4 sm:p-6 rounded-xl" data-testid={`experience-card-${index}`}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold" data-testid={`experience-title-${index}`}>{exp.title}</h3>
                      <span className={`text-sm text-${exp.color}`} data-testid={`experience-period-${index}`}>{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground mb-4" data-testid={`experience-org-${index}`}>{exp.organization}</p>
                    <ul className="space-y-2 text-sm">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2" data-testid={`experience-achievement-${index}-${achIndex}`}>
                          <div className={`w-2 h-2 bg-${exp.color} rounded-full mt-2 flex-shrink-0`}></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
