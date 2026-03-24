import type { Metadata } from 'next'
import Image from 'next/image'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contatti',
  description: 'Contattaci per informazioni sui nostri arredamenti su misura o per prenotare una visita al nostro showroom di Avigliano Umbro.',
  openGraph: {
    title: 'Contatti – Arredamenti',
    description: 'Scrivici o vieni a trovarci nel nostro showroom di Avigliano Umbro (TR).',
  },
}

export default function ContattiPage() {
  return (
    <main className="bg-bone min-h-screen">
      {/* Page header */}
      <div className="container-luxury pt-36 pb-16">
        <RevealOnScroll>
          <p className="text-warm-mid text-xs uppercase tracking-widest mb-4">Parliamo</p>
          <h1
            className="heading-display text-ink"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            Contattaci
          </h1>
        </RevealOnScroll>
      </div>

      {/* Split layout */}
      <div className="container-luxury pb-24">
        <div className="grid grid-cols-1 md:grid-cols-[3fr,2fr] gap-16 md:gap-24">
          {/* LEFT: Form */}
          <RevealOnScroll>
            <ContactForm />
          </RevealOnScroll>

          {/* RIGHT: Info + image */}
          <aside className="space-y-10">
            <RevealOnScroll delay={0.1}>
              <div className="relative h-52 overflow-hidden img-zoom-container">
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"
                  alt="Dettaglio showroom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACMQAAIBBAMBAQEBAAAAAAAAAAECAwQFERIhMUFRYf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCw2jPxb3VuNNLqEQmHlXe+kkLDMB9V1kqRnWdwS0bqfYv1ICgABFAAAA"
                />
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <div>
                <h2 className="text-xs text-warm-mid uppercase tracking-widest mb-4">Showroom</h2>
                <address className="not-italic text-sm text-ink leading-relaxed space-y-2">
                  <p>Via del Duomo, 14</p>
                  <p>05021 Avigliano Umbro (TR)</p>
                  <a
                    href="tel:+390744000000"
                    className="block text-warm-mid hover:text-ink transition-colors duration-300 mt-3"
                  >
                    +39 0744 000000
                  </a>
                  <a
                    href="mailto:info@arredamenti.it"
                    className="block text-warm-mid hover:text-ink transition-colors duration-300"
                  >
                    info@arredamenti.it
                  </a>
                </address>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div>
                <h2 className="text-xs text-warm-mid uppercase tracking-widest mb-4">Orari</h2>
                <dl className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-warm-mid">Lun – Ven</dt>
                    <dd className="text-ink">9:00 – 19:00</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-warm-mid">Sabato</dt>
                    <dd className="text-ink">9:00 – 18:00</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-warm-mid">Domenica</dt>
                    <dd className="text-ink">Chiuso</dd>
                  </div>
                </dl>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.25}>
              <div className="border-t border-line pt-8">
                <p
                  className="italic text-warm-mid text-lg"
                  style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}
                >
                  «&nbsp;Ogni grande mobile inizia con una conversazione.&nbsp;»
                </p>
              </div>
            </RevealOnScroll>
          </aside>
        </div>
      </div>
    </main>
  )
}
