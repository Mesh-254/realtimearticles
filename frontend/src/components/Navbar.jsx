"use client"

import { useState, useEffect } from "react"
import { MenuIcon, XIcon, SearchIcon } from "./Icons"

const navLinks = [
  { id: "home", label: "Home", href: "#" },
  { id: "articles", label: "Articles", href: "#articles" },
  { id: "categories", label: "Categories", href: "#categories" },
  { id: "authors", label: "Authors", href: "#authors" },
  { id: "about", label: "About", href: "#about" },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (id) => {
    setActiveLink(id)
    setIsMenuOpen(false)

    // Smooth scroll to section
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-[url('./assets/jigsaw.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/70 before:to-black/50"
      }`}
    >
      {/* Top Section with Logo */}
      <div className="container-custom relative z-10">
        <div
          className={`flex flex-col items-center justify-center transition-all duration-500 ${
            isScrolled ? "py-1 md:py-2" : "py-3 md:py-4"
          }`}
        >
          {/* Logo (Centered) */}
          <a href="/" className="flex items-center justify-center mb-2">
            <span
              className={`font-serif font-bold tracking-tight transition-all duration-500 ${
                isScrolled ? "text-xl md:text-2xl lg:text-3xl" : "text-2xl md:text-3xl lg:text-4xl"
              } ${isScrolled ? "text-dark" : "text-white"}
`}
            >
              Realtime<span className="text-primary">Articles</span>
            </span>
          </a>

          {/* Navigation Menu (Below Logo) - Desktop */}
          <nav
            className={`hidden md:flex items-center justify-center w-full transition-all duration-500 ${
              isScrolled ? "space-x-6" : "space-x-8"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.id)
                }}
                className={`relative uppercase tracking-wider transition-all duration-500  ${
                  isScrolled ? "py-1 text-sm font-medium" : "py-1.5 text-sm font-medium"
                }
                  ${
                    isScrolled
                      ? activeLink === link.id
                        ? "text-primary"
                        : "text-gray-800 hover:text-primary"
                      : activeLink === link.id
                        ? "text-white"
                        : "text-white/90 hover:text-white"
                  }
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current 
                  after:transition-all ${activeLink === link.id ? "after:w-full" : "hover:after:w-full"}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Search and CTA - Desktop */}
          <div className="hidden md:flex items-center space-x-4 absolute right-4 top-1/2 -translate-y-1/2">
            <button
              className={`p-2 transition-colors duration-300 ${
                isScrolled ? "text-gray-500 hover:text-primary" : "text-white hover:text-primary-200"
              }`}
            >
              <SearchIcon className="w-5 h-5" />
            </button>
            <a
              href="#"
              className={`rounded-lg font-medium uppercase tracking-wider transition-all duration-500 ${
                isScrolled ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
              } ${
                isScrolled
                  ? "bg-primary text-white hover:bg-primary/90 shadow-sm hover:shadow-md"
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              Subscribe
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 absolute right-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
              isScrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-primary-200"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden relative z-10 ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container-custom py-4 space-y-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.id)
                }}
                className={`py-3 text-base uppercase tracking-wider font-medium transition-colors ${
                  activeLink === link.id ? "text-primary font-semibold" : "text-gray-700 hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <button className="p-2 text-gray-500 hover:text-primary transition-colors">
              <SearchIcon className="w-5 h-5" />
            </button>
            <a
              href="#"
              className="px-5 py-2 bg-primary text-white rounded-lg font-medium transition-all hover:bg-primary/90"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar

