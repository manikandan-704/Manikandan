import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollInView } from '../hooks/useScrollInView';
import { containerVariants, projectItemVariants } from '../constants/animations';
import { projects } from '../constants/data';

const Projects = () => {
  const { ref, isInView } = useScrollInView();

  return (
    <section id="projects" className="section-container" ref={ref} aria-label="Featured projects">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div variants={projectItemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full" aria-hidden="true" />
          <p className="text-dark-textSecondary mt-4 max-w-2xl mx-auto">
            Showcasing real-world applications that demonstrate full-stack expertise and problem-solving skills
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={projectItemVariants}
              className="group relative"
            >
              {/* Project Card */}
              <div className="glass rounded-2xl overflow-hidden hover:border-accent-primary/50 transition-all duration-500">
                <div className="grid md:grid-cols-5 gap-6 p-6 md:p-8">
                  {/* Left Column - Main Info */}
                  <div className="md:col-span-3 space-y-4">
                    {/* Title and Subtitle */}
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`h-1 w-12 bg-gradient-to-r ${project.color} rounded-full`} aria-hidden="true" />
                        <span className="text-sm font-mono text-dark-textSecondary">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-accent-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className={`text-sm font-medium bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-dark-textSecondary leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-dark-text mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-sm text-dark-textSecondary flex items-start gap-2"
                          >
                            <span className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0`} aria-hidden="true" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-dark-bg rounded-lg text-sm font-medium text-dark-text hover:text-accent-primary border border-dark-border hover:border-accent-primary transition-all duration-300 group/btn"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <Github size={16} className="group-hover/btn:rotate-12 transition-transform" aria-hidden="true" />
                        View Code
                      </a>
                      <button
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg text-sm font-medium text-white hover:shadow-lg hover:shadow-accent-primary/30 transition-all duration-300 group/btn"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" aria-hidden="true" />
                        Live Demo
                      </button>
                    </div>
                  </div>

                  {/* Right Column - Tech Stack */}
                  <div className="md:col-span-2">
                    <div className="glass rounded-xl p-6 h-full flex flex-col">
                      <h4 className="text-sm font-semibold text-dark-text mb-4">
                        Tech Stack
                      </h4>
                      <div className="space-y-3 flex-1">
                        {project.techStack.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            className="flex items-center gap-3 p-3 bg-dark-bg rounded-lg hover:bg-dark-border/50 transition-colors cursor-pointer group/tech"
                            whileHover={{ x: 5 }}
                          >
                            <div className={`p-2 bg-gradient-to-r ${project.color} rounded-lg opacity-80 group-hover/tech:opacity-100 transition-opacity`}>
                              <tech.icon size={16} className="text-white" aria-hidden="true" />
                            </div>
                            <span className="text-sm font-medium text-dark-textSecondary group-hover/tech:text-dark-text transition-colors">
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-2xl`} aria-hidden="true" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          variants={projectItemVariants}
          className="text-center mt-12"
        >
          <p className="text-dark-textSecondary mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/manikandan-704?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary group"
            aria-label="View all projects on GitHub"
          >
            <Github size={20} className="group-hover:rotate-12 transition-transform" aria-hidden="true" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
