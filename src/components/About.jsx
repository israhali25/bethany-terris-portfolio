export default function About() {
    const tools = [
        { name: 'LaTeX', icon: './assets/vscode.png', },
        { name: 'Python', icon: './assets/firebase.png', },
        { name: 'Research', icon: './assets/mongodb.png', },
        { name: 'Analysis', icon: './assets/figma.png', },
        { name: 'git', icon: './assets/git.png', },
    ];

    const data = [
        {
            name: 'Languages',
            icon1: './assets/code-icon.png',
            icon2: './assets/code-icon-dark.png',
            description: 'English (Native), French (B1)',
        },
        {
            name: 'Education',
            icon1: './assets/edu-icon.png',
            icon2: './assets/edu-icon-dark.png',
            description: 'PhD Philosophy of Physics, University Paris-Saclay',
        },
        {
            name: 'Experience',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: '3+ years PhD Research at CEA-Saclay',
        },
    ];
    return (
        <div id="about" className="w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-transparent to-gray-50 dark:to-darkTheme/30">
            <h4 className="text-center mb-2 text-xl font-Ovo text-[#b820e6]">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo mb-20">About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="max-w-max mx-auto relative">
                    <div className="w-64 sm:w-80 h-64 sm:h-80 rounded-3xl bg-gradient-to-br from-[#b820e6] via-[#da7d20] to-[#e94560] flex items-center justify-center text-white text-6xl sm:text-8xl font-bold shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-pulse-slow"></div>
                        <span className="relative z-10">BT</span>
                    </div>
                </div>
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        Interdisciplinary PhD researcher in <span className="font-semibold text-[#b820e6]">quantum foundations</span>, trained in working at the boundary between theory, experiment, and interpretation. Comfortable with detail-oriented, precision-driven work, long review cycles, and applying consistent criteria across complex material. Strong communicator with experience supporting alignment between researchers working across disciplines.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {data.map((data) => (
                            <li key={data.name} className="group border-2 border-gray-200 dark:border-white/20 rounded-xl p-6 cursor-pointer hover:border-[#b820e6] dark:hover:border-[#b820e6] hover:-translate-y-2 duration-300 hover:shadow-xl bg-white dark:bg-darkHover/30">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] flex items-center justify-center mb-3">
                                    <img src={data.icon1} alt="" className="w-5 dark:hidden invert" />
                                    <img src={data.icon2} alt="" className="w-5 hidden dark:block" />
                                </div>
                                <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">{data.name}</h3>
                                <p className="text-gray-600 text-sm dark:text-gray-300">{data.description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Skills & Tools</h4>

                    <ul className="flex items-center gap-3 sm:gap-5">
                        {tools.map((tool) => (
                            <li key={tool.name} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}