import React, { useContext, useEffect, useState } from 'react';
import Hero from '../components/common/hero';
import ProductCard from '../components/products/ProductCard';
import ProductFilter from '../components/products/ProductFilter';
import { SearchContext } from '../context/SearchContext';
import { useLoaderData } from 'react-router-dom';
import { CategoryContext } from '../context/CategoryContext';
import NoProducts from '../components/ui/NoProducts';
import ProductSkeleton from '../components/ui/ProductSkeleton';

export default function Home() {
  const { search } = useContext(SearchContext);
  const { category } = useContext(CategoryContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const data = useLoaderData();

  useEffect(() => {
    setLoading(true);

    let tempProducts = data.products;

    if (category) tempProducts = tempProducts.filter((p) => p.category === category);
    if (search)
      tempProducts = tempProducts.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase()),
      );

    // small delay ensures skeleton shows even on fast loads
    setTimeout(() => {
      setFilteredProducts(tempProducts);
      setLoading(false);
    }, 300);
  }, [category, search, data.products]);

  return (
    <>
      <Hero />
      <div className="py-4">
        <ProductFilter />
      </div>

      {loading ? (
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
        </div>
      ) : filteredProducts.length === 0 ? (
        <NoProducts />
      ) : (
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
          <ProductCard filteredProducts={filteredProducts} />
        </div>
      )}
    </>
  );
}
