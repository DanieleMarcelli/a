import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/lib/products'

export default function RelatedProducts({ products }: { products: Product[] }) {
  if (!products.length) return null

  return (
    <section className="border-t border-line py-16" aria-label="Prodotti correlati">
      <div className="container-luxury">
        <p className="text-warm-mid text-xs uppercase tracking-widest mb-8">Potrebbe interessarti</p>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/prodotto/${product.slug}`}
              className="block shrink-0 w-72 md:w-auto snap-start group"
            >
              <div className="relative h-52 overflow-hidden img-zoom-container mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACMQAAIBBAMBAQEBAAAAAAAAAAECAwQFERIhMUFRYf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCw2jPxb3VuNNLqEQmHlXe+kkLDMB9V1kqRnWdwS0bqfYv1ICgABFAAAA"
                />
              </div>
              <h3
                className="italic text-ink text-lg"
                style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}
              >
                {product.name}
              </h3>
              <p className="text-warm-mid text-xs uppercase tracking-wider mt-1">{product.categoryLabel}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
