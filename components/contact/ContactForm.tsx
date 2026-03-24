'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const schema = z.object({
  nome: z.string().min(2, 'Inserisci il tuo nome'),
  email: z.string().email('Email non valida'),
  telefono: z.string().optional(),
  prodotto: z.string().optional(),
  messaggio: z.string().min(10, 'Messaggio troppo breve (min. 10 caratteri)'),
})

type FormData = z.infer<typeof schema>

const productOptions = [
  'Soggiorno – Divano',
  'Soggiorno – Tavolo',
  'Soggiorno – Libreria',
  'Soggiorno – Poltrona',
  'Cucina – Su misura',
  'Camera – Letto',
  'Camera – Armadio',
  'Camera – Complementi',
  'Altro',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200))
    console.log('Contact form submitted:', data)
    setSubmitted(true)
    reset()
  }

  return (
    <AnimatePresence mode="wait">
      {!submitted ? (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-6"
          aria-label="Modulo di contatto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs text-warm-mid uppercase tracking-wider mb-2" htmlFor="nome">
                Nome e Cognome *
              </label>
              <input
                id="nome"
                type="text"
                {...register('nome')}
                className="w-full bg-transparent border-b border-line px-0 py-3 text-sm text-ink focus:outline-none focus:border-gold transition-colors duration-200"
                placeholder="Mario Rossi"
              />
              {errors.nome && <p className="text-gold text-xs mt-1">{errors.nome.message}</p>}
            </div>

            <div>
              <label className="block text-xs text-warm-mid uppercase tracking-wider mb-2" htmlFor="email">
                Email *
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="w-full bg-transparent border-b border-line px-0 py-3 text-sm text-ink focus:outline-none focus:border-gold transition-colors duration-200"
                placeholder="mario@email.it"
              />
              {errors.email && <p className="text-gold text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs text-warm-mid uppercase tracking-wider mb-2" htmlFor="telefono">
                Telefono
              </label>
              <input
                id="telefono"
                type="tel"
                {...register('telefono')}
                className="w-full bg-transparent border-b border-line px-0 py-3 text-sm text-ink focus:outline-none focus:border-gold transition-colors duration-200"
                placeholder="+39 000 0000000"
              />
            </div>

            <div>
              <label className="block text-xs text-warm-mid uppercase tracking-wider mb-2" htmlFor="prodotto">
                Prodotto di interesse
              </label>
              <select
                id="prodotto"
                {...register('prodotto')}
                className="w-full bg-transparent border-b border-line px-0 py-3 text-sm text-warm-mid focus:outline-none focus:border-gold transition-colors duration-200 appearance-none"
              >
                <option value="">Seleziona un prodotto...</option>
                {productOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs text-warm-mid uppercase tracking-wider mb-2" htmlFor="messaggio">
              Messaggio *
            </label>
            <textarea
              id="messaggio"
              {...register('messaggio')}
              rows={5}
              className="w-full bg-transparent border-b border-line px-0 py-3 text-sm text-ink focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
              placeholder="Descrivi le tue esigenze, le dimensioni dello spazio, i materiali preferiti..."
            />
            {errors.messaggio && <p className="text-gold text-xs mt-1">{errors.messaggio.message}</p>}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-dark disabled:opacity-50"
            >
              {isSubmitting ? 'Invio in corso...' : 'Invia messaggio'}
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="py-16 text-center"
        >
          <CheckCircle className="text-gold mx-auto mb-6" size={48} />
          <h3
            className="heading-display text-ink mb-4"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
          >
            Messaggio ricevuto.
          </h3>
          <p className="text-warm-mid text-sm leading-relaxed max-w-sm mx-auto mb-8">
            Ti risponderemo entro 24 ore. Se preferisci, puoi anche chiamarci direttamente al{' '}
            <a href="tel:+390744000000" className="text-gold hover:underline">+39 0744 000000</a>.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-gold"
          >
            Invia un altro messaggio
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
