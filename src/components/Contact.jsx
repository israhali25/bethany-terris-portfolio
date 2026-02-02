export default function Contact() {
    return (
        <div id="contact" className="w-full px-[12%] py-20 scroll-mt-20">
            <div className="max-w-4xl mx-auto">
                <h4 className="text-center mb-2 text-xl font-Ovo text-[#b820e6]">Let's Connect</h4>
                <h2 className="text-center text-5xl font-Ovo mb-8">Get in Touch</h2>
                <p className="text-center max-w-2xl mx-auto mb-16 font-Ovo text-xl text-gray-600 dark:text-gray-300">
                    Always interested in discussing research collaborations, speaking opportunities, or consulting projects in quantum foundations and philosophy of physics.
                </p>

                <div className="flex justify-center mb-12">
                    {/* Email Card */}
                    <a href="mailto:beth.terris@gmail.com" 
                       className="group p-8 rounded-2xl border-2 border-gray-200 dark:border-white/20 hover:border-[#b820e6] dark:hover:border-[#b820e6] transition-all duration-300 hover:shadow-xl bg-white dark:bg-darkHover/30 max-w-md w-full">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-semibold mb-2 dark:text-white text-center">Email</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 text-center">beth.terris@gmail.com</p>
                    </a>
                </div>

                {/* Location and LinkedIn */}
                <div className="text-center space-y-6 pt-8 border-t border-gray-200 dark:border-white/20">
                    <div className="flex items-center justify-center gap-3 text-lg text-gray-600 dark:text-gray-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Paris, France</span>
                    </div>
                    
                    <div className="flex items-center justify-center">
                        <a href="https://www.linkedin.com/in/bethanyterris/" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="flex items-center gap-3 px-8 py-4 rounded-full border-2 border-gray-300 dark:border-white/30 hover:border-[#0077b5] dark:hover:border-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-all hover:scale-105 text-lg font-medium">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                            Connect on LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
