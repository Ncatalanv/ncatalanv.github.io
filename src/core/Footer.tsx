import linkedinIcon from '../assets/linkedin.svg'
import githubIcon from '../assets/github.svg'
function Footer(){
    return(
<footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 mt-20 py-10">
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
            <p className="text-slate-900 dark:text-white font-semibold">
                © 2026 Nicolás Ignacio Catalán Valenzuela.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Desarrollado desde cero con HTML y Tailwind CSS.
            </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6">
            
            <div className="flex items-center gap-4 text-slate-400 dark:text-slate-500">
                <a href="https://github.com/Ncatalanv" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="GitHub">
                <img src={githubIcon} alt="Github" className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/ncatalan-data/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="LinkedIn">
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                </a>
            </div>
            
        </div>
    </div>
</footer>
    )
}
export default Footer