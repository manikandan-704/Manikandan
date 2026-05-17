import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import profilePic from '../assets/1000051447.jpg.jpeg';
import resumePdf from '../assets/ManiKandan_SDE_Resume.pdf';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'SoftwareEngineer <SDE> Manikandan = new SoftwareEngineer < > ();';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Floating particles animation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-accent-primary/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/50 to-dark-bg z-0" />

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="mb-8 inline-block"
          >
            <div className="relative">
              <div className="w-36 h-36 md:w-44 md:h-44 xl:w-56 xl:h-56 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary p-1 animate-glow">
                <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 xl:w-52 xl:h-52 rounded-full bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center">
                    <img
  src={profilePic}
  alt="Manikandan N"
  className="w-full h-full rounded-full object-cover"
/>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <p className="font-mono text-accent-primary text-sm md:text-base mb-2">
              {displayText}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
            </p>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-4"
          >
            <span className="gradient-text">Manikandan N</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-dark-textSecondary mb-6"
          >
            Software Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-base md:text-lg xl:text-xl text-dark-textSecondary max-w-3xl mx-auto mb-8 leading-relaxed"
          >
           Software Development Engineer with hands-on experience architecting production-grade full-stack and microservices applications.
Proficient in Java, Spring Boot, React.js, and distributed systems integration (RabbitMQ, Eureka, Keycloak). Backed by a strong
foundation in Data Structures, Algorithms, and scalable RESTful API design. Adept at Agile/Scrum workflows and CI/CD pipelines,
Motivated to leverage robust backend and system design skill set to deliver secure, highly efficient enterprise solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 flex-wrap"
          >
            <button
              onClick={() => scrollToSection('#projects')}
              className="btn-primary"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary"
            >
              Get in Touch
            </button>
            {/* ── Download Resume ── */}
            <a
              href={resumePdf}
              download="Manikandan_N_Resume"
              className="btn-resume flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-6 justify-center mb-16"
          >
            <a
              href="https://github.com/manikandan-704"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-textSecondary hover:text-accent-primary transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/manikandan704/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-textSecondary hover:text-accent-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:nagarajpriyan2004@gmail.com"
              className="text-dark-textSecondary hover:text-accent-primary transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex justify-center"
          >
            <motion.button
              onClick={() => scrollToSection('#about')}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-dark-textSecondary hover:text-accent-primary transition-colors"
            >
              <ChevronDown size={32} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
