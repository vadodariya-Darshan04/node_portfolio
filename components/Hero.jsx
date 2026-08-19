'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { siteData } from '@/data/portfolio'

export default function Hero() {
  const counterRefs = useRef([])

  useEffect(() => {
    const targets = [siteData.yearsExperience, siteData.projectsCompleted, siteData.achievementsCount]
    targets.forEach((target, i) => {
      const el = counterRefs.current[i]
      if (!el) return
      let start = 0
      const duration = 2000
      const step = (timestamp) => {
        if (!start) start = timestamp
        const progress = Math.min((timestamp - start) / duration, 1)
        el.textContent = Math.round(progress * target)
        if (progress < 1) requestAnimationFrame(step)
      }
      setTimeout(() => requestAnimationFrame(step), 1500)
    })
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden">

      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(192,125,70,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(192,125,70,0.04) 1px,transparent 1px)', backgroundSize: '60px 60px' }}
      />

      {/* Orbs */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full opacity-[0.07] animate-pulse-glow pointer-events-none"
        style={{ background: 'radial-gradient(circle,#c07d46,transparent 70%)' }}
      />
      <div className="absolute bottom-1/3 left-1/5 w-48 h-48 rounded-full opacity-[0.05] animate-float-slow pointer-events-none"
        style={{ background: 'radial-gradient(circle,#c9a87c,transparent 70%)' }}
      />

      {/* Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute top-28 right-6 md:right-12 text-right"
      >
        <p className="text-xs text-copper/50 font-body tracking-widest uppercase">Based in {siteData.location}</p>
        {siteData.availability && (
          <p className="text-xs text-copper/70 mt-1 flex items-center justify-end gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-copper animate-pulse inline-block" />
            {siteData.availabilityText}
          </p>
        )}
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-24">

        {/* Eyebrow */}
        <div className="overflow-hidden mb-3">
          <motion.p
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-copper text-sm font-body tracking-[0.3em] uppercase"
          >
            Hello, I'm
          </motion.p>
        </div>

        {/* Name */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-display font-extrabold text-[clamp(2.4rem,7vw,5.5rem)] leading-[0.95] tracking-tighter text-cream"
          >
            {siteData.name}
          </motion.h1>
        </div>

        {/* Tagline */}
        <div className="overflow-hidden mt-2">
          <motion.h2
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="font-display font-light text-[clamp(1.1rem,2.5vw,1.8rem)] text-sand-muted tracking-tight"
          >
            {siteData.tagline}
          </motion.h2>
        </div>

        {/* Desc */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 max-w-xl"
        >
          <p className="text-sand-muted/80 text-base md:text-lg leading-relaxed font-body font-light">
            {siteData.heroDescription}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="px-7 py-3.5 bg-copper text-surface-950 font-display font-semibold text-sm rounded-full hover:bg-copper-light transition-all duration-300"
          >
            View Work
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-7 py-3.5 border border-copper/30 text-copper font-display font-medium text-sm rounded-full hover:border-copper/60 hover:bg-copper/5 transition-all duration-300"
          >
            Get in touch →
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 flex flex-wrap gap-8 items-center"
        >
          {[
            { label: 'Years', refIdx: 0 },
            { label: 'Projects', refIdx: 1 },
            { label: 'Achievements', refIdx: 2 },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8">
              {i > 0 && <div className="w-px h-10 bg-graphite/50" />}
              <div>
                <p ref={el => counterRefs.current[stat.refIdx] = el} className="font-display font-bold text-3xl text-cream">0</p>
                <p className="text-sand-muted/60 text-xs mt-0.5 tracking-wide uppercase">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
