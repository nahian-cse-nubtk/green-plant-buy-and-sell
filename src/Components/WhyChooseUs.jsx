import React from 'react'

export default function WhyChooseUs() {
  return (
    <section className="py-10 bg-green-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-green-700 mb-4">
      Why Choose Us?
    </h2>
    <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
      We bring nature closer to your home with healthy plants,
      trusted service, and eco-friendly practices.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Quality Plants */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          🌱
        </div>
        <h3 className="text-xl font-semibold text-green-700 mb-2">
          Premium Quality Plants
        </h3>
        <p className="text-gray-600">
          Every plant is carefully selected and nurtured for maximum freshness and growth.
        </p>
      </div>

      {/* Affordable Price */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          💰
        </div>
        <h3 className="text-xl font-semibold text-green-700 mb-2">
          Affordable Pricing
        </h3>
        <p className="text-gray-600">
          Get healthy plants at a price that fits every budget without compromising quality.
        </p>
      </div>

      {/* Delivery & Support */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          🚚
        </div>
        <h3 className="text-xl font-semibold text-green-700 mb-2">
          Fast Delivery & Support
        </h3>
        <p className="text-gray-600">
          Safe and quick delivery with friendly customer support whenever you need help.
        </p>
      </div>

    </div>
  </div>
</section>
  )
}
