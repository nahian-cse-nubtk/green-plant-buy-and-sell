"use client"
import React, { useContext } from 'react'

import AuthContext from '@/Provider/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function page() {
  const {user} = useContext(AuthContext)
  const handleAddPlant =(e)=>{
    e.preventDefault();
    const title = e.target.title.value;
    const shortDescription =e.target.shortDescription.value;
    const fullDescription = e.target.fullDescription.value;
    const price = e.target.price.value;
    const image = e.target.image.value;
    const sellerName = e.target.sellerName.value;
    const sellerEmail = e.target.sellerEmail.value;
    const sellerPhoneNo = e.target.sellerPhoneNo.value;
    const productInfo ={
      title,shortDescription,fullDescription,price,image,sellerName,
      sellerEmail,sellerPhoneNo
    }
    axios.post('http://localhost:4000/products',productInfo)
    .then(res=>{
      if(res.data.insertedId){
        toast('Product Add Successful')
        e.target.reset()
      }
    })


  }

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-green-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-3xl p-8 border border-green-200">

        {/* Header */}
        <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
          🌿 Add New Plant
        </h2>

        <form onSubmit={handleAddPlant} className="space-y-6">

          {/* Title */}
          <div>
            <label className="block font-semibold text-green-700 mb-1">
              Title
            </label>
            <input
              type="text"
              required
              name='title'
              placeholder="e.g., Money Plant"
              className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 focus:outline-none shadow-sm"
            />
          </div>

          {/* Short Description */}
          <div>
            <label className="block font-semibold text-green-700 mb-1">
              Short Description
            </label>
            <input
              type="text"
              name='shortDescription'
              required
              placeholder="Very fast-growing indoor vine..."
              className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 focus:outline-none shadow-sm"
            />
          </div>

          {/* Full Description */}
          <div>
            <label className="block font-semibold text-green-700 mb-1">
              Full Description
            </label>
            <textarea
              rows="5"
              required
              name='fullDescription'
              placeholder="Write a detailed description about the plant, care instructions, soil type, watering frequency, etc..."
              className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 focus:outline-none shadow-sm"
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label className="block font-semibold text-green-700 mb-1">
              Price ($)
            </label>
            <input
              type="number"
              required
              name='price'
              placeholder="e.g., 350"
              className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 focus:outline-none shadow-sm"
            />
          </div>

          {/* Optional Image URL */}
          <div>
            <label className="block font-semibold text-green-700 mb-1">
              Plant Image URL
            </label>
            <input
              type="text"
              name='image'
              required
              placeholder="https://example.com/plant.jpg"
              className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 focus:outline-none shadow-sm"
            />
          </div>
          <div>
            <label className="block font-semibold text-green-700 mb-1">
              Seller Name
            </label>
            <input
              type="text"
              name='sellerName'
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 focus:outline-none shadow-sm"
            />
          </div>
          <div>
            <label className="block font-semibold text-green-700 mb-1">
              Email
            </label>
            <input
              type="text"
              name='sellerEmail'
              readOnly
              defaultValue={user?.email}
              className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 focus:outline-none shadow-sm"
            />
          </div>
          <div>
            <label className="block font-semibold text-green-700 mb-1">
              Your Phone No
            </label>
            <input
              type="number"
              name='sellerPhoneNo'
              required

              className="w-full px-4 py-3 rounded-xl border border-green-300 focus:ring-2 focus:ring-green-500 focus:outline-none shadow-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-green-600 text-white font-semibold rounded-xl shadow-md hover:bg-green-700 transition-all"
          >
            Save Plant
          </button>
        </form>
      </div>
    </div>
  )
}
