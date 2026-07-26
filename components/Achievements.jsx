'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteData } from '@/data/portfolio'

const prizeConfig = {
  '1st': { bar: 'from-amber-500/80 via-amber-400 to-amber-500/40', pill: 'text-amber-400 bg-amber-400/10 border-amber-400/20', icon: 'text-amber-400' },
  'winner': { bar: 'from-amber-500/80 via-amber-400 to-amber-500/40', pill: 'text-amber-400 bg-amber-400/10 border-amber-400/20', icon: 'text-amber-400' },
  '2nd': { bar: 'from-copper/80 via-copper-light to-copper/30', pill: 'text-copper bg-copper/10 border-copper/25', icon: 'text-copper' },
  'runner_up': { bar: 'from-copper/80 via-copper-light to-copper/30', pill: 'text-copper bg-copper/10 border-copper/25', icon: 'text-copper' },
  '3rd': { bar: 'from-orange-600/70 via-orange-500/80 to-orange-600/30', pill: 'text-orange-400 bg-orange-400/10 border-orange-400/20', icon: 'text-orange-400' },
}

const StarSVG = ({ className }) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
  </svg>
)

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="achievements" className="relative py-28 md:py-36 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.035]"
          style={{ background: 'radial-gradient(circle,#c07d46,transparent 65%)' }} />
      </div>

      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-16">
          <span className="text-copper font-body text-sm tracking-[0.3em] uppercase">04 / Achievements</span>
          <div className="flex-1 h-px bg-gradient-to-r from-copper/30 to-transparent" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }} className="mb-20">
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] tracking-tight text-cream leading-tight">
            Recognized <span className="text-copper italic font-light">Work</span>
          </h2>
          <p className="text-sand-muted/50 text-base font-body font-light mt-4 max-w-md leading-relaxed">
            Awards and recognitions earned through competition, collaboration, and craft.
          </p>
        </motion.div>

        {siteData.achievements.map((group, gi) => (
          <div key={gi} className="mb-20">

            {/* Event banner */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="relative flex items-center gap-5 mb-10 p-5 rounded-2xl bg-surface-800 border border-graphite/40 overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-copper/80 via-copper to-copper/20 rounded-l-2xl" />
              <div className="w-10 h-10 rounded-xl bg-copper/10 border border-copper/25 flex items-center justify-center shrink-0 ml-2">
                <svg className="w-5 h-5 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5M7.5 18.75v-4.5M3 6.75V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25v1.5M3 6.75h18M3 6.75a9 9 0 009 9m0 0a9 9 0 009-9"/>
                </svg>
              </div>
              <p className="text-cream font-body font-medium text-sm">{group.event}</p>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {group.items.map((item, i) => {
                const cfg = prizeConfig[item.prize] || prizeConfig['3rd']
                return (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.05 * i + 0.2 }}
                    className={`group relative flex flex-col rounded-2xl overflow-hidden cursor-default
                      transition-all duration-400 hover:-translate-y-1
                      hover:shadow-[0_20px_60px_rgba(0,0,0,0.45),0_0_30px_rgba(192,125,70,0.08)]
                      ${item.featured
                        ? 'border border-copper/35 shadow-[0_0_40px_rgba(192,125,70,0.12)]'
                        : 'border border-graphite/40'}`}
                    style={{ background: '#161412' }}>

                    {/* Top bar */}
                    <div className={`h-1 w-full shrink-0 bg-gradient-to-r ${cfg.bar}`} />

                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex items-start justify-between mb-6">

                        {/* Icon */}
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0
                                        border border-graphite/50 bg-surface-900
                                        group-hover:border-copper/40 group-hover:bg-surface-700 transition-all duration-300">
                          <StarSVG className={cfg.icon} />
                        </div>

                        {/* Prize pill */}
                        <span className={`inline-flex items-center gap-1.5 text-xs font-body font-semibold px-3 py-1.5 rounded-full border ${cfg.pill}`}>
                          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                          {item.prizeLabel}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-lg text-cream mb-1.5 leading-snug group-hover:text-copper transition-colors duration-300">
                        {item.title}
                      </h3>
                      {item.category && (
                        <p className="text-xs font-body font-medium text-copper/60 mb-4 tracking-wide">{item.category}</p>
                      )}
                      {item.description && (
                        <p className="text-sm font-body text-sand-muted/55 leading-relaxed mt-auto pt-4 border-t border-graphite/30">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* Shimmer */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                      style={{ background: 'linear-gradient(135deg,rgba(192,125,70,0.04) 0%,transparent 60%)' }} />

                    {/* Featured ring */}
                    {item.featured && (
                      <div className="absolute -inset-px rounded-2xl border border-copper/20 pointer-events-none animate-featured-pulse" />
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
