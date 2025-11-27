
import axios from 'axios';
import Link from 'next/link';

import React from 'react'

export default async function page({params}) {

    const {id} = await params;
    const res = await axios.get(`https://green-world-rose.vercel.app/products/${id}`)
    const data =  res.data

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Back Button */}

        <Link href ='/allProducts'

        className="inline-flex items-center gap-2 mb-6 text-black hover:text-green-900 font-medium bg-green-400 rounded-md px-3 py-2"
      >
        ← Back
      </Link>


      {/* Image Banner */}
      <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
        <img
          src={data.image}
          alt="Plant Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border">

        {/* Product Title */}
        <h1 className="text-3xl font-bold text-gray-800">
          {data.title}
        </h1>

        {/* Meta Info */}
        <div className="mt-4 flex flex-wrap gap-5 text-gray-600 text-sm">
          <span className="px-3 py-1 bg-green-50 border border-green-200 rounded-full">
            Price: <span className="font-semibold">৳ {data.price}</span>
          </span>

        </div>

        {/* Full Description */}
        <div className="mt-6 leading-relaxed text-gray-700">
          <p>
            {data.shortDescription}
          </p>
          <p className="mt-3">
            {data.fullDescription}
          </p>
        </div>
      </div>
    </div>
  )
}
