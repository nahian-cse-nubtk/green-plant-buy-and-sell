'use client'
import Loading from "@/Components/Loading";
import ProductCard from "@/Components/ProductCard";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Page() {

    const [products, setProducts] =useState([])
    const [productsData, setProductsData] =useState([])
    const [loading, setLoading] = useState(true)

        useEffect(()=>{
            axios.get('https://green-world-rose.vercel.app/products')
            .then(res=>{
                setProducts(res.data)
                setProductsData(res.data)
                setLoading(false)
            })
        },[])

        const handleSearch =(e)=>{
            const searchValue = e.target.value;
            const filteredData = productsData.filter(product=>product.title.toLowerCase().includes(searchValue.toLowerCase()))
            if(filteredData){
                setProducts(filteredData)
            }
            else{
                setProducts(productsData)
            }
        }
        if(loading){
          return <Loading/>
        }

  return (
    <div className="bg-green-50">
      <h1 className="text-4xl pt-10 pb-3 font-bold text-center ">
        Explore All Plants
      </h1>
      <p className="text-center mb-3">
        Discover our complete collection of fresh, healthy plants ready to bring <br></br>
        natural beauty into your home, office, or garden.
      </p>
      <div className="my-7 flex justify-center ">
        <label className="input border-green-800 border-2">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input onChange={handleSearch} name="searchValue" type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 p-5">
        {
            products.map(product=><ProductCard key={product._id} product={product} />)
        }
      </div>
    </div>
  );
}
