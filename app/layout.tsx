import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import ScrollProgress from '@/components/ui/ScrollProgress'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Arredamenti – Made in Italy',
    default: 'Arredamenti – Mobili su Misura Made in Italy',
  },
  description: 'Arredamenti di lusso su misura con oltre 40 anni di esperienza artigianale. Soggiorno, cucina, camera. Showroom ad Avigliano Umbro (TR).',
  keywords: ['arredamenti', 'mobili su misura', 'made in Italy', 'artigianato', 'Umbria', 'Terni', 'Avigliano Umbro'],
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'Arredamenti',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Arredamenti – Mobili su Misura',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body>
        <ScrollProgress />
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
