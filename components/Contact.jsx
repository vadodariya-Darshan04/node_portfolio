'use client'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { siteData } from '@/data/portfolio'
import * as emailjs from "@emailjs/browser";

const GithubSVG = () => (
  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

const LinkedinSVG = () => (
  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('sending')

  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: siteData.email,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  } catch (err) {
    console.error('EmailJS error:', err)
    setStatus('error')
    setTimeout(() => setStatus('idle'), 4000)
  }
}

  const socialIcons = {
    github: <GithubSVG />,
    linkedin: <LinkedinSVG />,
  }

  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none opacity-[0.06]"
        style={{ background: 'radial-gradient(circle,#c07d46,transparent 70%)', transform: 'translate(20%,20%)' }} />

      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-16">
          <span className="text-copper font-body text-sm tracking-[0.3em] uppercase">06 / Contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-copper/30 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-tighter text-cream mb-6">
              Let's build<br />
              <span className="text-copper italic font-light">something</span><br />
              great.
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-sand-muted/70 font-body font-light leading-relaxed max-w-sm text-base md:text-lg mb-10">
              I'm currently open to new opportunities. Whether you have a question or just want to say hi — drop me a message!
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }} className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sand-muted">
                <span className="w-8 h-8 rounded-full bg-surface-800 border border-graphite/50 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-sand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                  </svg>
                </span>
                <span className="font-body text-sm">{siteData.location}</span>
              </div>
              <a href={`mailto:${siteData.email}`}
                className="flex items-center gap-3 text-sand-muted hover:text-copper transition-colors duration-300 group">
                <span className="w-8 h-8 rounded-full bg-surface-800 border border-graphite/50 flex items-center justify-center group-hover:border-copper/40 transition-all text-xs font-bold">
                  @
                </span>
                <span className="font-body text-sm">{siteData.email}</span>
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }} className="flex flex-wrap gap-3">
              {siteData.socials.map((s) => (
                <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-graphite/50
                             text-sand-muted/70 hover:text-copper hover:border-copper/40 hover:bg-copper/5
                             transition-all duration-300 text-xs font-body font-medium">
                  {socialIcons[s.platform]}
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}>
            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-xs text-sand-muted/50 tracking-widest uppercase mb-2 font-body">Name</label>
                <input
                  type="text" name="name" value={form.name} onChange={handleChange} required
                  placeholder="Your name"
                  className="w-full bg-surface-800 border border-graphite/40 rounded-xl px-5 py-4
                             text-cream placeholder:text-sand-muted/30 font-body text-sm
                             focus:outline-none focus:border-copper/50 focus:bg-surface-700 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-xs text-sand-muted/50 tracking-widest uppercase mb-2 font-body">Email</label>
                <input
                  type="email" name="email" value={form.email} onChange={handleChange} required
                  placeholder="your@email.com"
                  className="w-full bg-surface-800 border border-graphite/40 rounded-xl px-5 py-4
                             text-cream placeholder:text-sand-muted/30 font-body text-sm
                             focus:outline-none focus:border-copper/50 focus:bg-surface-700 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-xs text-sand-muted/50 tracking-widest uppercase mb-2 font-body">Message</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} required rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-surface-800 border border-graphite/40 rounded-xl px-5 py-4
                             text-cream placeholder:text-sand-muted/30 font-body text-sm
                             focus:outline-none focus:border-copper/50 focus:bg-surface-700 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-copper text-surface-950 font-display font-semibold text-sm rounded-xl
                           hover:bg-copper-light transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'idle' && 'Send Message'}
                {status === 'sending' && 'Sending…'}
                {status === 'success' && '✓ Message Sent!'}
                {status === 'error' && 'Failed — Try Again'}
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
