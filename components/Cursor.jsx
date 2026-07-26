'use client'
import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    if (window.innerWidth < 768) return

    const dot = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    const glow = document.getElementById('mouse-glow')
    if (!dot || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0, gx = 0, gy = 0

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
    })

    const animRing = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'

      if (glow) {
        gx += (mx - gx) * 0.06
        gy += (my - gy) * 0.06
        glow.style.left = gx + 'px'
        glow.style.top = gy + 'px'
        glow.style.opacity = '1'
      }
      requestAnimationFrame(animRing)
    }
    animRing()

    const hoverEls = 'a, button, input, textarea'
    document.querySelectorAll(hoverEls).forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('hovering'))
      el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'))
    })

    document.addEventListener('mousedown', () => document.body.classList.add('clicking'))
    document.addEventListener('mouseup', () => document.body.classList.remove('clicking'))
    document.addEventListener('mouseleave', () => { if(glow) glow.style.opacity = '0' })
    document.addEventListener('mouseenter', () => { if(glow) glow.style.opacity = '1' })
  }, [])

  return (
    <>
      {/* Custom cursor */}
      <div id="cursor" className="hidden md:block">
        <div id="cursor-dot" style={{ position:'fixed', top:0, left:0, width:8, height:8, background:'#c07d46', borderRadius:'50%', transform:'translate(-50%,-50%)', pointerEvents:'none', zIndex:9999 }} />
        <div id="cursor-ring" style={{ position:'fixed', top:0, left:0, width:32, height:32, border:'1px solid rgba(192,125,70,0.6)', borderRadius:'50%', transform:'translate(-50%,-50%)', pointerEvents:'none', zIndex:9999, transition:'width 0.3s,height 0.3s,border-color 0.3s' }} />
      </div>

      {/* Mouse glow */}
      <div id="mouse-glow" style={{
        position:'fixed', pointerEvents:'none', zIndex:0,
        width:400, height:400, borderRadius:'50%', opacity:0,
        background:'radial-gradient(circle,rgba(192,125,70,0.1) 0%,transparent 70%)',
        transform:'translate(-50%,-50%)', transition:'opacity 0.5s'
      }} />

      {/* Noise overlay */}
      <div className="noise fixed inset-0 pointer-events-none z-[1] opacity-[0.03]" />

      {/* Scroll progress */}
      <ScrollProgress />
    </>
  )
}

function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById('scroll-bar')
    if (!bar) return
    const handler = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      bar.style.width = pct + '%'
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div id="scroll-bar" className="fixed top-0 left-0 h-[2px] z-[9998]"
      style={{ background:'linear-gradient(to right,#8a5c38,#c07d46,#d4956a)', width:'0%', transition:'width 0.1s' }} />
  )
}
