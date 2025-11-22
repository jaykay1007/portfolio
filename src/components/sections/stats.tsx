"use client"

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { Award, Code2, Users, TrendingUp, Coffee, Star } from 'lucide-react'

const stats = [
  {
    icon: Code2,
    number: 5,
    suffix: '+',
    label: 'Years Experience',
    description: 'Building web applications'
  },
  {
    icon: TrendingUp,
    number: 30,
    suffix: '%',
    label: 'Performance Boost',
    description: 'Average improvement delivered'
  },
  {
    icon: Users,
    number: 25,
    suffix: '+',
    label: 'Projects Completed',
    description: 'Enterprise & startup projects'
  },
  {
    icon: Award,
    number: 2,
    suffix: '',
    label: 'Awards Won',
    description: 'Performance recognitions'
  },
  {
    icon: Coffee,
    number: 1000,
    suffix: '+',
    label: 'Cups of Coffee',
    description: 'Fueling late night coding'
  },
  {
    icon: Star,
    number: 95,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Happy clients and teams'
  }
]

function AnimatedNumber({ value, duration = 2 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, value, isInView])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString()
      }
    })
  }, [springValue])

  return <span ref={ref} />
}

export default function StatsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-blue-900/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Impact by Numbers
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering measurable results and exceptional experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:border-primary/30 group-hover:bg-card/80">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl mb-6 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all"
                >
                  <stat.icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Number */}
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                    <AnimatedNumber value={stat.number} />
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground">{stat.description}</p>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Achievement Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {[
            "🏆 Performer of the Quarter",
            "🚀 Performance Expert",
            "⚡ React Specialist",
            "🤖 AI Integration Pro",
            "📱 PWA Architect"
          ].map((badge, index) => (
            <motion.div
              key={badge}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-full text-sm font-medium"
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
