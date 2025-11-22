"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Cpu, Database, GitBranch, Layers, Sparkles } from 'lucide-react'
import { portfolioData } from '@/lib/data'

const skillCategories = [
  { 
    title: 'Frontend Development', 
    icon: Code2,
    color: 'from-purple-500 to-pink-500',
    skills: portfolioData.skills.frontend 
  },
  { 
    title: 'State Management', 
    icon: Layers,
    color: 'from-blue-500 to-cyan-500',
    skills: portfolioData.skills.stateManagement 
  },
  { 
    title: 'AI Integration', 
    icon: Sparkles,
    color: 'from-green-500 to-teal-500',
    skills: portfolioData.skills.aiIntegration 
  },
]

const additionalSkills = [
  { title: 'Tools & DevOps', icon: GitBranch, items: portfolioData.skills.tools },
  { title: 'Databases', icon: Database, items: portfolioData.skills.databases },
  { title: 'Other Skills', icon: Cpu, items: portfolioData.skills.other },
]

export default function SkillsSection() {
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

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
              Technical Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized in modern web technologies with a focus on React ecosystem and AI integrations
          </p>
        </motion.div>

        {/* Main Skills with Progress */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.years}+ years</span>
                    </div>
                    <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground mt-1">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {additionalSkills.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <category.icon className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, idx) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: idx * 0.05 }}
                    className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Highlight for AI Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl border border-purple-500/20"
        >
          <div className="flex items-center space-x-3 mb-3">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            <h3 className="text-xl font-semibold">AI-SDK Integration Expertise</h3>
          </div>
          <p className="text-muted-foreground">
            Specialized in integrating modern AI capabilities into web applications, including OpenAI SDK, 
            Vercel AI SDK, LangChain, and RAG implementations. Experience building intelligent chatbots, 
            content generation tools, and AI-powered search features.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
