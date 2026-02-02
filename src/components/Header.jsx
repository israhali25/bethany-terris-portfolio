import { useNavigate, useLocation } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleContactClick = () => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }, 200);
        } else {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6">
            <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-Ovo bg-gradient-to-r from-[#b820e6] via-[#da7d20] to-[#e94560] bg-clip-text text-transparent">
                    Bethany Terris
                </h1>
                <p className="text-xl sm:text-2xl font-light text-gray-600 dark:text-gray-300">PhD, Philosophy of Physics</p>
            </div>

            <div className="max-w-3xl space-y-4">
                <p className="text-lg font-Ovo text-gray-700 dark:text-gray-300 leading-relaxed">
                    Interdisciplinary researcher in <span className="font-semibold text-[#b820e6]">quantum foundations</span> translating theory and experiment into clear, responsible science communication.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6 text-base text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#b820e6] rounded-full"></span>
                        Paris, France
                    </span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <button onClick={handleContactClick}
                    className="px-8 py-3 text-base rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    Get in Touch
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </button>

                <a href="./assets/cv_bterris.pdf" download
                    className="px-8 py-3 text-base rounded-full border-2 border-gray-300 dark:border-white/30 hover:border-[#b820e6] dark:hover:border-[#b820e6] flex items-center gap-2 bg-white dark:bg-transparent dark:text-white font-medium hover:shadow-xl transition-all duration-300">
                    Download CV
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </a>
            </div>
        </div>
    )
}