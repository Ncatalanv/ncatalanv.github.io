import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import Button from './ui/Button.tsx'

export interface ContactValues {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof ContactValues, string>>
type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export interface ContactFormProps {
  onSubmit?: (values: ContactValues) => void | Promise<void>
}

const initialValues: ContactValues = {
  name: '',
  email: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: ContactValues): FormErrors {
  const errors: FormErrors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Ingresa tu nombre (mínimo 2 caracteres).'
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Ingresa un correo electrónico válido.'
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Cuéntame un poco más (mínimo 10 caracteres).'
  }

  return errors
}

function ContactForm({ onSubmit }: ContactFormProps) {
  const [values, setValues] = useState<ContactValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange =
    (field: keyof ContactValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value
      setValues((previous) => ({ ...previous, [field]: value }))
      setErrors((previous) => ({ ...previous, [field]: undefined }))
      if (status === 'success' || status === 'error') {
        setStatus('idle')
      }
    }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      return
    }

    setStatus('sending')

    try {
      await onSubmit?.(values)
      setStatus('success')
      setValues(initialValues)
    } catch {
      setStatus('error')
    }
  }

  const isSending = status === 'sending'

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label
          htmlFor="contact-name"
          className="mb-1 block text-sm font-semibold text-slate-900 dark:text-white"
        >
          Nombre
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange('name')}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition-colors focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        />
        {errors.name ? (
          <p id="contact-name-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-1 block text-sm font-semibold text-slate-900 dark:text-white"
        >
          Correo electrónico
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange('email')}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition-colors focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        />
        {errors.email ? (
          <p id="contact-email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-1 block text-sm font-semibold text-slate-900 dark:text-white"
        >
          Mensaje
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition-colors focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        />
        {errors.message ? (
          <p
            id="contact-message-error"
            className="mt-1 text-sm text-red-600 dark:text-red-400"
          >
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={isSending}>
          {isSending ? 'Enviando…' : 'Enviar mensaje'}
        </Button>

        <p role="status" aria-live="polite" className="text-sm">
          {status === 'success' ? (
            <span className="text-teal-600 dark:text-teal-400">
              ¡Gracias! Tu mensaje fue registrado correctamente.
            </span>
          ) : null}
          {status === 'error' ? (
            <span className="text-red-600 dark:text-red-400">
              No se pudo enviar el mensaje. Intenta nuevamente.
            </span>
          ) : null}
        </p>
      </div>
    </form>
  )
}

export default ContactForm
