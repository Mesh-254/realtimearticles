"use client"

import { useState, useEffect } from "react"

const authors = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "Senior Technology Writer",
    bio: "Award-winning journalist covering emerging technologies and their impact on society. Previously at TechCrunch and Wired.",
    avatar: "/placeholder.svg?height=200&width=200",
    articles: 47,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Analyst",
    bio: "Financial expert with 15+ years of experience in market analysis and economic forecasting. Regular contributor to Bloomberg and Forbes.",
    avatar: "/placeholder.svg?height=200&width=200",
    articles: 36,
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    role: "Environmental Journalist",
    bio: "Passionate environmental advocate and science communicator focusing on climate change solutions and sustainability practices.",
    avatar: "/placeholder.svg?height=200&width=200",
    articles: 29,
  },
]

const AuthorSpotlight = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("author-spotlight")
      if (element) {
        const position = element.getBoundingClientRect()
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="author-spotlight" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Authors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Talented writers and experts who bring you insightful, thought-provoking content
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {authors.map((author, index) => (
            <div
              key={author.id}
              className={`card-glass p-6 flex flex-col items-center text-center ${isVisible ? "fade-in" : "opacity-0"}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary p-1">
                <img
                  src={author.avatar || "/placeholder.svg"}
                  alt={author.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{author.name}</h3>
              <p className="text-primary font-medium text-sm mb-3">{author.role}</p>
              <p className="text-gray-600 text-sm mb-4">{author.bio}</p>
              <div className="mt-auto pt-4 border-t border-gray-100 w-full">
                <span className="text-sm text-gray-500">{author.articles} Articles Published</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="btn-secondary">
            View All Authors
          </a>
        </div>
      </div>
    </section>
  )
}

export default AuthorSpotlight

