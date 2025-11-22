"use client"

import { motion } from 'framer-motion'
import { Suspense } from 'react'
import LoadingScreen from '@/components/loading-screen'
import ScrollProgress from '@/components/scroll-progress'
import FloatingParticles from '@/components/floating-particles'
import FloatingContact from '@/components/floating-contact'
import BackToTop from '@/components/back-to-top'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/sections/hero'
import StatsSection from '@/components/sections/stats'
import SkillsSection from '@/components/sections/skills'
import ExperienceSection from '@/components/sections/experience'
import ProjectsSection from '@/components/sections/projects'
import ContactSection from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Floating Background Particles */}
      <FloatingParticles />
      
      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
        className="min-h-screen bg-background"
      >
        {/* Navigation */}
        <Navbar />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Stats Counter Section */}
        <StatsSection />
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Experience Section */}
        <ExperienceSection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Contact Section */}
        <ContactSection />
        
        {/* Footer */}
        <footer className="bg-muted/50 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-sm text-muted-foreground">
                  © 2024 Jayakkumar K. All rights reserved.
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <a
                  href="#home"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </a>
                <a
                  href="#skills"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Skills
                </a>
                <a
                  href="#experience"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-sm text-muted-foreground">
                  Built with{' '}
                  <span className="text-red-500">♥</span>
                  {' '}using Next.js & Framer Motion
                </p>
              </div>
            </div>
          </div>
        </footer>
      </motion.main>
      
      {/* Floating Action Buttons */}
      <FloatingContact />
      <BackToTop />
    </>
  )
}
