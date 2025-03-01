"use client"

import { useState } from "react"
import { Clock, ArrowRight, ChevronRight } from "lucide-react"

const categories = ["All", "Technology", "Travel", "Family", "Education", "Lifestyle", "Business"]

const articles = [
  {
    id: 1,
    title: "Family Adventures: Fun and Educational Trips for All Ages",
    description:
      "We can't possibly stay here, I said; and as I spoke the firing reopened for a moment upon the common.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20From%202025-03-01%2023-30-24-pbPAkx0YdjepB7DEP6zINyyS07VrJE.png",
    readTime: "8 min read",
    category: "Family",
    author: "Donald Rafael",
    date: "JUL 25",
    tags: ["TRENDING", "VIDEO"],
    featured: true,
  },
  {
    id: 2,
    title: "The Digital Revolution in Modern Education",
    description: "Exploring how technology is transforming the way we learn and teach in the 21st century.",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "6 min read",
    category: "Education",
    author: "Sarah Chen",
    date: "JUL 24",
    featured: true,
  },
  {
    id: 3,
    title: "Sustainable Travel: Exploring Without Impact",
    description: "Discover how to make your travels more environmentally conscious while creating lasting memories.",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "5 min read",
    category: "Travel",
    author: "James Wilson",
    date: "JUL 23",
  },
  {
    id: 4,
    title: "Work-Life Balance in the Digital Age",
    description: "Tips and strategies for maintaining harmony between professional and personal life.",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "4 min read",
    category: "Lifestyle",
    author: "Emma Thompson",
    date: "JUL 22",
  },
  {
    id: 5,
    title: "Future of Remote Work",
    description: "How distributed teams and digital collaboration are reshaping the workplace landscape.",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "7 min read",
    category: "Business",
    author: "Michael Scott",
    date: "JUL 21",
  },
]

const ArticleCard = ({ article }) => {
  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-600">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-indigo-600">
          {article.title}
        </h3>
        <p className="mb-4 text-sm text-gray-600">{article.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-indigo-600">
            <Clock className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">{article.readTime}</span>
          </div>
          <button className="group inline-flex items-center rounded-lg bg-indigo-50 px-3 py-1.5 text-sm font-semibold text-indigo-600 transition-all hover:bg-indigo-100">
            Read Now
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  )
}

const FeaturedArticle = ({ article }) => {
  return (
    <article className="relative h-[600px] w-full overflow-hidden rounded-2xl">
      <img src={article.image || "/placeholder.svg"} alt={article.title} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="mb-4 flex items-center gap-4">
            <span className="text-sm font-medium text-white">WRITTEN BY: {article.author}</span>
            <div className="flex gap-2">
              {article.tags?.map((tag) => (
                <span key={tag} className="rounded bg-white/20 px-2 py-1 text-xs font-medium text-white">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h2 className="mb-4 font-serif text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
            {article.title}
          </h2>
          <p className="mb-6 max-w-2xl text-lg text-gray-200">{article.description}</p>
          <button className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-all hover:bg-gray-100">
            Read Article
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  )
}

const ArticleList = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  const featuredArticles = articles.filter((article) => article.featured)
  const regularArticles = articles.filter((article) => !article.featured)

  const filteredArticles =
    activeCategory === "All"
      ? regularArticles
      : regularArticles.filter((article) => article.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Category Filters */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === category ? "bg-indigo-600 text-white" : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Article Grid */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">New Articles</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="mb-16 flex justify-center">
          <button className="inline-flex items-center rounded-lg bg-indigo-600 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-indigo-700">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Featured Articles */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Featured Articles</h2>
          <div className="grid gap-8">
            {featuredArticles.map((article) => (
              <FeaturedArticle key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleList

