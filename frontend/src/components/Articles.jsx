"use client"

import { useState, useEffect } from "react"
import { Clock, User, ArrowRight } from "lucide-react"

const articles = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence in Modern Healthcare",
    description:
      "Exploring how AI and machine learning are revolutionizing medical diagnosis, treatment planning, and patient care in the modern healthcare system.",
    image: "/placeholder.svg?height=600&width=1200",
    author: "Dr. Sarah Chen",
    category: "Technology",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Sustainable Architecture: Building for Tomorrow",
    description:
      "Discover innovative approaches to eco-friendly building design and how sustainable architecture is shaping our cities.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Michael Roberts",
    category: "Architecture",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "The Rise of Digital Currencies",
    description:
      "Understanding the impact of cryptocurrencies and blockchain technology on traditional financial systems.",
    image: "/placeholder.svg?height=400&width=600",
    author: "James Wilson",
    category: "Finance",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "Mindfulness in the Digital Age",
    description:
      "Exploring practices and techniques for maintaining mental wellness in an increasingly connected world.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Emma Thompson",
    category: "Wellness",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "The Evolution of Remote Work",
    description: "How distributed teams and digital collaboration are reshaping the modern workplace landscape.",
    image: "/placeholder.svg?height=400&width=600",
    author: "David Park",
    category: "Business",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "Culinary Adventures: Global Flavors at Home",
    description: "Learn how to bring international cuisine into your kitchen with these expert tips and recipes.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Chef Maria Garcia",
    category: "Cooking",
    readTime: "6 min read",
  },
]

const ArticleCard = ({ article }) => {
  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center gap-4">
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500">
            {article.category}
          </span>
          <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Clock className="mr-1.5 h-4 w-4" />
            {article.readTime}
          </span>
        </div>
        <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-emerald-500 dark:text-white dark:group-hover:text-emerald-400">
          {article.title}
        </h3>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">{article.description}</p>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
            <User className="mr-1.5 h-4 w-4" />
            {article.author}
          </span>
          <button className="group inline-flex items-center rounded-lg bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-500 transition-all hover:bg-emerald-500 hover:text-white">
            Read More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  )
}

const Articles = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const featuredArticle = articles.find((article) => article.featured)
  const regularArticles = articles.filter((article) => !article.featured)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="min-h-screen bg-white-50 px-4 py-12 dark:bg-gray-900 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
            {/* Regular Articles */}
        <div className="mt-12">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Articles</h2>
          <div className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ${isLoaded ? "fade-in" : "opacity-0"}`}>
            {regularArticles.map((article, index) => (
              <ArticleCard key={article.id} article={article} style={{ animationDelay: `${index * 0.1}s` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Articles;

