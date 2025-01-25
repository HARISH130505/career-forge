import "./globals.css"
import { Poppins } from "next/font/google"
import Navbar from "./components/Navbar"

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
      <body className={`${poppins.className} min-h-screen`}>
        <Navbar />
        <div className="pt-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />
            <div className="relative">{children}</div>
          </div>
        </div>
      </body>
    </html>
  )
}