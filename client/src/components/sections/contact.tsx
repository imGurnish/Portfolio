import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Star, Trophy } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="text-primary text-xl" />,
      label: "Email",
      value: "gurnishsinghsangha@gmail.com",
      href: "mailto:gurnishsinghsangha@gmail.com"
    },
    {
      icon: <Phone className="text-accent text-xl" />,
      label: "Phone",
      value: "+91 9664101285",
      href: "tel:+919664101285"
    },
    {
      icon: <Linkedin className="text-secondary text-xl" />,
      label: "LinkedIn",
      value: "Connect with me professionally",
      href: "#"
    },
    {
      icon: <Github className="text-foreground text-xl" />,
      label: "GitHub",
      value: "View my code and contributions",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="contact-title">Let's Connect</h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4" data-testid="contact-subtitle">
            Ready to collaborate on innovative projects or discuss opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 w-full"
          >
            <div className="glass p-4 sm:p-6 lg:p-8 rounded-xl w-full" data-testid="contact-info-card">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start space-x-3 hover:bg-muted/20 p-2 rounded-lg transition-colors w-full"
                    data-testid={`contact-info-${info.label.toLowerCase()}`}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-muted/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-sm sm:text-base">{info.label}</p>
                      <p className="text-muted-foreground text-xs sm:text-sm break-words break-all">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass p-4 lg:p-6 rounded-xl text-center w-full" data-testid="competitive-programming-card">
              <h4 className="text-lg font-bold mb-4">Competitive Programming</h4>
              <div className="flex justify-center space-x-6 sm:space-x-8">
                <div className="text-center" data-testid="codechef-rating">
                  <div className="flex justify-center items-center mb-2">
                    <Star className="text-accent w-6 h-6" />
                    <Star className="text-accent w-6 h-6" />
                  </div>
                  <p className="text-sm text-muted-foreground">CodeChef</p>
                </div>
                <div className="text-center" data-testid="codeforces-rating">
                  <p className="text-2xl font-bold text-primary">1243</p>
                  <p className="text-sm text-muted-foreground">Codeforces</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass p-4 sm:p-6 lg:p-8 rounded-xl w-full"
            data-testid="collaboration-card"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Modern collaborative workspace with team members working together" 
              className="w-full h-48 lg:h-64 object-cover rounded-lg mb-4 lg:mb-6" 
              data-testid="img-collaboration"
            />
            
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-sm lg:text-base text-muted-foreground mb-4 lg:mb-6 leading-relaxed">
              I'm always open to discussing new opportunities, innovative projects, or collaborations in cybersecurity, fintech, and web development.
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3 text-sm" data-testid="availability-internship">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm lg:text-base leading-relaxed">Available for internships and full-time opportunities</span>
              </div>
              <div className="flex items-start space-x-3 text-sm" data-testid="availability-freelance">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm lg:text-base leading-relaxed">Open to freelance and contract work</span>
              </div>
              <div className="flex items-start space-x-3 text-sm" data-testid="availability-research">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm lg:text-base leading-relaxed">Interested in research collaborations</span>
              </div>
            </div>

            <div className="mt-6 lg:mt-8 w-full">
              <a
                href="mailto:gurnishsinghsangha@gmail.com"
                className="w-full bg-gradient-to-r from-primary to-secondary px-4 lg:px-6 py-3 rounded-lg hover:opacity-80 transition-all duration-300 transform hover:scale-105 block text-center text-sm lg:text-base font-medium max-w-full"
                data-testid="button-send-message"
              >
                Send Message
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
