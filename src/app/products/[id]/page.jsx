
import axios from 'axios';
import React from 'react'

export default async function page({params}) {
    const {id} = await params;
    const res = await axios.get(`http://localhost:4000/products/${id}`)
    const data =  res.data

  return (
    <div>page {data.title}</div>
  )
}
