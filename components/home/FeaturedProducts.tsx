import Image from 'next/image'
import Link from 'next/link'
import { getFeaturedProducts } from '@/lib/products'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export default function FeaturedProducts() {
  const products = getFeaturedProducts().slice(0, 4)

  return (
    <section className="py-24 md:py-32 bg-bone-dark" aria-label="Prodotti in evidenza">
      <div className="container-luxury">
        {/* Header */}
        <RevealOnScroll>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-warm-mid text-xs uppercase tracking-widest mb-4">Selezione</p>
              <h2
                className="heading-display text-ink"
                style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
              >
                Prodotti in evidenza
              </h2>
            </div>
            <Link href="/collezioni" className="hidden md:inline-block text-warm-mid text-xs uppercase tracking-widest hover:text-ink transition-colors duration-300">
              Vedi tutti →
            </Link>
          </div>
        </RevealOnScroll>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <RevealOnScroll key={product.slug} delay={i * 0.1}>
              <Link
                href={`/prodotto/${product.slug}`}
                className="group block border border-line bg-bone hover:shadow-card-hover transition-shadow duration-500"
                aria-label={product.name}
              >
                {/* Image */}
                <div className="relative h-64 md:h-80 overflow-hidden img-zoom-container">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACMQAAIBBAMBAQEBAAAAAAAAAAECAwQFERIhMUFRYf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCw2jPxb3VuNNLqEQmHlXe+kkLDMB9V1kqRnWdwS0bqfYv1ICgABFAAAA"
                  />
                </div>
                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3
                      className="text-ink italic"
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: '1.5rem',
                        fontWeight: 400,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {product.name}
                    </h3>
                    <span className="text-xs text-warm-mid uppercase tracking-wider mt-1 ml-4 shrink-0">
                      {product.categoryLabel}
                    </span>
                  </div>
                  <p className="text-warm-mid text-sm leading-relaxed line-clamp-2 mb-4">
                    {product.shortDescription}
                  </p>
                  <span className="text-xs text-warm-mid uppercase tracking-widest">
                    {product.price}
                  </span>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
