import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ExperiencesPage() {
    const experiences = [
        {
            title: 'Academic Writing Podcast – Guest',
            year: '2025',
            type: 'Outreach & Communication',
            description: 'Invited guest on the Academic Writing Podcast to discuss common sources of misinformation in quantum mechanics and strategies for countering them through clear, conceptually rigorous communication.',
            details: [
                'Addressed misconceptions about quantum measurements and wave function collapse',
                'Discussed best practices for communicating quantum concepts to diverse audiences',
                'Emphasized importance of precision in scientific communication'
            ],
            icon: '🎙️'
        },
        {
            title: 'University of Bristol – Invited Speaker',
            year: '2025',
            type: 'Academic Presentation',
            description: '60-minute invited lecture on weak values in quantum mechanics, presenting original research findings to faculty and graduate students.',
            details: [
                'Presented technical results on weak measurement theory',
                'Discussed conceptual implications for quantum foundations',
                'Engaged in detailed Q&A with research community'
            ],
            icon: '🎓'
        },
        {
            title: 'IQSA Conference – Speaker',
            year: '2024',
            type: 'Conference Presentation',
            description: '30-minute presentation on quantum "presence" at the International Quantum Structures Association conference.',
            details: [
                'Presented novel approach to understanding quantum states',
                'Discussed philosophical implications of weak values',
                'Networked with international quantum foundations community'
            ],
            icon: '📊'
        },
        {
            title: 'Vulgarisation de la Physique Quantique',
            year: '2022-2025',
            type: 'Group Project & Outreach',
            description: 'Collaborative group project during PhD years at CEA-Saclay focused on making quantum physics accessible to general audiences through various outreach activities.',
            details: [
                'Developed pedagogical materials explaining quantum concepts without heavy mathematics',
                'Collaborated with fellow PhD students and researchers on science communication',
                'Created content for diverse audiences ranging from high school students to general public',
                'Practiced translating complex theoretical concepts into intuitive explanations',
                'Contributed to bridging gap between specialised research and public understanding'
            ],
            icon: '🔬'
        }
    ];

    return (
        <div className="min-h-screen">
            <Navbar />
            
            {/* Header Section */}
            <div className="w-full px-[12%] py-32 pt-40">
                <Link to="/" className="inline-flex items-center gap-2 text-lg mb-8 text-gray-600 dark:text-gray-300 hover:text-[#b820e6] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </Link>
                
                <h1 className="text-5xl md:text-6xl font-bold font-Ovo mb-6 bg-gradient-to-r from-[#b820e6] via-[#da7d20] to-[#e94560] bg-clip-text text-transparent">
                    Communication & Outreach
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                    Selected presentations, collaborations, and public engagement activities showcasing my commitment to 
                    clear scientific communication and interdisciplinary dialogue.
                </p>
            </div>

            {/* Experiences Section */}
            <div className="w-full px-[12%] pb-20">
                <div className="max-w-5xl mx-auto space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="group border-2 border-gray-200 dark:border-white/20 rounded-2xl p-8 md:p-10 hover:border-[#b820e6] dark:hover:border-[#b820e6] transition-all duration-300 hover:shadow-2xl bg-white dark:bg-darkHover/30">
                            {/* Header */}
                            <div className="flex items-start gap-6 mb-6">
                                <div className="text-5xl">{exp.icon}</div>
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                                            {exp.title}
                                        </h2>
                                        <span className="px-4 py-1 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white text-sm font-medium">
                                            {exp.year}
                                        </span>
                                    </div>
                                    <p className="text-lg text-[#b820e6] dark:text-[#da7d20] font-medium mb-4">
                                        {exp.type}
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                {exp.description}
                            </p>

                            {/* Details */}
                            <div className="space-y-3">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                                    Key Highlights:
                                </h3>
                                <ul className="space-y-2">
                                    {exp.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-lg text-gray-600 dark:text-gray-300">
                                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] mt-2 flex-shrink-0"></span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="max-w-3xl mx-auto mt-20 text-center p-10 border-2 border-gray-200 dark:border-white/20 rounded-2xl bg-gradient-to-br from-gray-50 to-transparent dark:from-darkHover/30 dark:to-transparent">
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">Interested in collaboration?</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        Always open to discussing research collaborations, speaking opportunities, or consulting projects.
                    </p>
                    <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        Get in Touch
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}
