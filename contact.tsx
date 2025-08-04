import { motion } from "framer-motion";
import { Mail, Youtube, Phone } from "lucide-react";

export default function Contact() {

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "prashukjain983@gmail.com",
      gradient: "from-cyan-400 to-emerald-400",
      href: "mailto:prashukjain983@gmail.com"
    },
    {
      icon: Youtube,
      title: "YouTube",
      info: "Python Coding With Me",
      gradient: "from-red-500 to-pink-600",
      href: "https://youtube.com/@pythoncodingwithme?si=kXDFRSvvhpdWPbs1"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+91 84499 99816",
      gradient: "from-emerald-400 to-cyan-400",
      href: "tel:+918449999816"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg">
            Let's connect and explore opportunities together
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div 
            className="max-w-2xl space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((contact, index) => (
              <a key={contact.title} href={contact.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 glass-card rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <div className={`bg-gradient-to-r ${contact.gradient} p-3 rounded-xl`}>
                  <contact.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{contact.title}</h3>
                  <p className="text-gray-300">{contact.info}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
