
import Link from 'next/link'
import React from 'react'

export default function FeaturedCategories() {

  return (
    <section className="py-14 bg-green-50">
  <div className="max-w-6xl mx-auto px-4">
    {/* Section Header */}
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-green-800">Featured Categories</h2>
      <p className="text-gray-600 mt-2">
        Explore our most popular plant collections curated for you.
      </p>
    </div>

    {/* Category Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Category Item */}
      <div className="group bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">
        <div className="h-40 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=800&q=60"
            alt="Indoor Plants"
            className="h-full w-full object-cover group-hover:scale-105 transition"
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold text-green-700">Indoor Plants</h3>
          <p className="text-gray-600 mt-1 text-sm">
            Perfect for home & office. Fresh greenery for your space.
          </p>
          <Link href='/allProducts'>
            <button className="mt-4 btn bg-green-700  text-white font-medium hover:bg-green-600">
            Explore Plants
          </button>
          </Link>
        </div>
      </div>

      {/* Category Item */}
      <div className="group bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">
        <div className="h-40 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60"
            alt="Outdoor Plants"
            className="h-full w-full object-cover group-hover:scale-105 transition"
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold text-green-700">Outdoor Plants</h3>
          <p className="text-gray-600 mt-1 text-sm">
            Hardy, sun-loving plants suitable for outdoor gardens.
          </p>
        <Link href='/allProducts'>
            <button className="mt-4 btn bg-green-700  text-white font-medium hover:bg-green-600">
            Explore Plants
          </button>
        </Link>
        </div>
      </div>

      {/* Category Item */}
      <div className="group bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">
        <div className="h-40 w-full overflow-hidden">
          <img
            src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/best-succulents-for-your-garden-2023-section-2.jpg"
            alt="Succulents"
            className="h-full w-full object-cover group-hover:scale-105 transition"
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold text-green-700">Succulents</h3>
          <p className="text-gray-600 mt-1 text-sm">
            Low-maintenance plants ideal for beginners & busy lifestyles.
          </p>
          <Link href='/allProducts'>
          <button className="mt-4 btn bg-green-700  text-white font-medium hover:bg-green-600">
            Explore Plants
          </button>

          </Link>
        </div>
      </div>

    </div>
  </div>
</section>

  )
}
