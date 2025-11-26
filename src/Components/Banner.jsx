import Link from 'next/link'
import React from 'react'

export default function Banner() {
  return (
  <section className="relative w-full h-[80vh] bg-linear-to-br from-green-50 to-green-200 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=60"
          alt="Green Plants"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto h-full flex flex-col justify-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-800 leading-snug drop-shadow-sm">
          Grow More,
          <span className="text-green-600"> Spend Less.</span>
        </h1>

        <p className="text-lg md:text-xl text-green-900 mt-4 max-w-2xl">
          Discover, buy, and sell beautiful indoor & outdoor plants with ease.
          Manage listings, track sales, and bring nature closer to your home.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <Link
            href="/allProducts"
            className="px-6 py-3 bg-green-700 text-white rounded-lg shadow-lg hover:bg-green-800 transition"
          >
            Explore Plants
          </Link>
          {/* <a
            href="/sell"
            className="px-6 py-3 border border-green-700 text-green-700 rounded-lg hover:bg-green-100 transition"
          >
            Sell Your Plant
          </a> */}
        </div>
      </div>
    </section>
  )
}
