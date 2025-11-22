"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, TrendingUp, Users, Zap, ChevronRight } from 'lucide-react'
import { portfolioData } from '@/lib/data'

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const getMetricIcon = (key: string) => {
    if (key.includes('performance') || key.includes('speed')) return Zap
    if (key.includes('user') || key.includes('engagement')) return Users
    return TrendingUp
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise-scale applications that delivered measurable business impact
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(index === selectedProject ? null : index)}
              className="group cursor-pointer"
            >
              <div className="relative bg-card border border-border rounded-xl p-6 h-full hover:shadow-xl transition-all hover:border-primary/50">
                {/* Project Badge */}
                {project.role && (
                  <span className="absolute -top-3 right-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs rounded-full">
                    {project.role}
                  </span>
                )}

                {/* Project Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary">{project.subtitle}</p>
                </div>

                {/* Project Description */}
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Object.entries(project.metrics).slice(0, 3).map(([key, value]) => {
                    const Icon = getMetricIcon(key)
                    return (
                      <div key={key} className="text-center">
                        <Icon className="w-4 h-4 mx-auto mb-1 text-primary" />
                        <p className="text-lg font-bold text-primary">{value}</p>
                        <p className="text-xs text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                      </div>
                    )
                  })}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <motion.div
                  className="flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all"
                  whileHover={{ x: 5 }}
                >
                  View Details
                  <ChevronRight className="w-4 h-4 ml-1" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-card border border-border rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">
                    {portfolioData.projects[selectedProject].title}
                  </h3>
                  <p className="text-primary">{portfolioData.projects[selectedProject].subtitle}</p>
                </div>

                <p className="text-muted-foreground mb-6">
                  {portfolioData.projects[selectedProject].description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {portfolioData.projects[selectedProject].achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Impact Metrics</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(portfolioData.projects[selectedProject].metrics).map(([key, value]) => {
                      const Icon = getMetricIcon(key)
                      return (
                        <div key={key} className="bg-muted/50 rounded-lg p-3">
                          <Icon className="w-5 h-5 mb-2 text-primary" />
                          <p className="text-2xl font-bold text-primary">{value}</p>
                          <p className="text-xs text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData.projects[selectedProject].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* <div className="flex gap-4">
                  <motion.button
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    View Live
                  </motion.button>
                  
                  <motion.button
                    className="px-6 py-2 border border-primary/20 rounded-lg font-medium hover:bg-primary/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4 inline mr-2" />
                    Source Code
                  </motion.button>
                </div> */}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
