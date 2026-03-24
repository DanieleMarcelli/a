'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { products } from '@/lib/products'
import type { Product } from '@/lib/products'

const ambienteOptions = ['Tutti', 'Soggiorno', 'Cucina', 'Camera']
const stileOptions = ['Tutti', 'Classico', 'Contemporaneo', 'Minimalista']
const materialeOptions = ['Tutti', 'Legno', 'Marmo', 'Tessuto', 'Metallo']

function FilterBar({
  activeAmbiente,
  activeStile,
  activeMateriale,
  onAmbiente,
  onStile,
  onMateriale,
}: {
  activeAmbiente: string
  activeStile: string
  activeMateriale: string
  onAmbiente: (v: string) => void
  onStile: (v: string) => void
  onMateriale: (v: string) => void
}) {
  return (
    <div className="sticky top-20 z-30 bg-bone/95 border-b border-line backdrop-blur-sm py-4">
      <div className="container-luxury">
        <div className="flex flex-wrap gap-8 items-center">
          <FilterGroup label="Ambiente" options={ambienteOptions} active={activeAmbiente} onChange={onAmbiente} />
          <div className="w-px h-5 bg-line hidden md:block" />
          <FilterGroup label="Stile" options={stileOptions} active={activeStile} onChange={onStile} />
          <div className="w-px h-5 bg-line hidden md:block" />
          <FilterGroup label="Materiale" options={materialeOptions} active={activeMateriale} onChange={onMateriale} />
        </div>
      </div>
    </div>
  )
}

function FilterGroup({
  label,
  options,
  active,
  onChange,
}: {
  label: string
  options: string[]
  active: string
  onChange: (v: string) => void
}) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-xs text-warm-mid uppercase tracking-widest hidden sm:block">{label}:</span>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`text-xs uppercase tracking-wider px-3 py-1 border transition-all duration-300 ${
            active === opt
              ? 'border-gold text-gold bg-gold/5'
              : 'border-transparent text-warm-mid hover:text-ink'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link
        href={`/prodotto/${product.slug}`}
        className="group block border border-line bg-bone hover:shadow-card-hover transition-shadow duration-500"
      >
        <div className="relative h-64 overflow-hidden img-zoom-container">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACMQAAIBBAMBAQEBAAAAAAAAAAECAwQFERIhMUFRYf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCw2jPxb3VuNNLqEQmHlXe+kkLDMB9V1kqRnWdwS0bqfYv1ICgABFAAAA"
          />
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <h3
              className="text-ink italic text-xl"
              style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}
            >
              {product.name}
            </h3>
            <span className="text-xs text-warm-mid uppercase tracking-wider mt-1 ml-2 shrink-0">
              {product.categoryLabel}
            </span>
          </div>
          <p className="text-warm-mid text-sm line-clamp-2 leading-relaxed mb-3">
            {product.shortDescription}
          </p>
          <span className="text-xs text-warm-mid uppercase tracking-widest">{product.price}</span>
        </div>
      </Link>
    </motion.div>
  )
}

export default function CollectionsGrid({ initialCategory }: { initialCategory?: string }) {
  const [ambiente, setAmbiente] = useState(
    initialCategory ? initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1) : 'Tutti'
  )
  const [stile, setStile] = useState('Tutti')
  const [materiale, setMateriale] = useState('Tutti')

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchAmbiente = ambiente === 'Tutti' || p.categoryLabel === ambiente
      const matchStile = stile === 'Tutti' || p.style === stile.toLowerCase()
      const matchMateriale = materiale === 'Tutti' || p.material === materiale.toLowerCase()
      return matchAmbiente && matchStile && matchMateriale
    })
  }, [ambiente, stile, materiale])

  return (
    <>
      <FilterBar
        activeAmbiente={ambiente}
        activeStile={stile}
        activeMateriale={materiale}
        onAmbiente={setAmbiente}
        onStile={setStile}
        onMateriale={setMateriale}
      />

      <div className="container-luxury py-12">
        <p className="text-warm-mid text-xs uppercase tracking-widest mb-8">
          {filtered.length} {filtered.length === 1 ? 'prodotto' : 'prodotti'}
        </p>

        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {filtered.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-24"
            >
              <p className="text-warm-mid text-sm">Nessun prodotto trovato con questi filtri.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
