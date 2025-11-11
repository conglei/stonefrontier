'use client'

export default function Footer() {
  return (
    <footer className="w-full h-[100px] border-t border-gray-100 dark:border-slate-800 bg-[#FBFAFB] dark:bg-[#0f172a] text-gray-500 dark:text-slate-400 flex items-center transition-colors duration-700" style={{ paddingTop: '20px', paddingBottom: '20px', paddingLeft: '50px', paddingRight: '50px' }}>
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-[14px] leading-relaxed">
        <p className="text-left">
          © {new Date().getFullYear()} <span className="text-gray-900 dark:text-white font-medium">Suminos</span>. Empowering your career journey with AI.
        </p>
        <div className="flex gap-10 md:gap-12">
          <a href="/legal/privacy-policy" className="relative hover:text-gray-900 dark:hover:text-white transition-colors after:content-[''] after:absolute after:-bottom-[3px] after:left-0 after:w-0 after:h-[1px] after:bg-[#0060F3] hover:after:w-full after:transition-all after:duration-500 after:ease-out">Privacy Policy</a>
          <a href="/legal/terms-of-service" className="relative hover:text-gray-900 dark:hover:text-white transition-colors after:content-[''] after:absolute after:-bottom-[3px] after:left-0 after:w-0 after:h-[1px] after:bg-[#0060F3] hover:after:w-full after:transition-all after:duration-500 after:ease-out">Terms of Service</a>
          <a href="mailto:contact@suminos.ai" className="relative hover:text-gray-900 dark:hover:text-white transition-colors after:content-[''] after:absolute after:-bottom-[3px] after:left-0 after:w-0 after:h-[1px] after:bg-[#0060F3] hover:after:w-full after:transition-all after:duration-500 after:ease-out">Contact Us</a>
        </div>
      </div>
    </footer>
  )
}