export default function Services() {
    const services = [
        {
            name: 'Research & Analysis',
            icon: './assets/web-icon.png',
            description: 'Systematic analysis of quantum theory, checking consistency between mathematical models and physical assumptions.',
            link: '#',
        },
        {
            name: 'Science Communication',
            icon: './assets/mobile-icon.png',
            description: 'Translating technically subtle ideas for non-specialist audiences, improving clarity across disciplines.',
            link: '#',
        },
        {
            name: 'Project Management',
            icon: './assets/ui-icon.png',
            description: 'Managing long-term research projects with multiple stakeholders and complex deliverables.',
            link: '#',
        },
        {
            name: 'Teaching & Tutoring',
            icon: './assets/graphics-icon.png',
            description: '1,000+ hours of one-to-one instruction at secondary school and university level.',
            link: '#',
        }
    ];
    return (
        <div id="services" className="w-full px-[12%] py-20 scroll-mt-20">
            <h4 className="text-center mb-2 text-xl font-Ovo text-[#b820e6]">What I offer</h4>
            <h2 className="text-center text-5xl font-Ovo mb-8">My expertise</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-16 font-Ovo text-xl text-gray-600 dark:text-gray-300">PhD researcher specializing in quantum foundations with strong analytical, communication, and project management skills developed through interdisciplinary research.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 max-w-5xl mx-auto">
                {services.map((service, index) => (
                    <div key={service.name} className="group border-2 border-gray-200 dark:border-white/20 rounded-2xl p-8 hover:border-[#b820e6] dark:hover:border-[#b820e6] cursor-pointer hover:-translate-y-2 duration-300 hover:shadow-2xl bg-white dark:bg-darkHover/30">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                            <span className="text-white text-2xl font-bold">{index + 1}</span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">{service.name}</h3>
                        <p className="text-lg text-gray-600 leading-relaxed dark:text-gray-300">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}