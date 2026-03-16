import React from 'react'
import Hero from '../components/common/hero'
import ProductCard from '../components/products/ProductCard'
import Filter from '../components/ui/Filter';

export default function Home() {
  return (
    <>
      <Hero />
      <div className=" py-4">
        <Filter />
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 ">
        <ProductCard />
      </div>
    </>
  );
}
