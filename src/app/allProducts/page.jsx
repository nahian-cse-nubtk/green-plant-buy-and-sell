'use client'
import ProductCard from "@/Components/ProductCard";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function page() {

    const [products, setProducts] =useState([])
    const [productsData, setProductsData] =useState([])

        useEffect(()=>{
            axios.get('http://localhost:4000/products')
            .then(res=>{
                setProducts(res.data)
                setProductsData(res.data)
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

  return (
    <div>
      <h1 className="text-4xl my-3 font-bold text-center">
        Explore All Plants
      </h1>
      <p className="text-xl text-center mb-3">
        Discover our complete collection of fresh, healthy plants ready to bring
        natural beauty into your home, office, or garden.
      </p>
      <div className="my-7 flex justify-end mr-3">
        <label className="input">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 m-5">
        {
            products.map(product=><ProductCard key={product._id} product={product} />)
        }
      </div>
    </div>
  );
}
