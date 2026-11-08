import { createRoot, type Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils';

let container: HTMLDivElement | null = null;
let root: Root | null = null;

export function render(ui: React.ReactElement) {
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
  act(() => root!.render(ui));
  return { container };
}

export function cleanup() {
  if (root && container) {
    act(() => root!.unmount());
    document.body.removeChild(container);
    root = null;
    container = null;
  }
}

export function fireEvent(element: Element, eventName: string, details?: EventInit) {
  const event = new Event(eventName, { bubbles: true, cancelable: true, ...details });
  act(() => element.dispatchEvent(event));
}
