import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "India Tourism Guide",
      description: "Interactive GUI application featuring a clickable map of India with detailed information about each state's culture, traditions, and tourist attractions.",
      image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tech: ["Tkinter", "MySQL", "GUI"],
      label: "Python + MySQL"
    },
    {
      title: "Wi-Fi Password Finder",
      description: "Educational Python script that retrieves and displays previously saved Wi-Fi passwords from the system for learning purposes.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tech: ["Python", "System", "Educational"],
      label: "Python Script"
    },
    {
      title: "Python Turtle Art & Animation",
      description: "Colorful animated spiral patterns and artistic designs created using Python's turtle graphics and colorsys modules for visual programming.",
      image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tech: ["Turtle", "Animation", "Creative"],
      label: "Creative Code"
    },
    {
      title: "CSV & Binary File Creator",
      description: "Demonstration of file creation and data handling using Python's csv and pickle modules for school-level data management projects.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tech: ["CSV", "Pickle", "Data"],
      label: "Data Handling"
    },
    {
      title: "Mini Web Page using HTML",
      description: "Responsive basic website built using pure HTML showcasing personal profile and links with clean, structured design.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tech: ["HTML", "CSS", "Responsive"],
      label: "Web Design"
    },
    {
      title: "Short Video with Voiceover Script",
      description: "Creative script-based video combining Python programming stories with visual effects and voice narration using mobile editing tools.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tech: ["CapCut", "Canva", "Creative"],
      label: "Video Content"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg">
            Showcasing my journey in programming and development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-emerald-400 px-3 py-1 rounded-full text-sm font-medium text-black">
                  {project.label}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex items-center space-x-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className={`text-sm px-2 py-1 rounded ${
                        techIndex === 0 ? 'bg-cyan-400/20 text-cyan-400' :
                        techIndex === 1 ? 'bg-emerald-400/20 text-emerald-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
