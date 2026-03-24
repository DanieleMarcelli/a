import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import CollectionsTeaser from '@/components/home/CollectionsTeaser'
import BrandStatement from '@/components/home/BrandStatement'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import ShowroomCTA from '@/components/home/ShowroomCTA'

export const metadata: Metadata = {
  title: 'Arredamenti – Mobili su Misura Made in Italy',
  description: 'Arredamenti di lusso su misura con oltre 40 anni di esperienza artigianale nel cuore dell\'Umbria. Soggiorno, cucina, camera.',
  openGraph: {
    title: 'Arredamenti – Mobili su Misura Made in Italy',
    description: 'Arredamenti di lusso su misura. Ogni pezzo racconta una storia di materiali scelti e dettagli curati.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <CollectionsTeaser />
      <BrandStatement />
      <FeaturedProducts />
      <ShowroomCTA />
    </>
  )
}
