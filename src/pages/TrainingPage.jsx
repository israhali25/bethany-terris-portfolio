import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function TrainingPage() {
    const trainings = [
        {
            name: 'Kefalonia Foundations Workshop',
            type: 'Workshop',
            location: 'Kefalonia, Greece',
            date: 'July 2024',
            description: 'Participation in the Kefalonia Foundations 2024 workshop, a week-long intensive programme bringing together early-career researchers in physics, mathematics, and philosophy of science to critically analyse key papers in the foundations of quantum mechanics. Co-led a small research team focused on a detailed examination of a paper on Relational Quantum Mechanics, guiding collective discussion, conceptual analysis, and the development of potential original research directions. The workshop combined in-depth scientific collaboration with a residential format designed to foster sustained dialogue, interdisciplinary exchange, and long-term research connections.'
        },
        {
            name: 'Foundations Under the Midnight Sun Workshop',
            type: 'Workshop',
            location: 'Tromsø, Norway',
            date: 'June 2023',
            description: 'A week-long residential workshop in Norway, bringing together early-career researchers in the foundations of physics. Over the course of the week, developed an original research project through intensive discussion and collaboration with peers, culminating in a final presentation. The workshop\'s deliberately unstructured format and shared living environment fostered sustained scientific exchange, creative exploration, and close interdisciplinary collaboration beyond the constraints of traditional conference settings.'
        },
        {
            name: 'QISS (Quantum Information Structure of Spacetime) Spring School',
            type: 'Spring School',
            location: 'Marcoux, France',
            date: 'April 2023',
            description: 'A week-long graduate research school held at the Château de Goutelas in southern France, featuring lectures by leading researchers in quantum information, quantum gravity, and related fields. The school focused on understanding spacetime and gravity through the lens of quantum information, bringing together perspectives from physics, mathematics, computer science, and philosophy of science. The programme emphasised interdisciplinary dialogue on how quantum theory and general relativity reshape concepts of locality, objectivity, space, and time.'
        },
        {
            name: 'TaQC (Taming Quantum Causality) Biannual Workshops',
            type: 'Research Network',
            location: 'Grenoble / Paris, France',
            date: '2023-2025',
            description: 'Attendance at the biannual Taming Quantum Causality (TaQC) workshops held in Grenoble and Paris, part of an ANR-funded research project bringing together researchers from multiple institutions. The workshops focused on foundational and conceptual aspects of quantum causality, in particular the role of indefinite causal order as a non-classical resource alongside superposition and entanglement. Discussions explored how rethinking causality reshapes quantum information processing, circuit design, and our broader understanding of time, order, and computation in quantum theory.'
        }
    ];

    const courses = [
        {
            name: 'Publication and Open Science course',
            date: 'January 2025',
            description: 'Completion of a training course on academic publishing and open science practices, covering the full lifecycle of research dissemination. The course addressed publication strategies, peer review processes, and ethical standards in scholarly communication, as well as open access models, research data management, and reproducibility. Particular emphasis was placed on responsible authorship, transparency, and the evolving role of open science in contemporary research environments.'
        },
        {
            name: 'Writing Skills in Science online course',
            date: 'December 2024',
            description: 'Attendance at a workshop focused on strengthening scientific writing skills, with emphasis on reader engagement, clarity, and confidence in manuscript preparation. The training developed awareness of sentence-level structures and rhetorical techniques to improve precision, flow, and effectiveness across scientific texts.'
        },
        {
            name: 'Podcast training: from design to distribution',
            date: 'November 2024',
            description: 'Completion of a podcast production training course covering the full process from concept development to distribution. The programme focused on designing a science popularisation podcast, developing narrative structure and format, learning the technical tools and software for recording and editing, and preparing content for publication. As part of the training, designed a podcast concept and recorded a pilot introduction episode.'
        },
        {
            name: 'Grant Writing online course',
            date: 'April-May 2024',
            description: 'Completion of a guided training course in scientific grant writing focused on international and European funding schemes. The course covered how to identify relevant funding opportunities, interpret call requirements and evaluation criteria, and adapt academic writing to the specific formats and conventions of grant proposals written in English. Through exercises and individual consultations, the training emphasised developing a coherent funding strategy, producing a draft proposal, and revising it to a professional standard, with attention to research valorisation and cross-sector expectations.'
        },
        {
            name: 'Public Speaking for PhD students in-person course',
            date: 'March 2024',
            description: 'Completion of an in-person training course on public speaking for PhD students, focused on effective oral communication of research to both specialist and non-specialist audiences. The course emphasised presentation structure, clarity, audience engagement, and confidence in live academic and public-facing speaking contexts.'
        },
        {
            name: 'Scientific Writing Bootcamp in-person training',
            date: 'February 2024',
            description: 'Participation in an intensive scientific writing bootcamp focused on the real-time production of short, targeted texts across disciplines and academic writing genres. The workshop emphasised clarity, structure, and adaptability of style, with hands-on exercises designed to refine argumentation and improve writing efficiency under time constraints.'
        },
        {
            name: 'Video training: Popularising for social networks',
            date: 'November 2023',
            description: 'Completion of a two-day training workshop focused on developing short-form video content for science popularisation on social media platforms. The course covered narrative structure, visual storytelling, and adapting scientific concepts to concise, engaging formats. As part of the workshop, designed and produced a short popularisation video on Schrödinger\'s cat, translating a foundational concept in quantum mechanics for a non-specialist audience while maintaining conceptual accuracy.'
        }
    ];

    return (
        <>
            <Navbar />
            <div className="w-full px-[12%] py-1">
                <h1 className="text-xxs font-bold font-Ovo mb-4 text-center bg-gradient-to-r from-[#b820e6] via-[#da7d20] to-[#e94560] bg-clip-text text-transparent">
                    Training & Professional Development
                </h1>
                <p className="text-center text-xxs text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
                    Workshops, summer schools, and research networks in foundations of physics
                </p>

                <div className="max-w-5xl mx-auto space-y-4">
                    {trainings.map((training, index) => (
                        <div 
                            key={index}
                            className="border-2 border-gray-200 dark:border-white/20 rounded-xl p-4 hover:border-[#b820e6] dark:hover:border-[#b820e6] transition-all duration-300 hover:shadow-xl bg-white dark:bg-darkHover/30"
                        >
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        {training.type === 'Workshop' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />}
                                        {training.type === 'Spring School' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />}
                                        {training.type === 'Research Network' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />}
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h2 className="text-xxs font-semibold text-gray-800 dark:text-white mb-2">
                                                {training.name}
                                            </h2>
                                            <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#b820e6]/10 to-[#da7d20]/10 border border-[#b820e6]/30 dark:border-[#da7d20]/30 mb-3">
                                                <span className="text-xxs font-medium text-[#b820e6] dark:text-[#da7d20]">
                                                    {training.type}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-4 text-xxs text-gray-600 dark:text-gray-300 mb-4">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>{training.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span>{training.date}</span>
                                        </div>
                                    </div>
                                    <p className="text-xxs text-gray-700 dark:text-gray-300 leading-normal">
                                        {training.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Courses Section */}
                <div className="max-w-5xl mx-auto mt-20">
                    <h2 className="text-xxs font-bold font-Ovo mb-4 text-center bg-gradient-to-r from-[#b820e6] to-[#da7d20] bg-clip-text text-transparent">
                        Professional Development Courses
                    </h2>
                    <div className="space-y-4">
                        {courses.map((course, index) => (
                            <div 
                                key={index}
                                className="border-2 border-gray-200 dark:border-white/20 rounded-xl p-4 hover:border-[#da7d20] dark:hover:border-[#da7d20] transition-all duration-300 hover:shadow-xl bg-white dark:bg-darkHover/30"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#da7d20] to-[#e94560] flex items-center justify-center flex-shrink-0">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xxs font-semibold text-gray-800 dark:text-white mb-2">
                                            {course.name}
                                        </h3>
                                        <div className="flex items-center gap-2 text-xxs text-gray-600 dark:text-gray-300 mb-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span>{course.date}</span>
                                        </div>
                                        <p className="text-xxs text-gray-700 dark:text-gray-300 leading-normal">
                                            {course.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}