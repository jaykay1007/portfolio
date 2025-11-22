"use client"

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Engineering Manager",
    company: "Tech Innovations Inc.",
    avatar: "SC",
    text: "Jayakkumar is one of the most talented frontend engineers I've worked with. His ability to optimize performance while delivering clean, maintainable code is exceptional. The 30% performance improvements he achieved on our main application were game-changing.",
    rating: 5,
    project: "SaaS Dashboard Optimization"
  },
  {
    name: "Michael Rodriguez",
    role: "Product Director",
    company: "Digital Solutions Ltd.",
    avatar: "MR",
    text: "Working with Jayakkumar was a fantastic experience. He led our frontend team through a complex React migration, mentored junior developers, and delivered ahead of schedule. His expertise in AI integrations opened new possibilities for our product.",
    rating: 5,
    project: "React Migration & AI Features"
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    company: "Startup Accelerator",
    avatar: "PS",
    text: "Jayakkumar's technical leadership and problem-solving skills are outstanding. He transformed our PWA performance, resulting in 25% faster load times and significantly improved user engagement. Highly recommend for any React/Next.js project.",
    rating: 5,
    project: "PWA Performance Enhancement"
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    company: "Enterprise Corp",
    avatar: "DK",
    text: "Exceptional developer with deep React and Next.js expertise. Jayakkumar's component library reduced our development time by 20% and his mentorship elevated the entire team's code quality. A true asset to any organization.",
    rating: 5,
    project: "Component Library & Team Leadership"
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={containerRef} className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What colleagues and clients say about working with me
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl relative">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-full">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <motion.blockquote
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-xl text-center italic mb-8 leading-relaxed"
              >
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </motion.blockquote>

              {/* Author Info */}
              <motion.div
                key={`author-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-primary">{testimonials[currentIndex].role}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
                  Project: {testimonials[currentIndex].project}
                </div>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Auto-rotate indicator */}
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Swipe or click arrows to view more testimonials
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
