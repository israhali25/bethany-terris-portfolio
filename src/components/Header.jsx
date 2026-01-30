export default function Header() {
    return (
        <div className="w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6">
            <div className="relative">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#b820e6] via-[#da7d20] to-[#e94560] flex items-center justify-center text-white text-6xl font-bold shadow-2xl animate-pulse-slow">
                    BT
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-[#b820e6] via-[#da7d20] to-[#e94560] rounded-full blur-xl opacity-30 animate-spin-slow"></div>
            </div>
            
            <div className="space-y-4">
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-Ovo bg-gradient-to-r from-[#b820e6] via-[#da7d20] to-[#e94560] bg-clip-text text-transparent">
                    Bethany Terris
                </h1>
                <p className="text-2xl sm:text-3xl font-light text-gray-600 dark:text-gray-300">PhD, Philosophy of Physics</p>
            </div>

            <div className="max-w-3xl space-y-4">
                <p className="text-lg font-Ovo text-gray-700 dark:text-gray-300 leading-relaxed">
                    Interdisciplinary researcher in <span className="font-semibold text-[#b820e6]">quantum foundations</span>, 
                    working at the boundary between theory, experiment, and interpretation.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#b820e6] rounded-full"></span>
                        CEA-Saclay
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#da7d20] rounded-full"></span>
                        Université Paris-Saclay
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#e94560] rounded-full"></span>
                        2022-2025
                    </span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                <a href="#contact"
                    className="px-10 py-3.5 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    Get in Touch
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a>

                <a href="/cv_bterris.pdf" download
                    className="px-10 py-3.5 rounded-full border-2 border-gray-300 dark:border-white/30 hover:border-[#b820e6] dark:hover:border-[#b820e6] flex items-center gap-2 bg-white dark:bg-transparent dark:text-white font-medium hover:shadow-xl transition-all duration-300">
                    Download CV
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </a>
            </div>
        </div>
    )
}