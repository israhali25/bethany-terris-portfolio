export default function Skills() {
    const skillCategories = [
        {
            title: "Interdisciplinary Expertise",
            skills: [
                "Philosophy of physics",
                "Quantum foundations",
                "Scientific methodology",
                "Conceptual analysis",
                "Theory-experiment integration"
            ]
        },
        {
            title: "Research & Analysis",
            skills: [
                "Quantum mechanics interpretation",
                "Weak measurement theory",
                "Relational Quantum Mechanics",
                "Scientific realism debates",
                "Critical evaluation of scientific claims"
            ]
        },
        {
            title: "Communication",
            skills: [
                "Science communication",
                "Academic writing",
                "Public speaking",
                "Science vulgarisation",
                "Misinformation analysis"
            ]
        },
        {
            title: "Technical Skills",
            skills: [
                "Academic research",
                "Literature review",
                "Conference presentations",
                "Interdisciplinary collaboration",
                "Grant writing"
            ]
        }
    ];

    return (
        <div id="skills" className="w-full px-[12%] py-20 scroll-mt-20">
            <div className="text-center mb-16">
                <h4 className="mb-3 text-xs font-Ovo text-gray-700 dark:text-gray-300 uppercase tracking-wider">Expertise</h4>
                <h2 className="text-5xl font-Ovo font-bold text-gray-900 dark:text-white">Skills</h2>
                <p className="text-xs text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
                    Interdisciplinary training bridging philosophy, physics, and science communication
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {skillCategories.map((category, index) => (
                    <div 
                        key={index}
                        className="border-2 border-gray-200 dark:border-white/20 rounded-xl p-8 bg-white dark:bg-darkHover hover:shadow-xl hover:border-[#b820e6] dark:hover:border-[#b820e6] transition-all duration-300"
                    >
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white font-Ovo mb-6">
                            {category.title}
                        </h3>
                        <ul className="space-y-3">
                            {category.skills.map((skill, skillIndex) => (
                                <li 
                                    key={skillIndex}
                                    className="flex items-start gap-3 text-lg text-gray-700 dark:text-gray-300"
                                >
                                    <span className="text-[#b820e6] mt-1 flex-shrink-0">•</span>
                                    <span>{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-16 max-w-4xl mx-auto text-center">
                <div className="bg-gradient-to-r from-purple-50 to-orange-50 dark:from-darkHover dark:to-darkHover border-2 border-gray-200 dark:border-white/20 rounded-xl p-8">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 font-Ovo">
                        Interdisciplinary Approach
                    </h3>
                    <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                        My training in <span className="font-semibold text-[#b820e6]">philosophy of physics</span> provides a unique perspective that bridges theoretical precision with conceptual clarity. This interdisciplinary foundation enables me to navigate complex scientific questions while maintaining rigorous standards of both philosophical analysis and empirical research, making technical quantum concepts accessible without sacrificing intellectual depth.
                    </p>
                </div>
            </div>
        </div>
    )
}
