"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Code2, Sparkles, Zap, Cpu, Database, Globe } from 'lucide-react'

const icons = [Code2, Sparkles, Zap, Cpu, Database, Globe]

export default function FloatingParticles() {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 })

  useEffect(() => {
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })

    // Update on resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {Array.from({ length: 15 }, (_, i) => {
        const Icon = icons[i % icons.length]
        return (
          <motion.div
            key={i}
            className="absolute text-primary/10"
            initial={{
              x: Math.random() * windowSize.width,
              y: windowSize.height + 100,
              rotate: 0,
              opacity: 0
            }}
            animate={{
              x: Math.random() * windowSize.width,
              y: -100,
              rotate: 360,
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
          >
            <Icon size={Math.random() * 20 + 10} />
          </motion.div>
        )
      })}
    </div>
  )
}
