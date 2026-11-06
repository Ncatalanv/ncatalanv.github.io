import { fireEvent, render, screen } from '@testing-library/react'
import { useJsonData } from '../../src/hooks/useJsonData.ts'
import { waitUntil } from '../helpers/waitUntil.ts'

function TestComponent({ path }: { path: string }) {
  const { data, loading, error, refetch } =
    useJsonData<{ items: string[] }>(path)

  return (
    <div>
      <span data-testid="loading">{String(loading)}</span>
      <span data-testid="error">{error ?? ''}</span>
      <span data-testid="data">{data ? data.items.join(',') : ''}</span>
      <button type="button" onClick={refetch}>
        Reintentar
      </button>
    </div>
  )
}

function jsonResponse(body: unknown, status = 200): Promise<Response> {
  return Promise.resolve(
    new Response(JSON.stringify(body), {
      status,
      headers: { 'Content-Type': 'application/json' },
    }),
  )
}

function text(testId: string): string {
  return screen.getByTestId(testId).textContent ?? ''
}

describe('useJsonData', () => {
  it('carga los datos y actualiza los estados de carga y error', async () => {
    spyOn(globalThis, 'fetch').and.callFake(() =>
      jsonResponse({ items: ['uno', 'dos'] }),
    )

    render(<TestComponent path="data/test.json" />)

    expect(text('loading')).toBe('true')

    await waitUntil(() => text('data') === 'uno,dos')

    expect(text('data')).toBe('uno,dos')
    expect(text('loading')).toBe('false')
    expect(text('error')).toBe('')
  })

  it('expone un mensaje de error cuando la respuesta HTTP falla', async () => {
    spyOn(globalThis, 'fetch').and.callFake(() =>
      Promise.resolve(new Response('', { status: 500 })),
    )

    render(<TestComponent path="data/roto.json" />)

    await waitUntil(() => text('error').includes('HTTP 500'))

    expect(text('error')).toContain('HTTP 500')
    expect(text('loading')).toBe('false')
    expect(text('data')).toBe('')
  })

  it('permite reintentar la carga con refetch', async () => {
    let calls = 0

    spyOn(globalThis, 'fetch').and.callFake(() => {
      calls += 1
      return calls === 1
        ? Promise.resolve(new Response('', { status: 503 }))
        : jsonResponse({ items: ['recuperado'] })
    })

    render(<TestComponent path="data/inestable.json" />)

    await waitUntil(() => text('error').includes('HTTP 503'))

    expect(text('error')).toContain('HTTP 503')

    fireEvent.click(screen.getByRole('button', { name: 'Reintentar' }))

    await waitUntil(() => text('data') === 'recuperado')

    expect(text('data')).toBe('recuperado')
    expect(text('error')).toBe('')
  })
})
