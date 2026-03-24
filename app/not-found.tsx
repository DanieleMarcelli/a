import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bone flex flex-col items-center justify-center text-center px-8">
      <p className="text-warm-mid text-xs uppercase tracking-widest mb-4">404</p>
      <h1
        className="heading-display text-ink mb-6"
        style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
      >
        Pagina non trovata.
      </h1>
      <p className="text-warm-mid text-sm mb-10 max-w-sm">
        La pagina che cerchi non esiste o è stata spostata.
      </p>
      <Link href="/" className="btn-dark">
        Torna alla home
      </Link>
    </main>
  )
}
