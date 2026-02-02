import { Link } from 'react-router-dom';

export default function Training() {
    return (
        <div id="training" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-xs font-Ovo">Training</h4>
            <h2 className="text-center text-5xl font-Ovo mb-8">Professional Development</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-xl">
                Workshops, summer schools, research networks, and specialised courses in scientific communication, writing, and grant preparation.
            </p>

            <Link 
                to="/training"
                className="w-max flex items-center justify-center gap-3 text-lg text-gray-700 border-2 border-gray-300 dark:border-white/25 hover:border-[#b820e6] dark:hover:border-[#b820e6] hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-3 px-10 mx-auto duration-300 dark:text-white font-medium"
            >
                View All Training & Development
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </Link>
        </div>
    )
}
