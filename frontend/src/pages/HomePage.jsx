import React from 'react'
import { Offers } from '../components/Offers'
import { Banner } from '../components/Banner'
import { Deals } from '../components/Deals'
import { ProductCategory } from '../components/ProductCategory'
import { FeaturedProduct } from '../components/FeaturedProduct'

export const HomePage = () => {
  return (
    
    <>
      <Banner/>
      <Deals/>
      <ProductCategory/>
      <FeaturedProduct/>
    </>
  )
}
