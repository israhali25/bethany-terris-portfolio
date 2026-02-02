export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="#!" className="inline-flex items-center gap-2 mb-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] flex items-center justify-center text-white font-bold">
                        BT
                    </div>
                    <span className="text-xxs font-bold font-Ovo dark:text-white">Bethany Terris, Ph.D.</span>
                </a>

                <div className="w-max flex items-center gap-2 mx-auto text-xxs">
                    <img src="./assets/mail_icon.png" alt="" className="w-6 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" alt="" className="w-6 hidden dark:block" />

                    <a href="mailto:beth.terris@gmail.com">beth.terris@gmail.com</a>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-2 text-xxs">
                <p>© {new Date().getFullYear()} Bethany Terris, Ph.D. • All rights reserved.</p>
                <div className="mt-8 sm:mt-0">
                    <a href="https://www.linkedin.com/in/bethanyterris/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="hover:text-[#0077b5] transition-colors">
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    )
}