/**
 * Reemplaza `fetch` por un enrutador simple: la primera clave cuya ruta
 * aparezca en la URL solicitada define la respuesta.
 */
export function mockFetchRoutes(routes: Record<string, unknown>) {
  return spyOn(globalThis, 'fetch').and.callFake((input: RequestInfo | URL) => {
    const url = typeof input === 'string' ? input : input.toString()
    const match = Object.keys(routes).find((path) => url.includes(path))

    if (!match) {
      return Promise.resolve(new Response('', { status: 404 }))
    }

    return Promise.resolve(
      new Response(JSON.stringify(routes[match]), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }),
    )
  })
}
