import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PublicationsPage() {
    const publications = [
        {
            type: 'Journal Article',
            title: "Observer's Coherence in Relational Quantum Mechanics",
            authors: 'Bethany Terris, Alexei Grinbaum',
            journal: 'Forthcoming',
            doi: null,
            abstract: 'Relational Quantum Mechanics (RQM) denies the existence of observer-independent facts, raising the challenge of how empirical confirmation is possible in such a framework. If each observer only has access to facts relative to their own frame, and if observers are defined minimally as physical systems that interact with other physical systems, there appears to be no guarantee of stable perspectives or agreement between observers. This article addresses this challenge by introducing a two-step model of confirmation grounded in sequential weak values. First, we redefine the observer as consisting of both complementary physical and informational functional roles. Here, observation is treated as a temporally extended process requiring coherent records across time. Sequential weak values provide a tool for probing this coherence and establishing the emergence of a temporally stable informational observer. Second, we note that applying the first step to a pre-existing framework (cross-perspective links) resolves the problem of instability of identity, providing a means for intersubjective agreement across observers. This layered approach preserves the relational ontology of RQM while recovering empirical confirmation as a structurally grounded, perspectival process.'
        },
        {
            type: 'PhD Thesis',
            title: 'Weak Values in Quantum Mechanics: Conceptual Questions',
            authors: 'Bethany Terris',
            journal: 'Link coming soon',
            doi: null,
            abstract: 'Interest in weak values has grown steadily since their introduction in 1988, driven by developments in quantum measurement theory and increasing attention to the foundational issues at the heart of quantum mechanics. This thesis undertakes a philosophical investigation into the nature and implications of weak values, with a particular focus on their interpretation and role in creating and resolving quantum paradoxes. Overall, we argue that sequential weak values offer novel conceptual tools for assessing logical consistency in an atemporal fashion, ultimately motivating a shift toward a fundamentally relation-based ontology.'
        },
        {
            type: 'Journal Article',
            title: 'Weak Particle Presence',
            authors: 'Bethany Terris',
            journal: 'Foundations of Physics',
            doi: 'https://doi.org/10.1007/s10701-025-00837-2',
            abstract: 'The concept of presence has been extensively explored in philosophy, yet the notion of particle presence within quantum theory remains under-examined. In this article, we explore particle presence through an analysis of a paradox arising from weak measurements. We show that the classical intuition about particle presence involves an erroneous logical combination of propositions from single-time weak values, leading to inconsistencies that result in the deduction of discontinuous trajectories. Instead, we argue that by treating presence as a property defined across time by measuring sequential weak values, the discontinuity paradox is resolved, providing a coherent, non-classical account of particle presence. We discuss some advantages and drawbacks of this account, and consider applications to other cases of trajectory discontinuity.'
        }
    ];

    return (
        <div className="overflow-x-hidden antialiased text-gray-800 dark:bg-darkTheme dark:text-white">
            <Navbar />
            
            <div className="w-full px-[12%] py-20 mt-8">
                <h1 className="text-xxs font-Ovo font-bold text-gray-900 dark:text-white mb-6">Publications</h1>
                <p className="text-xxs text-gray-700 dark:text-gray-300 mb-6 max-w-3xl">
                    Journal articles, PhD thesis, and academic publications in quantum foundations and philosophy of physics.
                </p>

                <div className="space-y-8">
                    {publications.map((pub, index) => (
                        <div 
                            key={index} 
                            className="border-2 border-gray-200 dark:border-white/20 rounded-2xl p-8 bg-white dark:bg-darkHover hover:shadow-lg transition duration-300"
                        >
                            <div className="flex items-start gap-8 mb-8">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <p className="text-xxs text-[#b820e6] dark:text-[#da7d20] font-medium mb-2">{pub.type}</p>
                                    <h3 className="text-xxs font-semibold text-gray-900 dark:text-white mb-6">{pub.title}</h3>
                                    <p className="text-xxs text-gray-700 dark:text-gray-300 mb-2">
                                        <span className="font-medium">Author(s):</span> {pub.authors}
                                    </p>
                                    <p className="text-xxs text-gray-700 dark:text-gray-300 mb-2">
                                        <span className="font-medium">Journal:</span> {pub.journal}
                                    </p>
                                    {pub.abstract && (
                                        <div className="bg-gray-50 dark:bg-darkTheme p-6 rounded-lg my-4">
                                            <p className="font-semibold text-gray-900 dark:text-white mb-2">Abstract:</p>
                                            <p className="text-xxs text-gray-700 dark:text-gray-300 leading-normal">{pub.abstract}</p>
                                        </div>
                                    )}
                                    {pub.doi && (
                                        <a 
                                            href={pub.doi} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-[#b820e6] dark:text-[#da7d20] hover:underline mt-2"
                                        >
                                            <span className="font-medium">DOI:</span> {pub.doi}
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
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
