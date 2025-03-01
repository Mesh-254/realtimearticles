"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import {
  Clock,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Share2,
  ThumbsUp,
} from "lucide-react";

// This would come from your API/database
const article = {
  id: "123",
  title: "The Future of Artificial Intelligence in Modern Healthcare",
  slug: "future-ai-healthcare",
  excerpt:
    "Exploring how AI and machine learning are revolutionizing medical diagnosis, treatment planning, and patient care in the modern healthcare system.",
  content: `
    <p>Artificial Intelligence (AI) is rapidly transforming healthcare delivery and patient care. From diagnostic assistance to treatment planning, AI-powered solutions are becoming increasingly integral to modern medical practices.</p>

    <h2>Revolutionary Impact on Diagnosis</h2>
    <p>Machine learning algorithms can now analyze medical images with remarkable accuracy, often matching or exceeding human capabilities in detecting various conditions.</p>

    <h2>Personalized Treatment Plans</h2>
    <p>AI systems can process vast amounts of patient data to suggest personalized treatment approaches, considering individual genetic profiles, medical history, and lifestyle factors.</p>

    <h2>Future Prospects</h2>
    <p>As AI technology continues to evolve, we can expect even more sophisticated applications in healthcare, potentially revolutionizing how we approach disease prevention and treatment.</p>
  `,
  date_published: "2025-03-02T10:00:00Z",
  author: {
    id: "456",
    name: "Dr. Sarah Chen",
    image: "/placeholder.svg?height=400&width=400",
    role: "Healthcare Technology Analyst",
  },
  category: {
    id: "789",
    name: "Technology",
    slug: "technology",
  },
  image: "/placeholder.svg?height=600&width=1200",
  tags: [
    { id: "1", name: "AI", slug: "ai" },
    { id: "2", name: "Healthcare", slug: "healthcare" },
    { id: "3", name: "Technology", slug: "technology" },
  ],
  readTime: "8 min read",
};

const categories = [
  { id: "1", name: "Technology", count: 12, slug: "technology" },
  { id: "2", name: "Healthcare", count: 8, slug: "healthcare" },
  { id: "3", name: "AI & ML", count: 15, slug: "ai-ml" },
  { id: "4", name: "Research", count: 6, slug: "research" },
];

const recentArticles = [
  {
    id: "1",
    title: "Understanding Deep Learning Applications",
    slug: "understanding-deep-learning",
    date: "2025-03-01",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    title: "The Rise of Telemedicine",
    slug: "rise-of-telemedicine",
    date: "2025-02-28",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    title: "AI Ethics in Healthcare",
    slug: "ai-ethics-healthcare",
    date: "2025-02-27",
    image: "/placeholder.svg?height=200&width=300",
  },
];

const ArticleDetail = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(42);
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Article Header */}
      <header className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
          <div className="container mx-auto h-full max-w-6xl px-4">
            <div className="flex h-full flex-col justify-end pb-12">
              <Link
                to={`/categories/${article.category.slug}`}
                className="mb-4 inline-flex items-center rounded-full bg-blue-500/20 px-4 py-1 text-sm font-medium text-blue-100 backdrop-blur-sm transition-colors hover:bg-blue-500/30"
              >
                {article.category.name}
              </Link>
              <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                {article.title}
              </h1>
              <p className="mb-6 max-w-3xl text-lg text-gray-300">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white">
                    <img
                      src={article.author.image || "/placeholder.svg"}
                      alt={article.author.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-white">
                      {article.author.name}
                    </div>
                    <div className="text-sm text-gray-300">
                      {article.author.role}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Calendar className="h-4 w-4" />
                  {format(new Date(article.date_published), "MMMM d, yyyy")}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          {/* Main Content */}
          <main>
            {/* Article Actions */}
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    setHasLiked(!hasLiked);
                    setLikes(hasLiked ? likes - 1 : likes + 1);
                  }}
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors
                    ${
                      hasLiked
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                >
                  <ThumbsUp className="h-4 w-4" />
                  {likes}
                </button>
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors
                    ${
                      isBookmarked
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                >
                  <Bookmark className="h-4 w-4" />
                  {isBookmarked ? "Saved" : "Save"}
                </button>
                <button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
              </div>
              <div className="flex gap-2">
                {article.tags.map((tag) => (
                  <Link
                    key={tag.id}
                    to={`/tags/${tag.slug}`}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200"
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </article>

            {/* Navigation */}
            <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-8">
              <button className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100">
                <ChevronLeft className="h-4 w-4" />
                Previous Article
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100">
                Next Article
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Categories */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/categories/${category.slug}`}
                    className="flex items-center justify-between rounded-lg p-2 text-sm transition-colors hover:bg-gray-100"
                  >
                    <span>{category.name}</span>
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                      {category.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Articles */}
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold">Recent Articles</h2>
              <div className="space-y-4">
                {recentArticles.map((article) => (
                  <Link
                    key={article.id}
                    to={`/articles/${article.slug}`}
                    className="group flex gap-4"
                  >
                    <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="line-clamp-2 text-sm font-medium group-hover:text-blue-600">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {format(new Date(article.date), "MMMM d, yyyy")}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
