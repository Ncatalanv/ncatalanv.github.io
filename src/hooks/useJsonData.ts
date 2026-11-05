import { useEffect, useState } from 'react'

export interface UseJsonDataResult<T> {
  data: T | null
  loading: boolean
  error: string | null
  refetch: () => void
}

/**
 * Carga un archivo JSON de `public/` y expone su estado.
 * La ruta es relativa a la raíz del sitio, por lo que funciona
 * tanto en desarrollo como en GitHub Pages.
 */
export function useJsonData<T>(path: string): UseJsonDataResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function load() {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(path, { signal: controller.signal })

        if (!response.ok) {
          throw new Error(
            `No se pudo cargar ${path} (HTTP ${response.status})`,
          )
        }

        const json = (await response.json()) as T
        setData(json)
      } catch (err) {
        if (controller.signal.aborted) return

        setError(
          err instanceof Error
            ? err.message
            : 'Ocurrió un error desconocido al cargar los datos.',
        )
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    void load()

    return () => controller.abort()
  }, [path, reloadKey])

  return {
    data,
    loading,
    error,
    refetch: () => setReloadKey((key) => key + 1),
  }
}
