'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteData } from '@/data/portfolio'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } }

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="relative py-28 md:py-36 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />

      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Label */}
        <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="flex items-center gap-4 mb-16">
          <span className="text-copper font-body text-sm tracking-[0.3em] uppercase">01 / About</span>
          <div className="flex-1 h-px bg-gradient-to-r from-copper/30 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mt-10">

          {/* Left */}
          <div>
            <motion.h2 variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="font-display font-bold text-[clamp(1.8rem,4vw,3rem)] leading-tight tracking-tight text-cream mb-6 mt-2">
              {siteData.about.heading.split('&')[0]}&{' '}
              <span className="text-copper italic font-light">{siteData.about.heading.split('& ')[1]}</span>
            </motion.h2>

            <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.1 }} className="space-y-5">
              <p className="text-base md:text-lg font-body font-light leading-relaxed text-sand-muted/80">
                {siteData.about.bio1}
              </p>
              <p className="text-base md:text-lg font-body font-light leading-relaxed text-sand-muted/80">
                {siteData.about.bio2.split('Full Stack Development')[0]}
                <strong className="text-copper font-semibold">Full Stack Development</strong>
                {siteData.about.bio2.split('Full Stack Development')[1].split('Artificial Intelligence')[0]}
                <strong className="text-copper font-semibold">Artificial Intelligence</strong>
                {siteData.about.bio2.split('Artificial Intelligence')[1]}
              </p>
            </motion.div>

            <motion.ul variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.2 }} className="mt-8 space-y-3">
              {siteData.about.bullets.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-body text-sand-muted/80">
                  <svg className="w-4 h-4 mt-0.5 shrink-0 text-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {point}
                </li>
              ))}
            </motion.ul>

            <motion.button variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.3 }}
              onClick={() => { const el = document.getElementById('contact'); if(el) window.scrollTo({top: el.offsetTop - 80, behavior:'smooth'}) }}
              className="mt-10 inline-flex items-center gap-2 text-copper font-body font-medium text-sm hover:gap-4 transition-all duration-300">
              Let's connect
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>

          {/* Right — specialty cards */}
          <div className="flex flex-col gap-4">
            {siteData.about.specialties.map((s, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.1 * (i + 1) }}
                className="group flex items-start gap-5 p-6 rounded-2xl bg-surface-800 border border-graphite/40
                           hover:border-copper/35 hover:bg-surface-700 transition-all duration-300 cursor-default
                           hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(192,125,70,0.1)]">
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl
                                bg-surface-900 group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-cream text-base mb-1.5 group-hover:text-copper transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-sm font-body leading-relaxed text-sand-muted/75">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
