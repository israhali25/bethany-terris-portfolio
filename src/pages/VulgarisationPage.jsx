import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function VulgarisationPage() {
    const vulgarisation = [
        {
            type: 'Academic Writing Center',
            role: 'Invited Guest',
            date: 'December 2025',
            hosts: 'Michelle Awad and Mélissa-Ann Thomas',
            link: 'https://awc.centralesupelec.fr/en/podcast',
            linkText: 'Episode coming soon',
            description: "In this episode of the Academic Writing Podcast, I discuss how science misinformation emerges and circulates within the contemporary quantum ecosystem, from hype-driven narratives to more insidious ideological pipelines, including links to right-wing and conspiratorial communities. Drawing on my experience in quantum foundations and science communication, I explore why misinformation thrives when expertise is framed as elitist or exclusionary. We argue that effective remedies lie not in shaming or performative debunking, but in responsible communication that treats audiences with intellectual respect, encouraging curiosity, openness, and critical engagement without sacrificing rigor."
        }
    ];

    return (
        <div className="overflow-x-hidden antialiased text-gray-800 dark:bg-darkTheme dark:text-white">
            <Navbar />
            
            <div className="w-full px-[12%] py-20 mt-8">
                <h1 className="text-xxs font-Ovo font-bold text-gray-900 dark:text-white mb-6">Scientific Vulgarisation</h1>
                <p className="text-xxs text-gray-700 dark:text-gray-300 mb-6 max-w-3xl">
                    Public engagement and science communication work on quantum mechanics and scientific misinformation.
                </p>

                <div className="space-y-10">
                    {vulgarisation.map((item, index) => (
                        <div 
                            key={index} 
                            className="border-2 border-gray-200 dark:border-white/20 rounded-2xl p-8 bg-white dark:bg-darkHover hover:shadow-lg transition duration-300"
                        >
                            <div className="flex items-start gap-8 mb-8">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-6 mb-2">
                                        <span className="px-6 py-2 bg-[#b820e6]/10 dark:bg-[#b820e6]/20 text-[#b820e6] dark:text-[#da7d20] rounded-full text-xxs font-medium">
                                            {item.role}
                                        </span>
                                        <span className="text-gray-600 dark:text-gray-400">{item.date}</span>
                                    </div>
                                    <h3 className="text-xxs font-semibold text-gray-900 dark:text-white mb-2">{item.type}</h3>
                                    {item.hosts && (
                                        <p className="text-xxs text-gray-600 dark:text-gray-400 mb-6">
                                            <span className="font-medium">Hosts:</span> {item.hosts}
                                        </p>
                                    )}
                                    <p className="text-xxs text-gray-700 dark:text-gray-300 leading-normal mb-8">{item.description}</p>
                                    <a 
                                        href={item.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[#b820e6] dark:text-[#da7d20] hover:underline"
                                    >
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                        </svg>
                                        <span className="font-medium">{item.linkText}</span>
                                    </a>
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
