import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useScrollInView } from '../hooks/useScrollInView';
import { containerVariants, itemVariants } from '../constants/animations';
import { skillCategories, methodologies } from '../constants/data';

/** Memoized skill bar — avoids re-renders when parent re-renders */
const SkillBar = memo(({ skill, category, categoryIndex, skillIndex, isInView }) => (
  <div className="group">
    {/* Skill Name and Level */}
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-dark-text group-hover:text-accent-primary transition-colors">
        {skill.name}
      </span>
      <span className="text-xs text-dark-textSecondary" aria-label={`${skill.level} percent proficiency`}>
        {skill.level}%
      </span>
    </div>

    {/* Progress Bar */}
    <div
      className="relative h-2 bg-dark-border rounded-full overflow-hidden"
      role="progressbar"
      aria-valuenow={skill.level}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${skill.name} proficiency`}
    >
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
        aria-hidden="true"
      />
    </div>
  </div>
));

SkillBar.displayName = 'SkillBar';

const Skills = () => {
  const { ref, isInView } = useScrollInView();

  return (
    <section id="skills" className="section-container bg-dark-card/30" ref={ref} aria-label="Technical skills">
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
          <div className="w-20 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full" aria-hidden="true" />
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
                  <span className={`h-3 w-3 rounded-full bg-gradient-to-r ${category.color}`} aria-hidden="true" />
                  {category.title}
                </h3>
                <div className={`h-1 w-16 bg-gradient-to-r ${category.color} rounded-full`} aria-hidden="true" />
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    skill={skill}
                    category={category}
                    categoryIndex={categoryIndex}
                    skillIndex={skillIndex}
                    isInView={isInView}
                  />
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
              {methodologies.map((method, index) => (
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
