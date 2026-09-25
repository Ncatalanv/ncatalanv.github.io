import linkedinIcon from '../assets/linkedin.svg'
import githubIcon from '../assets/github.svg'
import profileIcon from '../assets/polar.jpg'

function Header(){
    return(
<header>  
<nav className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-between">
                
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-base font-semibold text-slate-800 dark:text-white">
                    <a href="#cv" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Curriculum Vitae <span aria-hidden="true">&rarr;</span></a>
                    <a href="#certificaciones" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Certificaciones <span aria-hidden="true">&rarr;</span></a>
                    <a href="#contacto" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Contacto <span aria-hidden="true">&rarr;</span></a>
                </div>
                
                <button id="theme-toggle" type="button" className="ml-4 p-2.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg transition-colors" aria-label="Cambiar tema">
                    <svg id="theme-toggle-dark-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                    <svg id="theme-toggle-light-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </div>
    </nav>

    <section className="py-20 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            
            <div className="flex-1 text-center md:text-left">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-500 dark:text-indigo-400 uppercase bg-indigo-100 dark:bg-indigo-950 rounded-full">
                    Computer Science Student 
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                    <span className="text-indigo-600 dark:text-indigo-400">Nicolás Ignacio Catalán Valenzuela</span>
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-xl">
                    Email: ncatalan111@gmail.com | Teléfono: +569 81661868 | Santiago, Chile
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                    <a href="https://github.com/Ncatalanv" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="block w-32 h-12 sm:w-36 sm:h-14 bg-white rounded-lg transition-all hover:scale-105 overflow-hidden shadow-md"
                       aria-label="GitHub Profile">
                       <img src={githubIcon} alt="Github" className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/ncatalan-data/" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="block w-32 h-12 sm:w-36 sm:h-14 bg-white rounded-lg transition-all hover:scale-105 overflow-hidden shadow-md"
                       aria-label="LinkedIn Profile">
                       <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                    </a>
                </div>
            </div>

            <div className="shrink-0">
                <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full p-1 bg-gradient-to-tr from-indigo-500 to-teal-400 shadow-xl">
                    <img src={profileIcon} alt="Profile" className="w-full h-full object-cover rounded-full mx-auto bg-slate-200 dark:bg-slate-800"/>
                </div>
            </div>

        </div>
    </section>
</header>
)}
export default Header