'use client'
import { useState, useEffect } from 'react'
import { siteData } from '@/data/portfolio'

const navLinks = ['About', 'Skills', 'Projects', 'Achievements', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id.toLowerCase())
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <>
      <nav
        id="nav"
        className={`fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'scrolled' : ''
        }`}
      >
        {/* Logo */}
        <button onClick={() => scrollTo('hero')} className="font-display font-bold text-xl tracking-tight text-cream hover:text-copper transition-colors duration-300">
          <span className="text-copper">{siteData.name[0]}</span>{siteData.name.slice(1)}
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-body font-medium text-sand-muted list-none">
          {navLinks.map(link => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="relative hover:text-copper transition-colors duration-300 group"
              >
                {link}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-copper transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="hidden md:flex items-center gap-3">
          {siteData.availability && (
            <span className="text-xs font-body text-copper/80 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-copper animate-pulse" />
              Available
            </span>
          )}
          <button
            onClick={() => scrollTo('contact')}
            className="px-4 py-1.5 text-sm border border-copper/30 text-copper rounded-full hover:bg-copper/10 transition-all duration-300"
          >
            Hire me
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Open menu"
        >
          <span className="w-6 h-px bg-cream block" />
          <span className="w-4 h-px bg-cream block" />
          <span className="w-6 h-px bg-cream block" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[99] bg-surface-900/98 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 p-2 text-cream/60 hover:text-cream transition-colors"
          aria-label="Close"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {navLinks.map(link => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className="font-display text-4xl font-bold text-cream/80 hover:text-copper transition-colors"
          >
            {link}
          </button>
        ))}
      </div>
    </>
  )
}
