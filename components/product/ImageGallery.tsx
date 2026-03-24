'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ImageGalleryProps {
  images: string[]
  productName: string
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [active, setActive] = useState(0)

  const prev = useCallback(() => setActive((a) => (a === 0 ? images.length - 1 : a - 1)), [images.length])
  const next = useCallback(() => setActive((a) => (a === images.length - 1 ? 0 : a + 1)), [images.length])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [prev, next])

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="relative h-[420px] md:h-[560px] overflow-hidden bg-bone-dark" role="img" aria-label={productName}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <Image
              src={images[active]}
              alt={`${productName} – foto ${active + 1}`}
              fill
              className="object-cover"
              priority={active === 0}
              sizes="(max-width: 768px) 100vw, 55vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACMQAAIBBAMBAQEBAAAAAAAAAAECAwQFERIhMUFRYf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCw2jPxb3VuNNLqEQmHlXe+kkLDMB9V1kqRnWdwS0bqfYv1ICgABFAAAA"
            />
          </motion.div>
        </AnimatePresence>

        {/* Nav arrows (only if multiple) */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-bone/80 flex items-center justify-center hover:bg-bone transition-colors duration-200"
              aria-label="Immagine precedente"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-bone/80 flex items-center justify-center hover:bg-bone transition-colors duration-200"
              aria-label="Immagine successiva"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        {/* Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 text-xs text-bone/80 bg-charcoal/50 px-2 py-1">
            {active + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2" role="list" aria-label="Miniature">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative w-20 h-20 overflow-hidden border-2 transition-colors duration-200 ${
                i === active ? 'border-gold' : 'border-transparent hover:border-line'
              }`}
              aria-label={`Seleziona foto ${i + 1}`}
              aria-pressed={i === active}
            >
              <Image
                src={src}
                alt={`${productName} miniatura ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
