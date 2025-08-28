import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="about-title">About Me</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4" data-testid="about-description">
            Currently pursuing B.Tech in Computer Science at IIIT Kota with a CGPA of 8.33. 
            Passionate about building secure, scalable solutions and contributing to the cybersecurity community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass p-6 sm:p-8 rounded-xl" data-testid="card-education">
              <h3 className="text-2xl font-bold mb-4 text-accent">Education</h3>
              <div className="space-y-2">
                <p className="text-lg font-semibold" data-testid="text-college">Indian Institute of Information Technology (IIIT), Kota</p>
                <p className="text-muted-foreground" data-testid="text-degree">B.Tech in Computer Science and Engineering</p>
                <p className="text-muted-foreground" data-testid="text-cgpa">CGPA: 8.33 | Aug 2023 – May 2027</p>
              </div>
            </div>

            <div className="glass p-6 sm:p-8 rounded-xl" data-testid="card-achievements">
              <h3 className="text-2xl font-bold mb-4 text-accent">Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3" data-testid="achievement-suraksha">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <p>Top 15 at SuRaksha National Fintech Security Hackathon (6,800+ participants)</p>
                </div>
                <div className="flex items-center space-x-3" data-testid="achievement-hackthechain">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <p>First Runner-Up at HackTheChain 2.0 Blockchain Hackathon (100+ teams)</p>
                </div>
                <div className="flex items-center space-x-3" data-testid="achievement-competitive">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <p>CodeChef 2-star (⭐⭐) | Codeforces Peak Rating: 1243</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass p-4 sm:p-6 rounded-xl" data-testid="card-skills">
              <img 
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Blockchain technology visualization with interconnected nodes" 
                className="w-full h-48 object-cover rounded-lg mb-4" 
                data-testid="img-blockchain-tech"
              />
              <h3 className="text-xl font-bold mb-2">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-accent mb-2">Languages</h4>
                  <p className="text-sm text-muted-foreground" data-testid="text-languages">C++, Python, JavaScript, Java, Dart, Kotlin</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Frameworks</h4>
                  <p className="text-sm text-muted-foreground" data-testid="text-frameworks">MERN Stack, Flutter, React</p>
                </div>
              </div>
            </div>

            <div className="glass p-4 sm:p-6 rounded-xl" data-testid="card-current-roles">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300" 
                alt="Fintech security concept with digital payment protection" 
                className="w-full h-32 object-cover rounded-lg mb-4" 
                data-testid="img-fintech-security"
              />
              <h3 className="text-xl font-bold">Current Roles</h3>
              <div className="space-y-2 mt-3">
                <p className="text-sm" data-testid="text-coordinator"><span className="text-accent font-semibold">Coordinator</span> @ CYPH3R Club, IIIT Kota</p>
                <p className="text-sm" data-testid="text-webmaster"><span className="text-accent font-semibold">Web-Master</span> @ IIIT Kota</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
