# Portafolio Personal - Nicolás Ignacio Catalán Valenzuela

Portafolio web desarrollado con **React + TypeScript + Vite + Bootstrap** para la asignatura de FullStack II.

## Tecnologías principales

- React 19
- TypeScript
- Vite
- Bootstrap 5 + React-Bootstrap
- Karma + Jasmine (pruebas unitarias)

## Requisitos cumplidos

- Componentes estándar de Bootstrap: `Navbar`, `Card`, `Button`, `Form`, `Container`, `Row`, `Col`.
- Sistema de cuadrícula (Grid System) de Bootstrap.
- Componentes React personalizados reutilizables con `props`:
  - `SobreMi`
  - `ProyectoCard`
  - `NoticiaCard`
- Secciones del portafolio:
  - **Introducción / Sobre mí**: nombre, foto profesional, biografía y formulario de contacto.
  - **Proyectos**: 4 proyectos con imagen, título, descripción, tecnologías, demo y repositorio.
  - **Noticias**: 2 secciones cargadas dinámicamente desde `public/data/news.json`.
- Carga de datos desde archivos JSON usando `useState`, `useEffect` y `fetch`.
- Pruebas unitarias con Jasmine y Karma:
  - Renderizado de componentes.
  - Manejo de eventos y estados.
  - Interacción con el DOM.
  - Cobertura de código con `karma-coverage`.

## Scripts disponibles

```bash
npm run dev        # Iniciar servidor de desarrollo
npm run build      # Construir para producción
npm run preview    # Previsualizar build de producción
npm run lint       # Ejecutar ESLint
npm test           # Ejecutar pruebas con Karma (modo watch)
npm run test:headless  # Ejecutar pruebas una sola vez en Chrome Headless
```

## Estructura de carpetas

```
src/
├── components/       # Componentes reutilizables
│   ├── navbar/
│   ├── sobre-mi/
│   ├── proyectos/
│   ├── noticias/
│   └── footer/
├── core/             # Secciones del CV
│   ├── Experiencia.tsx
│   ├── Educacion.tsx
│   ├── Habilidades.tsx
│   └── Certificaciones.tsx
├── tests/            # Pruebas unitarias Jasmine
├── types/            # Tipos de TypeScript
├── App.tsx
└── main.tsx
public/
└── data/             # Archivos JSON de datos
    ├── projects.json
    └── news.json
```

## Datos personales

- **Nombre:** Nicolás Ignacio Catalán Valenzuela
- **Ubicación:** Santiago, Chile
- **Email:** ncatalan111@gmail.com
- **Teléfono:** +56 (9) 8166 1868
- **LinkedIn:** https://www.linkedin.com/in/ncatalan-data/
- **GitHub:** https://github.com/Ncatalanv

## Resultados de pruebas

```
TOTAL: 17 SUCCESS

Coverage summary
Statements   : 85.1% ( 80/94 )
Branches     : 69.44% ( 25/36 )
Functions    : 88.46% ( 23/26 )
Lines        : 84.52% ( 71/84 )
```

El reporte HTML de cobertura se genera en la carpeta `coverage/html/`.
