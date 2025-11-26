"use client"

import Link from "next/link"

export default function ProductCard({product}) {

  return (
    <div className="  w-full bg-green-100 rounded-2xl shadow-md overflow-hidden  hover:shadow-lg transition">

  <div className="h-48 p-2 w-full bg-green-100 flex items-center justify-center">
    <img
      src={product.image}
      alt="Plant Image"
      className="h-full w-full object-cover rounded-xl"
    />
  </div>


  <div className="p-5 space-y-2">

    <h2 className="text-xl font-semibold text-green-800">{product.title}</h2>


    <p className="text-sm text-gray-600 line-clamp-2">
      {product.shortDescription}
      </p>


    <div className="flex items-center justify-between mt-3">
      <span className="text-lg font-bold text-green-700">${product.price}</span>

      <Link href={`/products/${product._id}`}
        className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition"
      >
        Details
      </Link>
    </div>
  </div>
</div>
  )
}
