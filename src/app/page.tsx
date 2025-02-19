'use client'

import Slider from "@/app/components/Slider"
import ProductList from "./components/ProductList"
import CategoryList from "./components/CategoryList"
import { useContext, useEffect } from "react"
import { WixClientContext } from "@/context/wixContext"

const HomePage = () => {

  const wixClient = useContext(WixClientContext);

  useEffect(()=> {
    const getProducts = async () => {
      const res =await wixClient.products.queryProducts().find();
      console.log('res',res);
      
    };

    getProducts();
  },[wixClient])



  return (
    <div className=''>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>

      <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl mb-8 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">Categories</h1>

      <CategoryList />
      </div>

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>

      <ProductList />
      </div>
    </div>
  )
}

export default HomePage