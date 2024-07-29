import React from 'react'
import ProductImages from '../components/ProductImages'

export default function SinglePage() {
  return (
    <div className='px-4 md:px-8 lg:px-16 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      {/* img  */}
      <div className='w-full lg:w-1/2'>
        <ProductImages />
      </div>
      {/* text  */}
      <div className=''>
        description
      </div>

    </div>
  )
}
