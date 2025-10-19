"use client"

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

// Simple top progress bar without external deps.
export default function TopProgress() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const progressRef = useRef<HTMLDivElement | null>(null)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    // When pathname changes, stop the progress bar
    if (visible) {
      // finish animation
      if (progressRef.current) {
        progressRef.current.style.width = '100%'
      }
      // wait a bit then hide
      const t = window.setTimeout(() => {
        setVisible(false)
        if (progressRef.current) progressRef.current.style.width = '0%'
      }, 350)
      return () => { clearTimeout(t) }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    function isLocalLink(el: Element) {
      if (!(el instanceof HTMLAnchorElement)) return false
      const href = el.getAttribute('href') || ''
      if (!href || href.startsWith('#')) return false
      if (el.target && el.target !== '_self') return false
      // ignore external
      try {
        const url = new URL(href, window.location.href)
        return url.origin === window.location.origin
      } catch {
        return false
      }
    }

    function onClick(e: MouseEvent) {
      const target = e.target as Element | null
      if (!target) return
      const anchor = target.closest('a')
      if (!anchor) return
      if (!isLocalLink(anchor)) return
      // start progress
      if (timerRef.current) { clearInterval(timerRef.current) }
      setVisible(true)
      // increment width gradually
      let width = 6
      if (progressRef.current) progressRef.current.style.width = width + '%'
      timerRef.current = window.setInterval(() => {
        width = Math.min(90, width + Math.random() * 10)
        if (progressRef.current) progressRef.current.style.width = width + '%'
      }, 200) as unknown as number
    }

    window.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('click', onClick)
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  // small inline styles to avoid touching global CSS
  return (
    <div aria-hidden style={{ position: 'fixed', left: 0, top: 0, height: 3, width: '100%', pointerEvents: 'none', zIndex: 9999 }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, right: 0, overflow: 'hidden' }}>
        <div
          ref={progressRef}
          style={{
            height: '100%',
            width: '0%',
            background: 'linear-gradient(90deg,#e50914,#ff5a5f)',
            transition: 'width 200ms linear, opacity 300ms linear',
            opacity: visible ? 1 : 0,
          }}
        />
      </div>
    </div>
  )
}
