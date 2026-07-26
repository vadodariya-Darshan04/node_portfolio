'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { siteData } from '@/data/portfolio'

const GithubSVG = () => (
  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

const ExternalSVG = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
  </svg>
)

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="relative py-28 md:py-36 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full pointer-events-none opacity-[0.04]"
        style={{ background: 'radial-gradient(circle,#c07d46,transparent 70%)', transform: 'translateX(-40%)' }} />

      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="flex items-center gap-4 mb-16">
          <span className="text-copper font-body text-sm tracking-[0.3em] uppercase">03 / Projects</span>
          <div className="flex-1 h-px bg-gradient-to-r from-copper/30 to-transparent" />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] tracking-tight text-cream leading-tight">
            Selected <span className="text-copper italic font-light">Work</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sand-muted/50 text-sm font-body max-w-xs md:text-right leading-relaxed">
            A curated collection of projects built with care and shipped with pride.
          </motion.p>
        </div>

        {/* Projects list */}
        <div className="space-y-0">
          {siteData.projects.map((project, i) => (
            <ProjectRow key={project.num} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectRow({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const isEven = index % 2 === 0

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
      className={`group grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center
        ${index > 0 ? 'border-t border-graphite/25 pt-28 mt-0' : ''} pb-28`}>

      {/* Image side */}
      <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="relative rounded-2xl overflow-hidden border border-graphite/40
                        group-hover:border-copper/30 transition-all duration-500
                        shadow-[0_8px_40px_rgba(0,0,0,0.5)]
                        group-hover:shadow-[0_16px_60px_rgba(0,0,0,0.65),0_0_40px_rgba(192,125,70,0.07)]">
          {project.image ? (
            <div className="relative w-full aspect-video">
              <Image src={project.image} alt={project.title} fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03] brightness-90 group-hover:brightness-100"
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>
          ) : (
            <div className="w-full aspect-video flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,#161412,#1e1b17,#161412)' }}>
              <svg className="w-12 h-12 text-copper/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface-900/80 to-transparent pointer-events-none" />

          {/* Badges */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            {project.status === 'live' ? (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400
                               bg-surface-950/80 backdrop-blur-sm border border-emerald-400/20 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />LIVE
              </span>
            ) : project.status === 'wip' ? (
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-400
                               bg-surface-950/80 backdrop-blur-sm border border-amber-400/20 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />IN PROGRESS
              </span>
            ) : <span />}
            {project.year && (
              <span className="text-xs text-sand-muted/50 bg-surface-950/70 backdrop-blur-sm
                               border border-graphite/40 px-3 py-1.5 rounded-full font-body">
                {project.year}
              </span>
            )}
          </div>
        </div>

        {/* Corner accent */}
        <div className={`absolute -bottom-3 ${isEven ? '-right-3' : '-left-3'} w-24 h-24 rounded-2xl border border-copper/15 pointer-events-none -z-10`} />
      </div>

      {/* Content side */}
      <div className={`flex flex-col ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <span className="font-display font-bold text-6xl leading-none text-copper/22 mb-4 select-none">
          {project.num}
        </span>

        <h3 className="font-display font-bold text-[clamp(1.5rem,2.5vw,2.1rem)] text-cream leading-tight mb-4
                       group-hover:text-copper/90 transition-colors duration-300">
          {project.title}
        </h3>

        {project.tagline && (
          <p className="text-copper/60 text-sm font-body font-medium mb-3 tracking-wide">{project.tagline}</p>
        )}

        <p className="text-sand-muted/75 text-base font-body font-light leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map(t => (
            <span key={t}
              className="text-xs font-body font-medium text-sand-muted/70 bg-surface-800 border border-graphite/50
                         px-3 py-1.5 rounded-full hover:border-copper/40 hover:text-copper transition-all duration-200 cursor-default">
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-body font-semibold text-sm
                         bg-surface-800 border border-graphite/50 text-sand-muted
                         hover:border-copper/50 hover:text-cream hover:bg-surface-700 transition-all duration-300">
              <GithubSVG /> GITHUB
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-body font-semibold text-sm
                         bg-copper text-surface-950 hover:bg-copper-light transition-all duration-300">
              <ExternalSVG /> LIVE DEMO
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
