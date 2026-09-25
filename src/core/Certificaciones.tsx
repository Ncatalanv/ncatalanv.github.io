function Certificaciones(){
    return(
        <section id="certificaciones">
    <h2 className="font-serif text-4xl sm:text-5xl mb-6 text-indigo-500 dark:text-indigo-400">Licencias y certificaciones</h2>
    
    <div className="flex flex-col border-y border-slate-200 dark:border-slate-800 divide-y divide-slate-200 dark:divide-slate-800">
        
        <div className="group flex flex-col sm:flex-row sm:items-center justify-between py-5 px-2 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
            <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">Google Data Analytics</h3>
            </div>
            <span className="text-sm text-slate-500 dark:text-slate-400 mt-1 sm:mt-0 ml-8 sm:ml-0 font-mono">03 / 2024</span>
        </div>

        <div className="group flex flex-col sm:flex-row sm:items-center justify-between py-5 px-2 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
            <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">PCEP - Certified Entry-Level Python Programmer</h3>
            </div>
            <span className="text-sm text-slate-500 dark:text-slate-400 mt-1 sm:mt-0 ml-8 sm:ml-0 font-mono">05 / 2025</span>
        </div>

        <div className="group flex flex-col sm:flex-row sm:items-center justify-between py-5 px-2 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
            <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">Microsoft Certified: Azure Data Fundamentals</h3>
            </div>
            <span className="text-sm text-slate-500 dark:text-slate-400 mt-1 sm:mt-0 ml-8 sm:ml-0 font-mono">08 / 2025</span>
        </div>

        <div className="group flex flex-col sm:flex-row sm:items-center justify-between py-5 px-2 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
            <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">Big Data Professional Certificate (BDPC)</h3>
            </div>
            <span className="text-sm text-slate-500 dark:text-slate-400 mt-1 sm:mt-0 ml-8 sm:ml-0 font-mono">10 / 2025</span>
        </div>

    </div>
</section>

    )
}
export default Certificaciones