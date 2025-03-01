"use client";

import { useState, useEffect } from "react";
import { ClockIcon, UserIcon, ArrowRightIcon } from "./Icons";

const articles = [
  {
    id: 1,
    title: "How Artificial Intelligence Will Transform The Future",
    excerpt:
      "AI is rapidly transforming the way we live, work, and interact with the world. Once confined to science fiction, it has become a powerful tool driving advancements across countless industries.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20From%202025-03-01%2011-22-02-dTscwqCModDPGaMvwVvrGbLg3Pn3At.png",
    category: "Technology",
    author: "Alex Johnson",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Understanding Internet Governance And Development",
    excerpt:
      "The internet has become an indispensable part of modern life, revolutionizing the way we communicate, work, and access information. Behind its seamless functionality lies the intricate world of internet governance.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Technology",
    author: "Maria Chen",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: 3,
    title: "Paid Media Vs Earned Media: What Drives Marketing Success?",
    excerpt:
      "The marketing landscape continues to evolve rapidly, driven by the increasing role of digital strategies that incorporate both paid and earned media.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Business",
    author: "James Wilson",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Climate Change: The Defining Crisis of Our Time",
    excerpt:
      "As global temperatures continue to rise, the effects of climate change are becoming increasingly evident and urgent. From extreme weather events to rising sea levels, the impacts are far-reaching.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Environment",
    author: "Sarah Ahmed",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    title: "The Rise of Remote Work and Digital Nomadism",
    excerpt:
      "The traditional office-based work model is rapidly evolving as more companies embrace remote work policies and employees seek greater flexibility in their professional lives.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Business",
    author: "David Park",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Advances in Renewable Energy Technology",
    excerpt:
      "Recent breakthroughs in solar, wind, and battery storage technologies are accelerating the global transition to clean energy and challenging the dominance of fossil fuels.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Science",
    author: "Elena Rodriguez",
    readTime: "6 min read",
    featured: false,
  },
];

const FeaturedArticles = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const featuredArticles = articles.filter((article) => article.featured);
  const regularArticles = articles.filter((article) => !article.featured);

  return (
    <section id="featured" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Articles
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and thought-provoking content, carefully
            curated for our readers
          </p>
        </div>

        {/* Featured Articles (Larger Cards) */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredArticles.map((article, index) => (
            <article
              key={article.id}
              className={`card group hover:translate-y-[-5px] ${
                isLoaded ? "fade-in" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <UserIcon className="w-4 h-4 mr-1" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Regular Articles (Smaller Cards) */}
        <div className="grid md:grid-cols-3 gap-6">
          {regularArticles.map((article, index) => (
            <article
              key={article.id}
              className={`card group hover:translate-y-[-5px] ${
                isLoaded ? "fade-in" : "opacity-0"
              }`}
              style={{
                transitionDelay: `${(index + featuredArticles.length) * 0.1}s`,
              }}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/80 text-white text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <UserIcon className="w-3 h-3 mr-1" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="w-3 h-3 mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn-primary inline-flex items-center gap-2">
            View All Articles
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
