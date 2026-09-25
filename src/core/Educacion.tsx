function Educacion() {
    return(
        <section>
    <h2 className="font-serif text-4xl sm:text-5xl mb-8 text-indigo-500 dark:text-indigo-400">Educación</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Ingeniería en Informática</h3>
                    <p className="text-sm font-medium text-indigo-500 dark:text-indigo-400">2025 - En proceso</p>
                </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400">Duoc UC</p>
        </div>

        <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bone-icon lucide-bone"><path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"/></svg>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Licenciado en Kinesiología</h3>
                    <p className="text-sm font-medium text-teal-500 dark:text-teal-400">2019 - 2023</p>
                </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400">Universidad Andrés Bello</p>
        </div>

    </div>
</section>




    )



}

export default Educacion