import { act } from '@testing-library/react'

interface WaitUntilOptions {
  timeout?: number
  interval?: number
}

/**
 * Espera a que una condición se cumpla, reevaluándola con temporizadores
 * reales. No usamos `waitFor` de Testing Library porque Jasmine registra las
 * expectativas fallidas sin lanzarlas, así que el sondeo recibe siempre un
 * callback "exitoso". Por eso el helper recibe un predicado booleano y las
 * aserciones se hacen una sola vez, después de esperar.
 *
 * Cada espera se envuelve en `act` para que las actualizaciones de estado que
 * ocurren mientras tanto no generen advertencias de React.
 */
export async function waitUntil(
  predicate: () => boolean,
  { timeout = 2000, interval = 25 }: WaitUntilOptions = {},
): Promise<void> {
  const startedAt = Date.now()

  while (Date.now() - startedAt < timeout) {
    if (predicate()) return

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, interval))
    })
  }

  throw new Error(`waitUntil agotó el tiempo de espera (${timeout} ms).`)
}
