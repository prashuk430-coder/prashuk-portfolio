import { motion } from "framer-motion";
import profileImage from "@assets/1000050063_1753285189577.jpg";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-500 to-emerald-400 rounded-full opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-20 animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-cyan-400 to-emerald-400 p-1 rounded-full">
                <img 
                  src={profileImage} 
                  alt="Prashuk Jain - Student Developer" 
                  className="w-80 h-80 rounded-full object-cover bg-white/10"
                />
              </div>
            </div>
          </motion.div>

          {/* Hero Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent block mb-2">Hi, I'm</span>
                <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-500 bg-clip-text text-transparent text-glow">Prashuk Jain</span>
              </h1>
              <div className="text-xl lg:text-3xl text-gray-300 font-light">
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Passionate Student Developer 👨‍💻</span>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              Class 12 PCM + Computer Science student with a deep passion for technology, coding, and building innovative solutions. Currently preparing for JEE while exploring the exciting world of programming.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection("projects")}
                className="btn-primary text-black font-bold"
              >
                View My Projects
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="btn-secondary"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
