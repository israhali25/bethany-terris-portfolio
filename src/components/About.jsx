export default function About() {
    return (
        <div id="about" className="w-full px-[12%] py-12 scroll-mt-20 bg-gradient-to-b from-white via-purple-50/20 to-orange-50/20 dark:from-darkTheme dark:via-darkTheme dark:to-darkTheme">
            <div className="text-center mb-8">
                <h4 className="mb-1 text-xs font-Ovo text-gray-700 dark:text-gray-300 uppercase tracking-wider">Introduction</h4>
                <h2 className="text-xl font-Ovo font-bold text-gray-900 dark:text-white">Who Am I?</h2>
                <p className="text-xs text-gray-700 dark:text-gray-300 mt-1 italic">The question we all ask ourselves</p>
            </div>

            <div className="flex w-full flex-col lg:flex-row items-start gap-8 max-w-5xl mx-auto">
                {/* Photo sticky */}
                <div className="w-full lg:w-56 flex-shrink-0 mx-auto lg:mx-0 lg:sticky lg:top-24">
                    <div className="relative">
                        <img 
                            src="./assets/profile-pic.jpg" 
                            alt="Bethany Terris" 
                            className="w-full aspect-square rounded-2xl object-cover shadow-2xl"
                        />
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#b820e6] via-[#da7d20] to-[#e94560] rounded-2xl blur-2xl opacity-20 -z-10"></div>
                    </div>
                </div>
                
                {/* Contenu */}
                <div className="flex-1 space-y-2 text-xs leading-relaxed font-Ovo text-gray-700 dark:text-gray-300">
                    
                    <p>
                        For me, this question has never been straightforward. For years now, I have felt myself split across worlds (a common occupational hazard for anyone who spends too much time with Everett!)
                    </p>

                    <div className="my-3 space-y-1.5 pl-3 border-l-4 border-[#b820e6]">
                        <p className="text-base font-semibold text-gray-900 dark:text-white">I am a physicist.</p>
                        <p className="text-base font-semibold text-gray-900 dark:text-white">I am a philosopher.</p>
                    </div>

                    <p>
                        And for a long time, these identities felt less like complementary perspectives than like parallel branches, each internally coherent, yet stubbornly resistant to collapse into a single story.
                    </p>

                    <p>
                        Physics enticed me with technical precision and the promise of explanation. Philosophy pulled me towards the very edges – what counts as reality, what it means to observe, what it takes to know anything at all.
                    </p>

                    <p>
                        My PhD in Philosophy of Physics was the collision. Somehow, the worlds met again.
                    </p>

                    <p className="mt-16">
                        The thing is, quantum theory is no longer confined to foundational work. It's becoming technology, infrastructure, policy.
                    </p>

                    <p>
                        As quantum technologies move from the lab into industry and public discourse, the gap between what the theory actually says and what people think it says is widening fast. Quantum mechanics is powerful, and routinely misunderstood. Sometimes accidentally. Often strategically.
                    </p>

                    <p>
                        This is where my interest in science communication comes in. I care about how quantum ideas travel. What gets simplified. What gets distorted. And how vague references to "quantum" are used to sell certainty, authority, or even ideology, without understanding the science underneath.
                    </p>

                    <p>
                        I'm interested in quantum technology not just as a scientific achievement, but as a social one. What we build matters. So does how we talk about it. And if we don't take responsibility for that conversation, someone else will – badly.
                    </p>

                    <div className="mt-6 pt-3 border-t-2 border-gray-200 dark:border-gray-700">
                        <p className="font-bold text-xs">
                            Now, instead of doing the research, I write about it. On this website, you can find a portfolio of my work, including academic publications, conference talks, blog posts, and popular science appearances.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}