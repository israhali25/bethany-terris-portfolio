import { Link } from 'react-router-dom';

export default function Work() {
    const work = [
        {
            name: 'PhD Thesis',
            icon: './assets/work-1.png',
            description: 'Weak Values in Quantum Mechanics',
            link: '',
        },
        {
            name: 'Journal Article',
            icon: './assets/work-2.png',
            description: 'Weak Particle Presence (2025)',
            link: '',
        },
        {
            name: 'Research Paper',
            icon: './assets/work-3.png',
            description: 'Observation as a Temporal Process',
            link: '',
        },
        {
            name: 'PhD Research',
            icon: './assets/work-4.png',
            description: 'CEA-Saclay (2022-2025)',
            link: '',
        }
    ];
    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-xl font-Ovo">My publications</h4>
            <h2 className="text-center text-5xl font-Ovo">Research & Publications</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-xl">Explore my research portfolio showcasing publications in quantum foundations, measurement theory, and philosophy of physics.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-6">
                {work.map((work, index) => (
                    <div key={work.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-8 hover:shadow-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white/20 bg-white dark:bg-darkTheme">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] flex items-center justify-center text-white font-bold text-xl">
                                {index + 1}
                            </div>
                            <div className="border rounded-full border-gray-400 dark:border-white/40 w-10 h-10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#b820e6] hover:to-[#da7d20] hover:border-transparent transition group">
                                <svg className="w-5 h-5 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{work.name}</h2>
                        <p className="text-lg text-gray-600 dark:text-white/70">{work.description}</p>
                    </div>
                ))}
            </div>
            <Link to="/experiences" className="w-max flex items-center justify-center gap-3 text-lg text-gray-700 border-2 border-gray-300 dark:border-white/25 hover:border-[#b820e6] dark:hover:border-[#b820e6] hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-3 px-10 mx-auto my-20 duration-300 dark:text-white font-medium">
                View Communication & Outreach
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </Link>

        </div>
    )
}