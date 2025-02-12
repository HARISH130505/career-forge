import "./globals.css"
import { Poppins } from "next/font/google"
import Navbar from "./components/Navbar"
import Footer from "./components/footer"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "CareerForge",
  description: "Empowering Careers with Knowledge and Skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-blue-100 bg-opacity-80 min-h-screen`}>
        <Navbar />
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />
            <div className="relative">{children}</div>
          </div>
        <Footer/>
      </body>
    </html>
  )
}