export default function Footer() {
    return (
      <footer className="w-full">
        <div className="w-full bg-[#0066cc] px-4 py-4 text-white flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm">All right reserved, CareerForge, {new Date().getFullYear()}.</p>
          <div className="flex items-center gap-2 text-sm">
            <a href="" className="hover:underline">
              Terms Of Use
            </a>
            <span className="text-white/80">|</span>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    )
}  