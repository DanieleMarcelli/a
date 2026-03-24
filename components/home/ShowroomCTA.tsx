import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export default function ShowroomCTA() {
  return (
    <section className="py-24 md:py-32 bg-charcoal" aria-label="Showroom">
      <div className="container-luxury">
        <div className="max-w-3xl mx-auto text-center">
          <RevealOnScroll>
            <p className="text-warm-mid text-xs uppercase tracking-widest mb-8">
              Visita il nostro spazio
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2
              className="heading-display text-bone mb-8"
              style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}
            >
              Il bello si vede,
              <br />si tocca,
              <br /><em>si vive.</em>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="section-line mx-auto mb-8" style={{ background: 'var(--color-warm-mid)' }} />
          </RevealOnScroll>

          <RevealOnScroll delay={0.25}>
            <address className="not-italic text-warm-mid text-sm mb-10 leading-relaxed">
              Via del Duomo, 14 · 05021 Avigliano Umbro (TR)
              <span className="block mt-1">
                <a href="tel:+390744000000" className="hover:text-bone transition-colors duration-300">
                  +39 0744 000000
                </a>
              </span>
            </address>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <Link href="/contatti" className="btn-bone">
              Prenota una visita
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
