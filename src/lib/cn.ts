type ClassValue = string | false | null | undefined

/** Une clases condicionales sin duplicar utilidades externas. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ')
}
