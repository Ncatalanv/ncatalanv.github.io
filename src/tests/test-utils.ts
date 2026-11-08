import { createRoot, type Root } from 'react-dom/client';
import { act } from 'react';

// Enable React act() in browser test environments like Karma.
if (typeof window !== 'undefined') {
  (window as unknown as Record<string, boolean>).IS_REACT_ACT_ENVIRONMENT = true;
}

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

export function fireEvent(element: Element, eventName: string, value?: string) {
  if (eventName === 'input' && value !== undefined && (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement)) {
    element.value = value;
    const inputEvent = new Event('input', { bubbles: true, cancelable: true });
    const changeEvent = new Event('change', { bubbles: true, cancelable: true });
    act(() => {
      element.dispatchEvent(inputEvent);
      element.dispatchEvent(changeEvent);
    });
    return;
  }
  const event = new Event(eventName, { bubbles: true, cancelable: true });
  act(() => element.dispatchEvent(event));
}
