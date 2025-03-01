"use client"

import { useState, useRef, useCallback } from "react"
import { Clock, User, ArrowRight, ChevronRight } from "lucide-react"

// Simulated API call to get more articles
const getMoreArticles = async (page) => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        articles.map((article) => ({
          ...article,
          id: article.id + page * articles.length,
        })),
      )
    }, 1500)
  })
}

const articles = [
  {
    id: 1,
    title: "How Artificial Intelligence Will Take Over The Future: Here's What The Future Holds",
    description:
      "Artificial Intelligence (AI) is rapidly transforming the way we live, work, and interact with the world. Once confined to science fiction, AI has now become a powerful tool driving advancements across countless industries.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20From%202025-03-01%2023-44-23-EUxP6hXmNHxbrIxnqQ6pdx8UJdKEMm.png",
    author: "Dr. Sarah Chen",
    category: "Technology",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Understanding Internet Governance And Development",
    description:
      "The internet has become an indispensable part of modern life, revolutionizing the way we communicate, work, and access information. Behind its seamless functionality lies the intricate world of internet governance.",
    image: "/placeholder.svg?height=400&width=600",
    author: "Michael Roberts",
    category: "Digital",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: 3,
    title: "Paid Media Vs Earned Media: What Drives Marketing Success?",
    description:
      "The marketing landscape continues to evolve rapidly, driven by the increasing role of digital strategies that incorporate both paid and earned media approaches.",
    image: "/placeholder.svg?height=400&width=600",
    author: "James Wilson",
    category: "Marketing",
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
    <article className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">{article.category}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex items-center text-sm text-gray-600">
            <Clock className="mr-1.5 h-4 w-4" />
            {article.readTime}
          </span>
        </div>
        <h3 className="mb-2 flex-1 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
          {article.title}
        </h3>
        <p className="mb-4 text-sm text-gray-600 line-clamp-2">{article.description}</p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <User className="h-4 w-4" />
            </div>
            <span className="text-sm font-medium text-gray-700">{article.author}</span>
          </div>
          <button className="group inline-flex items-center rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-green-500">
              Read More
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
        </div>
      </div>
    </article>
  )
}

const Articles = () => {
  const [allArticles, setAllArticles] = useState(articles)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const observer = useRef()

  const lastArticleRef = useCallback(
    (node) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore()
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore],
  )

  const loadMore = async () => {
    setLoading(true)
    try {
      const newArticles = await getMoreArticles(page)
      setAllArticles((prev) => [...prev, ...newArticles])
      setPage((prev) => prev + 1)
      setHasMore(newArticles.length > 0)
    } catch (error) {
      console.error("Error loading more articles:", error)
    }
    setLoading(false)
  }

  const featuredArticles = allArticles.filter((article) => article.featured)
  const regularArticles = allArticles.filter((article) => !article.featured)

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
  

        {/* Regular Articles */}
        <div>
          <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">Latest Articles</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {regularArticles.map((article, index) => {
              if (regularArticles.length === index + 1) {
                return (
                  <div ref={lastArticleRef} key={article.id}>
                    <ArticleCard article={article} />
                  </div>
                )
              }
              return <ArticleCard key={article.id} article={article} />
            })}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="mt-8 flex justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Articles

