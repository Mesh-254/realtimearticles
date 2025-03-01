"use client"

import { useEffect, useState } from "react"
import { ArrowRightIcon } from "./Icons"

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-blue-50 opacity-70"></div>
      <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-10"></div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? "slide-in" : "opacity-0"}`}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
              Unleashing the Power of Words
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-dark">
              Discover Insights That <span className="text-primary">Transform</span> Your Perspective
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Explore thought-provoking articles from leading writers and thinkers. Stay informed, inspired, and engaged
              with content that matters.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#featured" className="btn-primary flex items-center gap-2">
                Explore Articles
                <ArrowRightIcon className="w-4 h-4" />
              </a>
              <a href="#newsletter" className="btn-secondary">
                Subscribe Now
              </a>
            </div>
          </div>

          <div className={`relative ${isVisible ? "fade-in" : "opacity-0"}`} style={{ transitionDelay: "0.3s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20From%202025-03-01%2011-22-02-dTscwqCModDPGaMvwVvrGbLg3Pn3At.png"
                alt="Realtime Articles Preview"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="text-xs font-medium bg-primary/80 px-3 py-1 rounded-full">Featured</span>
                <h3 className="text-xl font-bold mt-2">The Future of Digital Content</h3>
                <p className="text-sm text-gray-200">
                  Exploring how AI and human creativity will shape tomorrow's media landscape
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg rotate-3 hidden md:block">
              <span className="text-sm font-medium">10k+ Articles</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg -rotate-3 hidden md:block">
              <span className="text-sm font-medium">500+ Writers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

