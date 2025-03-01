"use client"

import { useState } from "react"

const categories = [
  { id: "all", name: "All Topics" },
  { id: "technology", name: "Technology" },
  { id: "business", name: "Business" },
  { id: "science", name: "Science" },
  { id: "health", name: "Health & Wellness" },
  { id: "culture", name: "Culture" },
  { id: "politics", name: "Politics" },
  { id: "environment", name: "Environment" },
]

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section className="py-8 bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-center mb-6">Browse by Category</h2>

          <div className="relative w-full overflow-x-auto pb-4">
            <div className="flex space-x-2 md:justify-center min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap
                    ${
                      activeCategory === category.id
                        ? "bg-primary text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Gradient Fade for Overflow */}
            <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden"></div>
            <div className="absolute top-0 left-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none md:hidden"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryFilter

