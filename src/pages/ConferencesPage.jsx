import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ConferencesPage() {
    const conferences = [
        {
            event: 'Quantum PhD-Days, Quantum Saclay',
            role: 'Conference Speaker',
            title: 'Empirical Confirmation in Relational Quantum Mechanics',
            date: 'June 2025',
            slides: null,
            description: "In this talk, I address the problem of empirical confirmation in Relational Quantum Mechanics, where facts are observer-relative and intersubjective agreement is not guaranteed. I argue that confirmation can nevertheless be achieved at the single-agent level by appealing to the persistence of the observer through time and the coherence of her memory records, assessed using sequential weak values. This approach reframes empirical confirmation as a temporally extended, relational process rather than one grounded in shared, observer-independent facts."
        },
        {
            event: 'Philosophy of Physics Seminar, University of Bristol',
            role: 'Invited Speaker',
            title: 'What do weak values reveal?',
            date: 'March 2025',
            slides: null,
            description: "In this talk, I explore the concept of weak values in quantum mechanics and their implications for understanding the nature of quantum properties and contextuality. Weak values, as the outcome of weak measurements, challenge traditional notions of properties, revealing that they can exist outside the eigenvalue spectrum. I will discuss the controversy surrounding the interpretation of weak values and whether they represent genuine properties of quantum systems or are simply mathematical tools. I introduce the idea of time-dependent contextuality, suggesting that weak values represent quantum properties which are not only dependent on the measurement context, but also on temporal conditions. Ultimately, I argue that weak values suggest a temporally relational view of quantum properties, where time plays an active role in defining these properties, offering a new perspective into the dynamic and context-dependent nature of quantum systems."
        },
        {
            event: 'BLOC Philosophy of Physics Graduate Workshop, University of Bristol',
            role: 'Speaker',
            title: 'The Problem of Empirical Confirmation: Persistence and Identity in Relational Quantum Mechanics',
            date: 'December 2024',
            slides: null,
            description: "In this talk, I use identity paradoxes, including puzzles of persistence, memory, and personal identity, to analyse the problem of empirical confirmation in Relational Quantum Mechanics (RQM). By drawing analogies between observer-relative facts in RQM and familiar failures of trans-temporal identity, I argue that confirmation hinges on the persistence of the observing agent rather than on intersubjective agreement."
        },
        {
            event: 'The Sixteenth Biennial IQSA Conference Quantum Structures, Vrije Universiteit Brussel',
            role: 'Conference Speaker',
            title: 'Weak Particle Presence',
            date: 'June 2024',
            slides: null,
            description: "In this talk, I explore how weak values can be used to define and track particle presence across space and time without invoking classical trajectories. Focusing on sequential weak measurements, I argue that particle presence should be understood as a relational and temporally extended notion, capable of resolving discontinuity paradoxes in interferometric setups. The analysis highlights the conceptual implications of weak particle presence for quantum ontology and the interpretation of quantum measurements."
        }
    ];

    return (
        <div className="overflow-x-hidden antialiased text-gray-800 dark:bg-darkTheme dark:text-white">
            <Navbar />
            
            <div className="w-full px-[12%] py-20 mt-16">
                <h1 className="text-5xl font-Ovo font-bold text-gray-900 dark:text-white mb-6">Conferences & Invited Talks</h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl">
                    Conference presentations and invited seminars on quantum foundations, measurement theory, and relational quantum mechanics.
                </p>

                <div className="space-y-10">
                    {conferences.map((conf, index) => (
                        <div 
                            key={index} 
                            className="border-2 border-gray-200 dark:border-white/20 rounded-xl p-8 bg-white dark:bg-darkHover hover:shadow-lg transition duration-300"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-3 py-1 bg-[#b820e6]/10 dark:bg-[#b820e6]/20 text-[#b820e6] dark:text-[#da7d20] rounded-full text-sm font-medium">
                                            {conf.role}
                                        </span>
                                        <span className="text-gray-600 dark:text-gray-400">{conf.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{conf.title}</h3>
                                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">{conf.event}</p>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{conf.description}</p>
                                    {conf.slides && (
                                        <div className="mt-4">
                                            <span className="text-[#b820e6] dark:text-[#da7d20] font-medium">Slides: [attach pdf]</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
