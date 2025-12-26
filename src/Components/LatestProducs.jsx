import axios from 'axios'
import React from 'react'
import ProductCard from './ProductCard';

export default async function LatestProducs() {
        const res = await axios.get('https://green-world-rose.vercel.app/latestProducts')
        const products =res.data;
  return (
   <section className=" bg-green-50">
  <div className="max-w-6xl mx-auto px-4">
    {/* Section Header */}
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-green-800">Latest Products</h2>
      <p className="text-gray-600 mt-2">
        Explore our most popular latest products.
      </p>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
     {
        products.map(product=><ProductCard key={product._id} product={product}></ProductCard>)
     }

    </div>
    </div>
    </section>
  )
}
