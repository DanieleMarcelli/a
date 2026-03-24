'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { X, CheckCircle } from 'lucide-react'

const schema = z.object({
  nome: z.string().min(2, 'Inserisci il tuo nome'),
  email: z.string().email('Email non valida'),
  telefono: z.string().optional(),
  messaggio: z.string().min(10, 'Messaggio troppo breve'),
})

type FormData = z.infer<typeof schema>

interface ContactModalProps {
  productName: string
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ productName, isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000))
    console.log('Form submitted:', data)
    setSubmitted(true)
    reset()
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => setSubmitted(false), 400)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-bone w-full max-w-lg p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-warm-mid hover:text-ink transition-colors duration-200"
              aria-label="Chiudi"
            >
              <X size={20} />
            </button>

            {!submitted ? (
              <>
                <p className="text-warm-mid text-xs uppercase tracking-widest mb-1">Richiesta informazioni</p>
                <h2
                  className="italic text-ink mb-6"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.8rem',
                    fontWeight: 400,
                  }}
                >
                  {productName}
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                  <div>
                    <label className="block text-xs text-warm-mid uppercase tracking-wider mb-1" htmlFor="nome">
                      Nome *
                    </label>
                    <input
                      id="nome"
                      type="text"
                      {...register('nome')}
                      className="w-full bg-transparent border border-line px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold transition-colors duration-200"
                      placeholder="Il tuo nome"
                    />
                    {errors.nome && <p className="text-gold text-xs mt-1">{errors.nome.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs text-warm-mid uppercase tracking-wider mb-1" htmlFor="email-m">
                      Email *
                    </label>
                    <input
                      id="email-m"
                      type="email"
                      {...register('email')}
                      className="w-full bg-transparent border border-line px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold transition-colors duration-200"
                      placeholder="nome@email.it"
                    />
                    {errors.email && <p className="text-gold text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs text-warm-mid uppercase tracking-wider mb-1" htmlFor="telefono-m">
                      Telefono
                    </label>
                    <input
                      id="telefono-m"
                      type="tel"
                      {...register('telefono')}
                      className="w-full bg-transparent border border-line px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold transition-colors duration-200"
                      placeholder="+39 000 0000000"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-warm-mid uppercase tracking-wider mb-1" htmlFor="messaggio-m">
                      Messaggio *
                    </label>
                    <textarea
                      id="messaggio-m"
                      {...register('messaggio')}
                      rows={4}
                      className="w-full bg-transparent border border-line px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
                      placeholder="Descrivi le tue esigenze o fai una domanda..."
                    />
                    {errors.messaggio && <p className="text-gold text-xs mt-1">{errors.messaggio.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-dark w-full text-center disabled:opacity-50"
                  >
                    {isSubmitting ? 'Invio in corso...' : 'Invia richiesta'}
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <CheckCircle className="text-gold mx-auto mb-4" size={40} />
                <h3
                  className="italic text-ink mb-3"
                  style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.8rem', fontWeight: 400 }}
                >
                  Richiesta inviata
                </h3>
                <p className="text-warm-mid text-sm leading-relaxed">
                  Ti risponderemo entro 24 ore. Se preferisci, puoi anche chiamarci al{' '}
                  <a href="tel:+390744000000" className="text-gold hover:underline">
                    +39 0744 000000
                  </a>
                  .
                </p>
                <button onClick={handleClose} className="btn-gold mt-8">
                  Chiudi
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
