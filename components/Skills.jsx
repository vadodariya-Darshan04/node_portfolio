'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteData } from '@/data/portfolio'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1], delay } }
})

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="skills" className="relative py-28 md:py-36 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />

      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div variants={fadeUp()} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="flex items-center gap-4 mb-16">
          <span className="text-copper font-body text-sm tracking-[0.3em] uppercase">02 / Skills</span>
          <div className="flex-1 h-px bg-gradient-to-r from-copper/30 to-transparent" />
        </motion.div>

        <motion.h2 variants={fadeUp(0.1)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] tracking-tight text-cream mb-16">
          Tools &amp; <span className="text-copper italic font-light">Technologies</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteData.skills.map((cat, i) => (
            <motion.div key={cat.category}
              variants={fadeUp(0.05 * i)} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              className="group relative bg-surface-800 border border-graphite/40 rounded-2xl p-6
                         hover:border-copper/30 transition-all duration-300
                         hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.35),0_0_24px_rgba(192,125,70,0.07)]">

              {/* Top glow on hover */}
              <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-copper/0 to-transparent group-hover:via-copper/40 transition-all duration-500" />

              <h3 className="font-display font-semibold text-cream text-base text-center mb-4 pb-4
                             border-b border-graphite/40 group-hover:text-copper transition-colors duration-300">
                {cat.category}
              </h3>

              <ul className="space-y-3 mt-2">
                {cat.items.map(skill => (
                  <li key={skill.name} className="flex items-center gap-3 cursor-default group/item">
                    <span className="w-8 h-8 flex items-center justify-center shrink-0 rounded-lg
                                     bg-surface-900 group-hover/item:bg-surface-700 transition-colors duration-200">
                      <i className={`${skill.icon} text-lg`} />
                    </span>
                    <span className="text-sm font-body text-sand-muted group-hover/item:text-cream transition-colors duration-200">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
