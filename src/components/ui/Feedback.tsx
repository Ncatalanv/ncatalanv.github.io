import Button from './Button.tsx'

export interface LoadingStateProps {
  label?: string
}

export function LoadingState({ label = 'Cargando contenido…' }: LoadingStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex items-center justify-center gap-3 py-10 text-slate-500 dark:text-slate-400"
    >
      <span
        aria-hidden="true"
        className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent"
      />
      <span>{label}</span>
    </div>
  )
}

export interface ErrorStateProps {
  message: string
  onRetry?: () => void
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center gap-4 rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300"
    >
      <p>{message}</p>
      {onRetry ? (
        <Button variant="secondary" size="sm" onClick={onRetry}>
          Reintentar
        </Button>
      ) : null}
    </div>
  )
}
