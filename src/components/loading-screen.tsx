"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Code2 } from 'lucide-react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  }

  const logoVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: [0, 1.2, 1],
      rotate: [0, 180, 0],
      transition: {
        duration: 1.5,
        ease: "easeOut",
        times: [0, 0.6, 1]
      }
    }
  }

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.6
      }
    }
  }

  const progressVariants = {
    initial: { width: 0 },
    animate: {
      width: "100%",
      transition: {
        delay: 1.2,
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  if (!isLoading) return null

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-background via-background to-muted"
      >
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"
          />
          <motion.div
            animate={{
              x: [0, -150, 150, 0],
              y: [0, 150, -150, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"
          />
        </div>

        {/* Logo Animation */}
        <motion.div
          variants={logoVariants}
          initial="initial"
          animate="animate"
          className="relative z-10"
        >
          <div className="relative">
            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 blur-lg"
            />
            <div className="relative p-8 bg-card rounded-full border border-border shadow-2xl">
              <Code2 className="w-16 h-16 text-primary" />
            </div>
          </div>
        </motion.div>

        {/* Text Animation */}
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="mt-8 text-center"
        >
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Jayakkumar K
          </h1>
          <p className="text-muted-foreground mt-2">Loading portfolio...</p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 h-1 bg-muted rounded-full overflow-hidden">
          <motion.div
            variants={progressVariants}
            initial="initial"
            animate="animate"
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
          />
        </div>

        {/* Loading Dots */}
        <div className="flex space-x-2 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className="w-2 h-2 bg-primary rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
