import React from 'react'

export default function CustomerTestimonial() {
  return (
    <section className="py-16 bg-green-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
      What Our Customers Say
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      Real experiences from plant lovers who trust our platform for buying,
      selling, and growing their green world.
    </p>

    {/* Testimonial Grid */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-green-100">
        <div className="h-16 w-16 mx-auto mb-4 rounded-full overflow-hidden">
          <img
            src="https://i.pravatar.cc/150?img=32"
            alt="Customer"
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-lg font-semibold text-green-900">Afsana Rahman</h3>
        <p className="text-sm text-gray-500 mb-3">Dhaka, Bangladesh</p>
        <p className="text-gray-700">
          “Best place for plant lovers! I found rare indoor plants at amazing
          prices. Delivery was fast and plants were healthy. Highly recommended!”
        </p>
        <div className="mt-4 flex justify-center text-yellow-400 text-xl">
          ★★★★★
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-green-100">
        <div className="h-16 w-16 mx-auto mb-4 rounded-full overflow-hidden">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Customer"
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-lg font-semibold text-green-900">Imran Hossain</h3>
        <p className="text-sm text-gray-500 mb-3">Chattogram, Bangladesh</p>
        <p className="text-gray-700">
          “Selling my nursery plants has never been easier. This platform helped
          me reach more customers without any hassle!”
        </p>
        <div className="mt-4 flex justify-center text-yellow-400 text-xl">
          ★★★★★
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-green-100">
        <div className="h-16 w-16 mx-auto mb-4 rounded-full overflow-hidden">
          <img
            src="https://i.pravatar.cc/150?img=56"
            alt="Customer"
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-lg font-semibold text-green-900">Nusrat Jahan</h3>
        <p className="text-sm text-gray-500 mb-3">Sylhet, Bangladesh</p>
        <p className="text-gray-700">
          “Beautiful UI, easy to navigate, and amazing collection! I absolutely
          love how simple it is to discover new plants.”
        </p>
        <div className="mt-4 flex justify-center text-yellow-400 text-xl">
          ★★★★★
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
