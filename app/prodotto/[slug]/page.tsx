import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProductBySlug, getRelatedProducts, products } from '@/lib/products'
import ImageGallery from '@/components/product/ImageGallery'
import ProductInfo from '@/components/product/ProductInfo'
import RelatedProducts from '@/components/product/RelatedProducts'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  if (!product) return {}

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} – Arredamenti`,
      description: product.shortDescription,
      images: [{ url: product.image, width: 800, height: 600 }],
    },
  }
}

export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const related = getRelatedProducts(product.slug, product.category)

  return (
    <article>
      {/* Breadcrumb */}
      <div className="container-luxury pt-28 pb-4">
        <nav className="text-xs text-warm-mid" aria-label="Breadcrumb">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>Collezioni</span>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main layout */}
      <div className="container-luxury pb-16">
        <div className="grid grid-cols-1 md:grid-cols-[55fr,45fr] gap-12 xl:gap-20">
          {/* Left: Gallery */}
          <div>
            <ImageGallery images={product.images} productName={product.name} />
          </div>

          {/* Right: Info (sticky) */}
          <aside>
            <ProductInfo product={product} />
          </aside>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts products={related} />
    </article>
  )
}
