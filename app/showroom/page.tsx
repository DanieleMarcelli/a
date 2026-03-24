import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Showroom',
  description: 'Visita il nostro showroom ad Avigliano Umbro. Oltre 500mq di spazio espositivo con arredamenti su misura realizzati a mano da maestri artigiani.',
  openGraph: {
    title: 'Showroom – Arredamenti',
    description: 'Vieni a toccare con mano la qualità del nostro artigianato. Ad Avigliano Umbro (TR).',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
        width: 1200,
        height: 630,
      },
    ],
  },
}

const teamMembers = [
  {
    name: 'Giovanni Rossi',
    role: 'Fondatore & Maestro Falegname',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    bio: 'Quarant\'anni di esperienza nella lavorazione del legno pregiato. Ha fondato l\'azienda nel 1984 dopo una formazione artigianale a Firenze.',
  },
  {
    name: 'Marco Rossi',
    role: 'Direttore Creativo',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'Figlio del fondatore, ha studiato design del prodotto a Milano prima di tornare a portare una visione contemporanea all\'artigianato di famiglia.',
  },
  {
    name: 'Sofia Bianchi',
    role: 'Architetto d\'interni',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    bio: 'Collabora con l\'azienda da oltre dieci anni, seguendo i clienti dalla progettazione alla consegna con un approccio olistico all\'interior design.',
  },
]

const hours = [
  { day: 'Lunedì – Venerdì', time: '9:00 – 19:00' },
  { day: 'Sabato', time: '9:00 – 18:00' },
  { day: 'Domenica', time: 'Chiuso' },
]

export default function ShowroomPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen overflow-hidden" aria-label="Showroom hero">
        <Image
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=85"
          alt="Il nostro showroom"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACMQAAIBBAMBAQEBAAAAAAAAAAECAwQFERIhMUFRYf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCw2jPxb3VuNNLqEQmHlXe+kkLDMB9V1kqRnWdwS0bqfYv1ICgABFAAAA"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end container-luxury pb-20">
          <p className="text-bone/70 text-xs uppercase tracking-widest mb-4">Il nostro spazio</p>
          <h1
            className="heading-display text-bone max-w-2xl"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }}
          >
            Dove la bellezza
            <br />
            prende forma.
          </h1>
        </div>
      </section>

      {/* Story section */}
      <section className="py-24 md:py-40 bg-bone" aria-label="La nostra storia">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Text */}
            <div>
              <RevealOnScroll>
                <p className="text-warm-mid text-xs uppercase tracking-widest mb-4">La nostra storia</p>
                <h2
                  className="heading-display text-ink mb-8"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}
                >
                  Quarant&apos;anni
                  <br />
                  <em>di passione.</em>
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <p className="text-warm-mid text-sm leading-relaxed mb-6">
                  Tutto è iniziato nel 1984, quando Giovanni Rossi aprì una piccola bottega nel centro storico di Avigliano Umbro. Con le sue mani e la sapienza appresa dai maestri fiorentini, iniziò a creare mobili che ancora oggi abitano le case di tre generazioni di famiglie umbre.
                </p>
                <p className="text-warm-mid text-sm leading-relaxed mb-8">
                  Oggi l&apos;azienda è guidata da Marco, figlio di Giovanni, che ha portato una visione contemporanea senza tradire l&apos;identità artigianale. Ogni mobile è ancora costruito a mano, con materiali selezionati, in un processo che richiede settimane di lavoro e decenni di esperienza.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={0.2}>
                <div className="section-line mb-8" />
                <Link href="/contatti" className="btn-dark">
                  Prenota una visita
                </Link>
              </RevealOnScroll>
            </div>

            {/* Image */}
            <RevealOnScroll direction="left" delay={0.15}>
              <div className="relative h-80 md:h-[560px] overflow-hidden img-zoom-container">
                <Image
                  src="https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80"
                  alt="Artigiano al lavoro nel laboratorio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACMQAAIBBAMBAQEBAAAAAAAAAAECAwQFERIhMUFRYf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCw2jPxb3VuNNLqEQmHlXe+kkLDMB9V1kqRnWdwS0bqfYv1ICgABFAAAA"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-24 bg-bone-dark" aria-label="Il team">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="mb-16">
              <p className="text-warm-mid text-xs uppercase tracking-widest mb-4">Le persone</p>
              <h2
                className="heading-display text-ink"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}
              >
                Chi siamo
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member, i) => (
              <RevealOnScroll key={member.name} delay={i * 0.1}>
                <article>
                  <div className="relative h-72 overflow-hidden mb-6 img-zoom-container">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3
                    className="italic text-ink text-xl mb-1"
                    style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-gold text-xs uppercase tracking-wider mb-3">{member.role}</p>
                  <p className="text-warm-mid text-sm leading-relaxed">{member.bio}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Map + hours */}
      <section className="py-24 bg-bone" aria-label="Come raggiungerci">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* Map */}
            <RevealOnScroll>
              <div>
                <p className="text-warm-mid text-xs uppercase tracking-widest mb-4">Come raggiungerci</p>
                <h2
                  className="heading-display text-ink mb-8"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)' }}
                >
                  Siamo ad<br /><em>Avigliano Umbro</em>
                </h2>
                <address className="not-italic text-sm text-warm-mid leading-relaxed mb-8">
                  Via del Duomo, 14<br />
                  05021 Avigliano Umbro (TR)<br />
                  <a href="tel:+390744000000" className="hover:text-ink transition-colors duration-300 mt-2 block">
                    +39 0744 000000
                  </a>
                  <a href="mailto:info@arredamenti.it" className="hover:text-ink transition-colors duration-300 block">
                    info@arredamenti.it
                  </a>
                </address>
                {/* Map embed */}
                <div className="relative h-64 overflow-hidden border border-line">
                  <iframe
                    title="Mappa showroom Arredamenti"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2955.0!2d12.43!3d42.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDM0JzEyLjAiTiAxMsKwMjUnNDguMCJF!5e0!3m2!1sit!2sit!4v1000000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </RevealOnScroll>

            {/* Hours */}
            <RevealOnScroll delay={0.15}>
              <div>
                <p className="text-warm-mid text-xs uppercase tracking-widest mb-4">Orari di apertura</p>
                <h2
                  className="heading-display text-ink mb-8"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)' }}
                >
                  <em>Quando visitarci</em>
                </h2>
                <table className="w-full text-sm" aria-label="Orari showroom">
                  <tbody>
                    {hours.map((h) => (
                      <tr key={h.day} className="border-b border-line">
                        <td className="py-4 text-warm-mid">{h.day}</td>
                        <td className="py-4 text-ink text-right font-medium">{h.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-10">
                  <Link href="/contatti" className="btn-dark">
                    Prenota una visita
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}
