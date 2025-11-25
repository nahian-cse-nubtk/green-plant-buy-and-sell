import { parseAppSegmentConfig } from 'next/dist/build/segment-config/app/app-segment-config'
import React from 'react'

export default async function page({params}) {
    const {id} = await params;
    console.log(id);
  return (
    <div>page</div>
  )
}
