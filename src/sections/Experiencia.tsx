import Section from '../components/ui/Section.tsx'

const experience = [
  {
    period: '2024 - Presente',
    role: 'Asistente Administrativo',
    company: 'Comercializadora e Importadora INCORPLAS SPA',
    tasks: [
      'Controlé de manera integral el inventario físico y los niveles de stock, asegurando la disponibilidad continua de productos y optimizando la rotación de mercancía.',
      'Procesé el ingreso de facturas y administré los registros financieros, garantizando la exactitud, el orden y la trazabilidad de la información contable de la empresa.',
    ],
  },
  {
    period: '2024 - 2026',
    role: 'Operario de local',
    company: 'Comidas La Punta',
    tasks: [
      'Gestioné eficientemente el ciclo completo de atención al cliente, desde la toma de pedidos hasta la entrega final, asegurando altos estándares de calidad y tiempos de respuesta óptimos.',
      'Resolví incidencias y requerimientos de manera proactiva, aplicando técnicas de comunicación asertiva para garantizar la máxima satisfacción del cliente.',
      'Colaboré estrechamente con el equipo de operaciones para agilizar el flujo de trabajo, manteniendo la precisión en el servicio durante periodos de alta demanda.',
      'Fomenté la fidelización de clientes mediante una atención personalizada y un seguimiento constante, construyendo relaciones basadas en la confianza y la hospitalidad.',
    ],
  },
]

function Experiencia() {
  return (
    <Section id="experiencia" title="Experiencia">
      <ol className="relative ml-2 space-y-12 before:absolute before:-ms-px before:h-full before:w-0.5 before:rounded-full before:bg-slate-300 dark:before:bg-slate-700 sm:ml-4">
        {experience.map((job) => (
          <li key={`${job.role}-${job.company}`} className="relative -ms-1.5 flex items-start gap-6">
            <span
              aria-hidden="true"
              className="mt-1.5 size-3 shrink-0 rounded-full bg-indigo-500 ring-4 ring-slate-50 dark:bg-indigo-400 dark:ring-slate-950"
            />

            <div className="-mt-0.5">
              <time className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                {job.period}
              </time>

              <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                {job.role}
              </h3>
              <h4 className="mb-4 text-base font-medium text-slate-600 dark:text-slate-400">
                {job.company}
              </h4>

              <ul className="list-inside list-disc space-y-2 text-slate-700 dark:text-slate-300">
                {job.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export default Experiencia
