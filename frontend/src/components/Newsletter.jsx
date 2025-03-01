"use client"

import { useState } from "react"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      // In a real app, you would send this to your API
      console.log("Subscribing email:", email)
      setIsSubmitted(true)
      setEmail("")

      // Reset the success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }
  }

  return (
    <section id="newsletter" className="py-16 bg-gradient-to-r from-gray-800 to-dark-900">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-50">Stay Updated with Our Newsletter</h2>
          <p className="text-slate-1200 mb-8 font-medium">
            Get the latest articles, insights, and updates delivered directly to your inbox. Join our community of
            readers and never miss out on important content.
          </p>

          <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-slate-700">
            {isSubmitted ? (
              <div className="bg-emerald-600 rounded-lg p-4 text-slate-50 shadow-md">
                <p className="font-semibold text-lg">Thank you for subscribing!</p>
                <p className="mt-1 text-slate-100">We've sent a confirmation email to your inbox.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-slate-50 font-semibold rounded-lg transition-all hover:bg-blue-700 hover:shadow-lg"
                >
                  Subscribe Now
                </button>
              </form>
            )}

            <p className="text-sm mt-4 text-slate-300">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-full border border-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium text-slate-200">Well Curated Articles</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-full border border-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium text-slate-200">Exclusive Content</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-full border border-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium text-slate-200">Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter

