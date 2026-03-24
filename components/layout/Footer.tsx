import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-bone pt-16 pb-8">
      <div className="container-luxury">
        {/* 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-12 border-b border-charcoal-mid">
          {/* Brand info */}
          <div>
            <span
              className="block text-3xl italic text-bone mb-4"
              style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}
            >
              Arredamenti
            </span>
            <p className="text-warm-mid text-sm leading-relaxed max-w-xs">
              Arredamenti su misura con oltre 40 anni di esperienza artigianale nel cuore dell&apos;Umbria.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-warm-mid hover:text-gold transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-warm-mid hover:text-gold transition-colors duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-warm-mid mb-6">Navigazione</h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/collezioni', label: 'Collezioni' },
                { href: '/showroom', label: 'Showroom' },
                { href: '/contatti', label: 'Contatti' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-warm-mid hover:text-bone transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-warm-mid mb-6">Contatti</h3>
            <address className="not-italic text-sm text-warm-mid leading-relaxed">
              <p>Via del Duomo, 14</p>
              <p className="mb-3">05021 Avigliano Umbro (TR)</p>
              <a href="tel:+390744000000" className="hover:text-bone transition-colors duration-300 block mb-1">
                +39 0744 000000
              </a>
              <a href="mailto:info@arredamenti.it" className="hover:text-bone transition-colors duration-300 block">
                info@arredamenti.it
              </a>
            </address>
            <div className="mt-6">
              <p className="text-xs text-warm-mid uppercase tracking-wider">Orari showroom</p>
              <p className="text-sm text-warm-mid mt-1">Lun–Sab: 9:00–19:00</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-xs text-warm-mid">
            © {new Date().getFullYear()} Arredamenti. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-warm-mid hover:text-bone transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-warm-mid hover:text-bone transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
          <p className="text-xs text-warm-mid italic" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Sito realizzato con cura artigianale
          </p>
        </div>
      </div>
    </footer>
  )
}
