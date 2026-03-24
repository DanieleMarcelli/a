'use client'

import { useState } from 'react'
import { FileText, Package } from 'lucide-react'
import type { Product } from '@/lib/products'
import ContactModal from './ContactModal'

export default function ProductInfo({ product }: { product: Product }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className="md:sticky md:top-28 space-y-8">
        {/* Category tag */}
        <span className="text-xs text-warm-mid uppercase tracking-widest">{product.categoryLabel}</span>

        {/* Name */}
        <h1
          className="heading-display text-ink"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}
        >
          {product.name}
        </h1>

        {/* Short description */}
        <p className="text-warm-mid text-sm leading-relaxed">{product.shortDescription}</p>

        {/* Divider */}
        <div className="section-line" />

        {/* Materials */}
        <div>
          <h2 className="text-xs text-warm-mid uppercase tracking-widest mb-4 flex items-center gap-2">
            <Package size={14} />
            Materiali
          </h2>
          <ul className="space-y-2">
            {product.materials.map((mat) => (
              <li key={mat} className="text-sm text-ink flex items-center gap-3">
                <span className="w-1 h-1 bg-gold rounded-full shrink-0" />
                {mat}
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="section-line" />

        {/* Dimensions */}
        <div>
          <h2 className="text-xs text-warm-mid uppercase tracking-widest mb-4">Dimensioni</h2>
          <table className="w-full text-sm" aria-label="Dimensioni prodotto">
            <tbody>
              {product.dimensions.map((dim) => (
                <tr key={dim.label} className="border-b border-line last:border-0">
                  <td className="py-2 text-warm-mid">{dim.label}</td>
                  <td className="py-2 text-ink text-right font-medium">{dim.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Divider */}
        <div className="section-line" />

        {/* Price */}
        <div>
          <span className="text-xs text-warm-mid uppercase tracking-widest block mb-1">Prezzo</span>
          <span
            className="italic text-gold"
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem' }}
          >
            {product.price}
          </span>
        </div>

        {/* CTAs */}
        <div className="space-y-3">
          <button
            onClick={() => setModalOpen(true)}
            className="btn-dark w-full text-center"
          >
            Richiedi informazioni
          </button>
          <button
            className="btn-gold w-full text-center flex items-center justify-center gap-2"
            aria-label="Scarica scheda tecnica PDF"
          >
            <FileText size={14} />
            Scarica scheda tecnica
          </button>
        </div>
      </div>

      <ContactModal
        productName={product.name}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}
