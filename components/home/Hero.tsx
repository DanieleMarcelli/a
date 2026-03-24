'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <section
      ref={ref}
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-bone"
      aria-label="Hero"
    >
      {/* LEFT: editorial text */}
      <div className="flex flex-col justify-end md:justify-center px-8 md:px-16 xl:px-24 pt-32 pb-16 md:py-0 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Eyebrow */}
          <p className="text-warm-mid text-xs uppercase tracking-widest mb-8">
            Artigianato Italiano dal 1984
          </p>

          {/* Headline */}
          <h1
            className="heading-display text-ink mb-8"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 6rem)' }}
          >
            L&apos;arredamento<br />è la firma<br />di chi abita.
          </h1>

          {/* Divider */}
          <div className="section-line mb-8" />

          {/* Subtext */}
          <p className="text-warm-mid text-sm max-w-sm leading-relaxed mb-12">
            Mobili su misura realizzati a mano da maestri artigiani. Ogni pezzo racconta una storia di materiali scelti, dettagli curati, tempo dedicato.
          </p>

          {/* CTA */}
          <Link href="#collections" className="btn-dark">
            Scopri la collezione
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="hidden md:flex items-center gap-3 mt-16"
        >
          <div className="w-px h-12 bg-line" />
          <span className="text-xs text-warm-mid uppercase tracking-widest rotate-0">Scroll</span>
        </motion.div>
      </div>

      {/* RIGHT: full-bleed parallax image */}
      <div className="relative h-64 md:h-full overflow-hidden">
        <motion.div
          className="absolute inset-0 scale-110"
          style={{ y: imageY }}
        >
          <Image
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=85"
            alt="Interno arredato con eleganza italiana"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACMQAAIBBAMBAQEBAAAAAAAAAAECAwQFERIhMUFRYf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCw2jPxb3VuNNLqEQmHlXe+kkLDMB9V1kqRnWdwS0bqfYv1ICgABFAAAA"
          />
        </motion.div>
        {/* Gradient overlay left edge */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bone to-transparent z-10 hidden md:block" />
      </div>
    </section>
  )
}
