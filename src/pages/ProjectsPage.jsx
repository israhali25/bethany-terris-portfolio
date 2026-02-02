import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProjectsPage() {
    const projects = [
        {
            type: "Master's Thesis",
            title: 'Is quantum information compatible with scientific realism?',
            author: 'Bethany Terris',
            institution: 'University of Bristol',
            date: 'September 2021',
            pdf: '[attach pdf]',
            abstract: "Recent progress made in quantum technology has involved a theoretical and practical framework that incorporates quantum information at its centre. This present work considers the status of 'quantum information', whether it is a central theoretical term, and if so, to what it refers to. Through an examination of different positions, this paper concludes that 'quantum information' is an abstract entity and a central theoretical term, and therefore must refer according to scientific realism. The argument is made that 'quantum information' can be concluded to refer under quantum informational structural realism (QISR) and scientific realism is therefore consistent. It is suggested that future research should consider the plausibility of QISR due to the macroscopic quantum properties entailed by the position."
        },
        {
            type: "Master's Coursework Essay",
            title: 'Can scientific realism persist in quantum field theory?',
            author: 'Bethany Terris',
            institution: 'University of Bristol',
            date: 'May 2021',
            pdf: '[attach pdf]',
            abstract: "Scientific realism states that the central theoretical terms of our best current theories refer to entities in the world, and therefore are awarded ontological status, explaining the success of scientific theories by asserting that they are successful because they refer. The development of quantum field theory (QFT) raised new issues for realism; infinities produced in calculations appeared unphysical and renormalization procedures to rectify the infinities were concluded to be ad hoc. The question remains: can the central theoretical terms in QFT refer? If it is concluded that they do not refer to anything in the world then an inconsistency lies in scientific realism. This work considers whether a realist view of QFT is plausible. In Section 1, scientific realism is outlined and the disparity between realism and QFT is presented. Section 2 concerns QFT, providing a detailed description of the theory. Section 3 then discusses the plausibility of a realist reading of QFT is considered, arguing that renormalization group framework suggests that the two theories are compatible. Section 4 is split into two parts where 4.1 discusses Fraser's argument from analogies which provides a problem for the realist. Section 4.2 details potential routes to allow for a realist reading of QFT, concluding that structural realism allows for the persistence of a form of realism is QFT."
        },
        {
            type: "Master's Coursework Essay",
            title: 'Basics of String Theory',
            author: 'Bethany Terris',
            institution: 'University of Bristol',
            date: 'January 2021',
            pdf: '[attach pdf]',
            abstract: "This paper explores the revolution of string theory from bosonic string theory, through to M-theory, showing how the theoretical framework may provide a 'Theory of Everything'. Arguments against string theory are considered and experimental evidence is discussed."
        },
        {
            type: "Master's Coursework Essay",
            title: 'Does decoherence solve the preferred basis problem?',
            author: 'Bethany Terris',
            institution: 'University of Bristol',
            date: 'January 2021',
            pdf: '[attach pdf]',
            abstract: "Decoherence is the commonly accepted solution to the preferred basis problem. The dynamical process suggests that a preferred basis is chosen a priori due to the entanglement between system and environment, and the resulting suppression of interference effects. However, the approach has faced a lot of criticism, including the argument that decoherence does not provide completely non-interfering branches. This paper discusses this critique against the decoherence approach, and Wallace's solution involving the principle of FAPP (for all practical purposes)."
        }
    ];

    return (
        <div className="overflow-x-hidden antialiased text-gray-800 dark:bg-darkTheme dark:text-white">
            <Navbar />
            
            <div className="w-full px-[12%] py-20 mt-16">
                <h1 className="text-5xl font-Ovo font-bold text-gray-900 dark:text-white mb-6">Projects</h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl">
                    Master's thesis and coursework essays from the University of Bristol.
                </p>

                <div className="space-y-10">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="border-2 border-gray-200 dark:border-white/20 rounded-xl p-8 bg-white dark:bg-darkHover hover:shadow-lg transition duration-300"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-3 py-1 bg-[#b820e6]/10 dark:bg-[#b820e6]/20 text-[#b820e6] dark:text-[#da7d20] rounded-full text-sm font-medium">
                                            {project.type}
                                        </span>
                                        <span className="text-gray-600 dark:text-gray-400">{project.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                                        <span className="font-medium">Author:</span> {project.author}
                                    </p>
                                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                                        <span className="font-medium">Institution:</span> {project.institution}
                                    </p>
                                    <div className="bg-gray-50 dark:bg-darkTheme p-6 rounded-lg mb-4">
                                        <p className="font-semibold text-gray-900 dark:text-white mb-2">Abstract:</p>
                                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{project.abstract}</p>
                                    </div>
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
