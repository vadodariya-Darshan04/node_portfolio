'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteData } from '@/data/portfolio'

const EduIcon = () => (
  <svg className="w-6 h-6 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
  </svg>
)

const WorkIcon = () => (
  <svg className="w-6 h-6 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"/>
  </svg>
)

const BulletSVG = () => (
  <svg className="w-3 h-3 mt-1 shrink-0 text-copper/60" fill="currentColor" viewBox="0 0 6 6">
    <polygon points="0,0 6,3 0,6"/>
  </svg>
)

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="experience" className="relative py-28 md:py-36 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />

      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-16">
          <span className="text-copper font-body text-sm tracking-[0.3em] uppercase">05 / Experience</span>
          <div className="flex-1 h-px bg-gradient-to-r from-copper/30 to-transparent" />
        </motion.div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12">

          {/* Education */}
          <div className="relative pb-16 lg:pb-0 lg:border-r border-graphite/30 lg:pr-12">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }} className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-2xl bg-surface-800 border border-graphite/40 flex items-center justify-center shrink-0">
                <EduIcon />
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-cream">Education</h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[11px] top-2 bottom-0 w-px bg-graphite/40" />
              <div className="space-y-8">
                {siteData.education.map((edu, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.15 + i * 0.1 }} className="relative pl-10">
                    <div className={`absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-2 flex items-center justify-center z-10
                      ${edu.status === 'in_progress' ? 'border-copper bg-surface-950' : 'border-graphite/60 bg-surface-800'}`}>
                      <span className={`w-2 h-2 rounded-full ${edu.status === 'in_progress' ? 'bg-copper animate-pulse' : 'bg-graphite/60'}`} />
                    </div>
                    <div className={`group bg-surface-800 border border-graphite/40 rounded-2xl p-6
                                    hover:border-copper/30 transition-all duration-300 hover:-translate-y-1
                                    hover:shadow-[0_12px_40px_rgba(0,0,0,0.35),0_0_20px_rgba(192,125,70,0.06)]
                                    ${edu.status === 'in_progress' ? 'border-copper/20' : ''}`}>
                      <h3 className="font-display font-bold text-lg text-cream mb-2 leading-snug group-hover:text-copper/90 transition-colors">{edu.degree}</h3>
                      <span className={`inline-block text-xs font-body font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-3
                        ${edu.status === 'in_progress'
                          ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/30'
                          : 'text-emerald-400 bg-emerald-400/10 border border-emerald-400/25'}`}>
                        {edu.status === 'in_progress' ? 'In Progress' : 'Completed'}
                      </span>
                      <p className="text-sand-muted/70 text-sm font-body leading-relaxed mb-4">{edu.institution}</p>
                      <span className="inline-flex items-center text-xs font-body font-medium text-sand-muted/70 bg-surface-900 border border-graphite/50 px-3 py-1.5 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="relative lg:pl-12 pt-16 lg:pt-0">
            <div className="absolute top-0 left-0 right-0 h-px bg-graphite/30 lg:hidden" />
            <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }} className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-2xl bg-surface-800 border border-graphite/40 flex items-center justify-center shrink-0">
                <WorkIcon />
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-cream">Experience</h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-[11px] top-2 bottom-0 w-px bg-graphite/40" />
              <div className="space-y-8">
                {siteData.experience.length > 0 ? siteData.experience.map((exp, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.15 + i * 0.1 }} className="relative pl-10">
                    <div className={`absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full border-2 flex items-center justify-center z-10
                      ${exp.current ? 'border-copper bg-surface-950' : 'border-graphite/60 bg-surface-800'}`}>
                      <span className={`w-2 h-2 rounded-full ${exp.current ? 'bg-copper animate-pulse' : 'bg-graphite/60'}`} />
                    </div>
                    <div className={`group bg-surface-800 border border-graphite/40 rounded-2xl p-6
                                    hover:border-copper/30 transition-all duration-300 hover:-translate-y-1
                                    hover:shadow-[0_12px_40px_rgba(0,0,0,0.35),0_0_20px_rgba(192,125,70,0.06)]
                                    ${exp.current ? 'border-copper/20' : ''}`}>
                      <h3 className="font-display font-bold text-lg text-cream mb-1 leading-snug group-hover:text-copper/90 transition-colors">{exp.title}</h3>
                      <p className="text-sand-muted/60 text-sm font-body mb-3">
                        {exp.companyUrl
                          ? <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-copper transition-colors">@ {exp.company}</a>
                          : `@ ${exp.company}`}
                        {exp.location && `, ${exp.location}`}
                      </p>
                      <span className="inline-flex items-center text-xs font-body font-medium text-copper/80 bg-copper/10 border border-copper/20 px-3 py-1.5 rounded-full mb-4">
                        {exp.period}
                      </span>
                      {exp.description && (
                        <p className="text-sand-muted/60 text-sm font-body leading-relaxed mb-4">{exp.description}</p>
                      )}
                      {exp.highlights && (
                        <ul className="space-y-2">
                          {exp.highlights.map((h, hi) => (
                            <li key={hi} className="flex items-start gap-2.5 text-sm font-body text-sand-muted/70">
                              <BulletSVG />{h}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                )) : (
                  <div className="relative pl-10">
                    <p className="text-sand-muted/40 text-sm font-body italic">No experience added yet.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
