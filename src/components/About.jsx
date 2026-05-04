import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Laptop, Terminal } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const highlights = [
    {
      icon: Code2,
      title: 'Daily DSA Practice',
      description: 'Committed to solving Data Structures & Algorithms problems every day to sharpen problem-solving skills.',
    },
    {
      icon: Laptop,
      title: 'Full-Stack Expertise',
      description: 'Proficient in MERN stack development with a focus on building scalable, user-centric applications.',
    },
    {
      icon: Database,
      title: 'System Design',
      description: 'Understanding of database optimization, RESTful APIs, and component-based architecture.',
    },
    {
      icon: Terminal,
      title: 'Clean Code Advocate',
      description: 'Writing maintainable, well-documented code following industry best practices and design patterns.',
    },
  ];

  return (
    <section id="about" className="section-container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                The Journey
              </h3>
              <div className="space-y-4 text-dark-textSecondary leading-relaxed">
                <p>
                  I'm a Recent Graduate <span className="text-accent-primary font-medium">Computer Science & Design</span> student 
                  at Sethu Institute of Technology, based in Madurai, Tamil Nadu. My journey in software 
                  development is driven by a passion for creating elegant solutions to complex problems.
                </p>
                <p>
                  Every day, I dedicate time to <span className="text-accent-primary font-medium">Data Structures and Algorithms</span>, 
                  not just as practice, but as a way to sharpen my analytical thinking and problem-solving approach. This 
                  consistent discipline has transformed the way I approach challenges—both in code and in life.
                </p>
                <p>
                  As an <span className="text-accent-primary font-medium">introverted observer</span>, I find inspiration in the 
                  quiet moments—watching how systems work, understanding user behavior, and learning from diverse perspectives. 
                  I love traveling and connecting with new people; these experiences fuel my creativity and remind me that 
                  the best solutions come from understanding human needs.
                </p>
                <p>
                  My technical expertise in the <span className="text-accent-primary font-medium">MERN stack</span> combined 
                  with a design-thinking mindset allows me to build applications that are not just functional, but delightful 
                  to use. I believe in writing clean, maintainable code and creating seamless digital experiences that make 
                  a real impact.
                </p>
              </div>
            </div>

            {/* Education Highlight */}
            <motion.div variants={itemVariants} className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent-primary/10 rounded-lg">
                  <Laptop className="text-accent-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Education</h4>
                  <p className="text-dark-textSecondary text-sm">
                    B.E. Computer Science & Design
                  </p>
                  <p className="text-dark-textSecondary text-sm">
                    Sethu Institute of Technology • 2022-2026
                  </p>
                  <p className="text-accent-primary text-sm font-medium mt-1">
                    CGPA: 7.01/10
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              What Drives Me
            </h3>
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent-primary/10 rounded-lg group-hover:bg-accent-primary/20 transition-colors">
                      <item.icon className="text-accent-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2 group-hover:text-accent-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-dark-textSecondary text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certification Highlight */}
            <motion.div
              variants={itemVariants}
              className="glass rounded-2xl p-6 border-accent-primary/30"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent-primary/10 rounded-lg">
                  <Terminal className="text-accent-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Recent Achievement</h4>
                  <p className="text-dark-textSecondary text-sm mb-2">
                    30 Days Masterclass in Full Stack Development
                  </p>
                  <p className="text-accent-primary text-sm font-medium">
                    NoviTech R&D Private Limited • January 2026
                  </p>
                  <p className="text-dark-textSecondary text-xs mt-2">
                    Credential ID: NT_B55FSDET406
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
