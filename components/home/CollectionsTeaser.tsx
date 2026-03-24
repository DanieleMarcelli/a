import Image from 'next/image'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

const collections = [
  {
    slug: 'soggiorno',
    label: 'Soggiorno',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80',
    aspect: 'portrait',
  },
  {
    slug: 'cucina',
    label: 'Cucina',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80',
    aspect: 'landscape',
  },
  {
    slug: 'camera',
    label: 'Camera',
    image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=900&q=80',
    aspect: 'portrait',
  },
]

export default function CollectionsTeaser() {
  return (
    <section id="collections" className="py-24 md:py-32 bg-bone" aria-label="Collezioni">
      <div className="container-luxury">
        {/* Header */}
        <RevealOnScroll>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-warm-mid text-xs uppercase tracking-widest mb-4">Le Nostre Collezioni</p>
              <h2
                className="heading-display text-ink"
                style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
              >
                Ogni ambiente,<br />
                <em>una firma.</em>
              </h2>
            </div>
            <Link href="/collezioni" className="hidden md:inline-block btn-gold">
              Tutte le collezioni
            </Link>
          </div>
        </RevealOnScroll>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr,1.4fr,1fr] gap-4 md:gap-6 items-start">
          {/* Card 1: tall portrait */}
          <RevealOnScroll delay={0.1}>
            <CollectionCard {...collections[0]} className="md:h-[600px]" />
          </RevealOnScroll>

          {/* Card 2: landscape offset */}
          <RevealOnScroll delay={0.2}>
            <CollectionCard {...collections[1]} className="md:h-[400px] md:mt-24" />
          </RevealOnScroll>

          {/* Card 3: tall portrait */}
          <RevealOnScroll delay={0.3}>
            <CollectionCard {...collections[2]} className="md:h-[600px] md:mt-8" />
          </RevealOnScroll>
        </div>

        <div className="mt-10 md:hidden text-center">
          <Link href="/collezioni" className="btn-dark">
            Tutte le collezioni
          </Link>
        </div>
      </div>
    </section>
  )
}

function CollectionCard({
  slug,
  label,
  image,
  className = '',
}: {
  slug: string
  label: string
  image: string
  aspect?: string
  className?: string
}) {
  return (
    <Link
      href={`/collezioni?categoria=${slug}`}
      className={`relative block overflow-hidden h-72 ${className} img-zoom-container group`}
      aria-label={`Vai alla collezione ${label}`}
    >
      <Image
        src={image}
        alt={label}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACMQAAIBBAMBAQEBAAAAAAAAAAECAwQFERIhMUFRYf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCw2jPxb3VuNNLqEQmHlXe+kkLDMB9V1kqRnWdwS0bqfYv1ICgABFAAAA"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
      {/* Label */}
      <div className="absolute bottom-0 left-0 p-6">
        <span
          className="text-bone text-2xl italic"
          style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}
        >
          {label}
        </span>
      </div>
    </Link>
  )
}
