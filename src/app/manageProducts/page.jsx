"use client"

import AuthContext from '@/Provider/AuthContext'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { MdOutlinePreview } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function page() {
    const {user} =useContext(AuthContext)
    const [products, setProducts] =useState([])
    useEffect(()=>{
        axios.get(`https://green-world-rose.vercel.app/products?email=${user?.email}`)
        .then(res=>{
            setProducts(res.data)
        })
    },[user?.email])
    const handleDelete =(id)=>{
        axios.delete(`https://green-world-rose.vercel.app/products/${id}`)
        .then(res=>{
            if(res.data.deletedCount){
                const filteredData = products.filter(product=>product._id!==id)
                setProducts(filteredData)
                toast('Delete Successful')
            }
        })

    }

  return (
    <div className="overflow-x-auto bg-green-50">
        <h1 className='text-3xl font-bold py-5 text-center'>Your Products</h1>

  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Description</th>
        <th>Seller Name</th>
        <th>Price</th>
        <th>Phone No</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      { products&&products.map((product,i)=><tr key={product._id}>
        <th>{i+1}</th>
        <td>{product.title}</td>
        <td>{product.shortDescription}</td>
        <td>{product.sellerName}</td>
        <td>{product.price}</td>
        <td>{product.sellerPhoneNo}</td>
        <td>
            <div className='flex '>
                <Link href={`/products/${product._id}`}><button className="btn bg-green-100 mr-3"><MdOutlinePreview size={22} /></button></Link>
                <button onClick={()=>handleDelete(product._id)} className="btn bg-green-100"><FaRegTrashAlt size={22} /></button>
            </div>
        </td>
      </tr>)
      }

    </tbody>
  </table>
</div>
  )
}
