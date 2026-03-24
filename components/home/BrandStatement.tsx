import RevealOnScroll from '@/components/ui/RevealOnScroll'
import CountUp from '@/components/ui/CountUp'

const stats = [
  { value: 40, suffix: '+', label: 'Anni di esperienza' },
  { value: 100, suffix: '%', label: 'Made in Italy' },
  { value: 3, suffix: '', label: 'Generazioni di artigiani' },
]

export default function BrandStatement() {
  return (
    <section className="py-24 md:py-40 bg-bone" aria-label="Brand statement">
      <div className="container-luxury">
        <div className="max-w-4xl mx-auto text-center">
          {/* Divider */}
          <RevealOnScroll>
            <div className="section-line--gold section-line mx-auto mb-12" />
          </RevealOnScroll>

          {/* Quote */}
          <RevealOnScroll delay={0.1}>
            <blockquote>
              <p
                className="heading-display text-ink mb-6"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)' }}
              >
                «&nbsp;Un mobile ben fatto non invecchia.
                <br />
                Porta con sé il tempo del chi lo ha costruito
                <br />e di chi lo abiterà.&nbsp;»
              </p>
              <footer className="text-warm-mid text-xs uppercase tracking-widest">
                — Maestro artigiano, terza generazione
              </footer>
            </blockquote>
          </RevealOnScroll>

          {/* Divider */}
          <RevealOnScroll delay={0.2}>
            <div className="section-line--gold section-line mx-auto mt-12 mb-16" />
          </RevealOnScroll>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            {stats.map((stat, i) => (
              <RevealOnScroll key={stat.label} delay={0.1 * i}>
                <div className="text-center">
                  <p
                    className="text-gold mb-2"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontStyle: 'italic',
                      fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-warm-mid text-xs uppercase tracking-widest">{stat.label}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
