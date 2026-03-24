import type { Metadata } from 'next'
import Image from 'next/image'
import CollectionsGrid from '@/components/collections/CollectionsGrid'

export const metadata: Metadata = {
  title: 'Collezioni',
  description: 'Scopri le nostre collezioni di arredamento su misura: soggiorno, cucina, camera. Ogni pezzo realizzato a mano da maestri artigiani italiani.',
  openGraph: {
    title: 'Collezioni – Arredamenti Made in Italy',
    description: 'Mobili su misura per ogni ambiente. Qualità artigianale italiana.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
        width: 1200,
        height: 630,
      },
    ],
  },
}

interface PageProps {
  searchParams: { categoria?: string }
}

export default function CollezioniPage({ searchParams }: PageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden" aria-label="Intestazione collezioni">
        <Image
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80"
          alt="Showroom arredamenti"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACMQAAIBBAMBAQEBAAAAAAAAAAECAwQFERIhMUFRYf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCw2jPxb3VuNNLqEQmHlXe+kkLDMB9V1kqRnWdwS0bqfYv1ICgABFAAAA"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="absolute inset-0 flex flex-col justify-end container-luxury pb-10 pt-28">
          <p className="text-bone/70 text-xs uppercase tracking-widest mb-3">Tutto il catalogo</p>
          <h1
            className="heading-display text-bone"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
          >
            Le nostre collezioni
          </h1>
        </div>
      </section>

      {/* Grid with filter */}
      <main className="bg-bone min-h-screen">
        <CollectionsGrid initialCategory={searchParams.categoria} />
      </main>
    </>
  )
}
