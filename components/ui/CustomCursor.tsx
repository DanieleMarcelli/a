'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const followerX = useSpring(cursorX, { stiffness: 150, damping: 20 })
  const followerY = useSpring(cursorY, { stiffness: 150, damping: 20 })

  const isHovering = useRef(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleHoverIn = () => {
      isHovering.current = true
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(-50%, -50%) scale(0)`
      }
      if (followerRef.current) {
        followerRef.current.style.width = '60px'
        followerRef.current.style.height = '60px'
        followerRef.current.style.borderColor = 'var(--color-gold)'
        followerRef.current.style.background = 'rgba(184, 150, 62, 0.08)'
      }
    }

    const handleHoverOut = () => {
      isHovering.current = false
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(-50%, -50%) scale(1)`
      }
      if (followerRef.current) {
        followerRef.current.style.width = '40px'
        followerRef.current.style.height = '40px'
        followerRef.current.style.borderColor = 'var(--color-charcoal)'
        followerRef.current.style.background = 'transparent'
      }
    }

    window.addEventListener('mousemove', moveCursor)

    const hoverTargets = document.querySelectorAll('a, button, [data-hover]')
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverIn)
      el.addEventListener('mouseleave', handleHoverOut)
    })

    const observer = new MutationObserver(() => {
      const newTargets = document.querySelectorAll('a, button, [data-hover]')
      newTargets.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverIn)
        el.removeEventListener('mouseleave', handleHoverOut)
        el.addEventListener('mouseenter', handleHoverIn)
        el.addEventListener('mouseleave', handleHoverOut)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      observer.disconnect()
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Small dot cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9998] w-3 h-3 bg-charcoal rounded-full"
        style={{
          left: cursorX,
          top: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          transition: 'transform 0.2s ease',
        }}
      />
      {/* Larger follower */}
      <motion.div
        ref={followerRef}
        className="fixed pointer-events-none z-[9997] rounded-full border border-charcoal"
        style={{
          left: followerX,
          top: followerY,
          translateX: '-50%',
          translateY: '-50%',
          width: '40px',
          height: '40px',
          transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background 0.3s ease',
        }}
      />
    </>
  )
}
