# Portafolio de Nicolás Catalán

Portafolio personal construido con **React, TypeScript, Vite y Tailwind CSS**. El contenido del perfil, los proyectos y las noticias se carga dinámicamente desde archivos JSON ubicados en `public/data`.

El proyecto usa **Tailwind CSS únicamente**; no utiliza Bootstrap.

## Stack

- **React 19** y **TypeScript** para la interfaz y el tipado.
- **Vite** para desarrollo y build de producción.
- **Tailwind CSS v4** mediante `@tailwindcss/vite`.
- **Karma + Jasmine** para pruebas unitarias y de integración.
- **Testing Library** para renderizado, eventos y consultas accesibles del DOM.
- **Istanbul / karma-coverage** para el reporte de cobertura.

## Requisitos

- Node.js 20 o superior.
- npm.
- Google Chrome para `npm test`.
- Microsoft Edge para `npm run test:edge`.

## Instalación y desarrollo

```bash
npm ci
npm run dev
```

Vite mostrará la URL local del servidor de desarrollo.

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Verifica tipos con `tsc -b` y genera `dist/`. |
| `npm run preview` | Sirve localmente el build de producción. |
| `npm run lint` | Ejecuta ESLint sobre el proyecto. |
| `npm test` | Ejecuta la suite de Jasmine en Chrome Headless. |
| `npm run test:edge` | Ejecuta la misma suite en Microsoft Edge Headless. |
| `npm run test:all` | Ejecuta primero Chrome y después Edge. |
| `npm run test:watch` | Deja Karma en modo observación con Chrome. |
| `npm run test:coverage` | Ejecuta Chrome y genera el reporte de cobertura. |

La cobertura está habilitada en la configuración de Karma, por lo que también se genera con `npm test` y `npm run test:edge`.

## Estructura

```text
public/
  data/
    profile.json       # Perfil, biografía, contacto e intereses
    projects.json      # Proyectos del portafolio
    news.json          # Noticias académicas y tecnológicas
  images/
    profile/
    projects/
src/
  components/
    ui/                # Button, Card, Badge, Section, Feedback, ThemeToggle
    ContactForm.tsx
    NewsCard.tsx
    NewsSection.tsx
    ProjectCard.tsx
  hooks/
    useJsonData.ts     # fetch, loading, error y refetch
  lib/
    cn.ts
  sections/            # Navbar, Hero, About, Projects, News, etc.
  types/
    index.ts
  App.tsx
  index.css
  main.tsx
tests/
  components/
  helpers/             # waitUntil y mockFetchRoutes
  hooks/
  sections/
  App.spec.tsx
  setup.ts
karma.conf.cjs
scripts/
  run-karma-edge.cjs
```

## Datos JSON

`useJsonData<T>` realiza `fetch` sobre rutas relativas como `data/profile.json`. Estas rutas apuntan a archivos de `public/data`, por lo que funcionan tanto en desarrollo como en el sitio publicado.

Cada consumidor del hook recibe:

- `data`: contenido cargado o `null`.
- `loading`: estado de carga.
- `error`: mensaje de error o `null`.
- `refetch`: función para reintentar la carga.

Las secciones de proyectos y noticias muestran estados de carga, error, contenido vacío y reintento.

## Pruebas

La suite utiliza **Karma + Jasmine**, no Vitest ni Jest. Cubre:

- renderizado de componentes y secciones;
- eventos, estado y formulario controlado;
- interacción con el DOM y atributos accesibles;
- carga JSON exitosa, errores HTTP y reintentos;
- integración de `App` con las secciones principales.

```bash
npm run test:all
```

El reporte HTML de cobertura queda en:

```text
coverage/html/index.html
```

También se genera información LCOV dentro de `coverage/`.

`npm run test:edge` usa `scripts/run-karma-edge.cjs`, que localiza el ejecutable de Edge y lo asigna a `CHROME_BIN`. Si Edge está instalado en otra ruta, se puede definir la variable de entorno `EDGE_BIN`.

## Accesibilidad

- Navegación por landmarks y encabezados semánticos.
- Enlace “Saltar al contenido principal”.
- Menú móvil con `aria-expanded` y `aria-controls`.
- Formulario con etiquetas, validación y mensajes mediante `aria-live`.
- Indicadores de foco visibles y soporte para `prefers-reduced-motion`.
- Avisos accesibles en enlaces que abren una pestaña nueva.
- Tema claro/oscuro persistente con `localStorage`.

## Build y despliegue

```bash
npm ci
npm run build
```

El resultado queda en `dist/`. Para revisarlo localmente:

```bash
npm run preview
```

Para publicar en GitHub Pages se debe desplegar **el contenido generado en `dist/`**, no los archivos fuente de React. Esto puede hacerse mediante un workflow de GitHub Actions que ejecute `npm ci` y `npm run build`, o publicando ese directorio en una rama de despliegue.

Al tratarse del sitio de usuario `ncatalanv.github.io`, la configuración actual usa rutas relativas a la raíz del sitio.

Los archivos heredados `cv.html`, `pets.html` y `docs/legacy/` se mantienen fuera de la migración a React.
