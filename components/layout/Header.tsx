'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/collezioni', label: 'Collezioni' },
  { href: '/showroom', label: 'Showroom' },
  { href: '/contatti', label: 'Contatti' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16"
        animate={{
          backgroundColor: scrolled ? 'rgba(245, 240, 232, 0.97)' : 'rgba(245, 240, 232, 0)',
          borderBottom: scrolled ? '1px solid rgba(221, 213, 200, 0.8)' : '1px solid transparent',
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ backdropFilter: scrolled ? 'blur(12px)' : 'none' }}
      >
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span
              className="text-2xl italic text-ink"
              style={{
                fontFamily: 'var(--font-cormorant)',
                letterSpacing: '-0.02em',
                fontWeight: 400,
              }}
            >
              Arredamenti
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs uppercase tracking-widest transition-colors duration-300 ${
                  pathname === link.href
                    ? 'text-gold'
                    : 'text-warm-mid hover:text-ink'
                }`}
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Showroom CTA + hamburger */}
          <div className="flex items-center gap-6">
            <Link
              href="/showroom"
              className="hidden md:inline-block btn-gold text-xs"
            >
              Showroom
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-ink"
              aria-label="Apri menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-charcoal flex flex-col"
          >
            <div className="flex items-center justify-between px-8 h-20">
              <span
                className="text-2xl italic text-bone"
                style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}
              >
                Arredamenti
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-bone"
                aria-label="Chiudi menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="text-4xl italic text-bone hover:text-gold transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-8 pb-12 text-center">
              <p className="text-warm-mid text-xs tracking-widest uppercase">
                Via del Duomo 14 · Avigliano Umbro
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
