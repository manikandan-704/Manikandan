import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Languages',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Java', level: 89 },
        { name: 'JavaScript (ES6+)', level: 88 },
        { name: 'TypeScript', level: 75 },
        { name: 'HTML5 & CSS3', level: 92 },
        { name: 'SQL', level: 85 },
      ],
    },
    {
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 90 },
        { name: ' React Router', level: 88 },
        { name: 'Redux Toolkit', level: 75 },
        { name: 'Component-Driven Design', level: 92 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Bootstrap/Material UI', level: 80 },
      ],
    },
    {
      title: 'Backend & Distributed Systems',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Spring Boot', level: 89},
        { name: 'Node.js/Express.js', level: 85 },
        { name: 'Spring Cloud (Eureka, API Gateway)', level: 78 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'MongoDB', level: 82 },
        { name: 'MySQL/PostgreSQL', level: 70 },
      ],
    },
    {
      title: 'Security & Architecture',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Spring Security', level: 85 },
        { name: 'Microservices', level: 89},
        { name: 'Event-Driven Architecture', level: 90 },
        { name: 'JWT', level: 85 },
        { name: 'Keycloak  (OAuth2/OIDC)', level: 78 },
        
      ],
    },
    {
      title: 'Core Concepts',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Data Structures & Algorithms', level: 85 },
        { name: 'Object-Oriented Programming', level: 83 },
        { name: 'System Design Basics', level: 65 },
        { name: 'State Management', level: 88 },
        { name: 'Problem Solving', level: 90 },
      ],
    },
    {
      title: 'DevOps',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Agile & Scrum Methodologies', level: 80 },
        { name: 'Git, GitHub Actions (CI/CD)', level: 88 },
        { name: 'Docker', level: 70 },
        { name: 'Postman', level: 85 },
        { name: 'Intellj', level: 85 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="skills" className="section-container bg-dark-card/30" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full" />
          <p className="text-dark-textSecondary mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit built through consistent learning and real-world application
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="glass rounded-2xl p-6 hover:border-accent-primary/50 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <span className={`h-3 w-3 rounded-full bg-gradient-to-r ${category.color}`} />
                  {category.title}
                </h3>
                <div className={`h-1 w-16 bg-gradient-to-r ${category.color} rounded-full`} />
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    {/* Skill Name and Level */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-dark-text group-hover:text-accent-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs text-dark-textSecondary">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2 bg-dark-border rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                      />
                      {/* Glow effect */}
                      <motion.div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.color} rounded-full blur-sm opacity-50`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Methodologies */}
        <motion.div variants={itemVariants} className="mt-12">
          <div className="glass rounded-2xl p-6 text-center">
            <h3 className="text-lg font-semibold mb-4 gradient-text">
              Professional Methodologies
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Agile & Scrum', 'Microservices Architecture', 'Code Reviews', 'Bug Fixing', 'Version Control', 'UI/UX Design', 'Responsive Design', 'MVC Pattern', 'Component Architecture'].map((method, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-dark-bg rounded-full text-sm font-medium text-dark-textSecondary border border-dark-border hover:border-accent-primary hover:text-accent-primary transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {method}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
