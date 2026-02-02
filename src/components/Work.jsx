import { Link } from 'react-router-dom';

export default function Work() {
    const workCategories = [
        {
            name: 'Publications',
            description: 'Journal articles, PhD thesis, and academic publications',
            link: '/publications',
            count: '3 items'
        },
        {
            name: 'Conferences & Invited Talks',
            description: 'Conference presentations and invited seminars',
            link: '/conferences',
            count: '4 talks'
        },
        {
            name: 'Scientific Vulgarisation',
            description: 'Public engagement and science communication',
            link: '/vulgarisation',
            count: '1 podcast'
        },
        {
            name: 'Projects',
            description: 'Master\'s thesis and coursework essays',
            link: '/projects',
            count: '2 projects'
        }
    ];
    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-xs font-Ovo">My Work</h4>
            <h2 className="text-center text-5xl font-Ovo">Research & Publications</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-xl">Explore my research portfolio showcasing publications in quantum foundations, measurement theory, and philosophy of physics.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-6">
                {workCategories.map((category, index) => (
                    <Link 
                        key={category.name} 
                        to={category.link}
                        className="border border-gray-300 dark:border-white/30 rounded-xl p-8 hover:shadow-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white/20 bg-white dark:bg-darkTheme"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] flex items-center justify-center">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />}
                                    {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />}
                                    {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />}
                                    {index === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
                                </svg>
                            </div>
                            <div className="border rounded-full border-gray-400 dark:border-white/40 w-10 h-10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#b820e6] hover:to-[#da7d20] hover:border-transparent transition group">
                                <svg className="w-5 h-5 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                        <h2 className="text-sm font-semibold mb-2 text-gray-800 dark:text-white">{category.name}</h2>
                        <p className="text-lg text-gray-600 dark:text-white/70 mb-2">{category.description}</p>
                        <p className="text-sm text-[#b820e6] dark:text-[#da7d20] font-medium">{category.count}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}