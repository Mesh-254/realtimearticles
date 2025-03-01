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
    <section id="newsletter" className="py-16 bg-gradient-to-r from-primary/90 to-accent/90 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Our Newsletter</h2>
          <p className="text-white/80 mb-8">
            Get the latest articles, insights, and updates delivered directly to your inbox. Join our community of
            readers and never miss out on important content.
          </p>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
            {isSubmitted ? (
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-white">
                <p className="font-medium">Thank you for subscribing!</p>
                <p className="text-sm mt-1">We've sent a confirmation email to your inbox.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-primary font-medium rounded-lg transition-all hover:bg-gray-100 hover:shadow-lg"
                >
                  Subscribe Now
                </button>
              </form>
            )}

            <p className="text-xs mt-4 text-white/70">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Weekly Curated Articles</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Exclusive Content</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter

