"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
 
const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Resources", href: "/resources" },
  { name: "Events", href: "/events" },
  { name: "Contact Us", href: "/contact" },
]
 
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
 
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "navbar-glass shadow-lg" : "navbar"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="logo-container">
              <div className="flex items-center space-x-3">
                <div>
                  <Image
                    src="/logo.jpg"
                    alt="CareerForge Logo"
                    width={40}
                    height={40}
                    className="logo-image rounded-lg"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white hidden md:block">CareerForge</span>
                  <span className="text-xs text-gray-200 hidden md:block">Creating Inspiring Careers</span>
                </div>
              </div>
            </Link>
          </div>
 
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <Link key={item.name} href={item.href} className="relative group">
                  <span
                    className={`text-gray-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium 
                    transition-all duration-300 ease-in-out hover:scale-105 nav-item flex items-center`}
                    style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                  >
                    {item.name}
                  </span>
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 
                    group-hover:w-full opacity-0 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>
 
          <div className="hidden md:block">
            <button
              className="btn-gradient text-white px-6 py-2 rounded-md text-sm font-medium 
                transition-all duration-300 transform hover:scale-105 hover:shadow-lg nav-item"
              style={{ animationDelay: "0.8s" }}
            >
              Join Now
            </button>
          </div>
 
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white 
                hover:text-gray-200 focus:outline-none transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
 
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 navbar-glass shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-100 hover:text-white block px-3 py-2 rounded-md text-base font-medium 
                  transition-all duration-300 hover:bg-blue-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              className="w-full text-left btn-gradient text-white px-3 py-2 rounded-md text-base 
              font-medium transition-all duration-300 mt-2 hover:shadow-md"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}