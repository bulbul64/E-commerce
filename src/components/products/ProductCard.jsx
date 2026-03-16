import React from 'react';
import { useLoaderData } from 'react-router-dom';

export default function ProductCard() {
  const data = useLoaderData();
  const products = data.products;

  return (
    <>
      {products.map((product) => (
        <div className="bg-[##FFF3DB] max-w-xs shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="bg-black/10">
            <img src={product.thumbnail} alt="" />
          </div>
          <div className=" bg-white    ">
            <div className="p-4">
              {/* Product Title */}
              <h2 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h2>

              {/* Price and Discount */}
              <div className="flex items-center mt-2 space-x-2">
                <p className="text-green-600 font-bold">${product.price}</p>
                <p className="text-red-500 text-sm line-through">
                  {product.discountPercentage}% off
                </p>
              </div>

              {/* Rating */}
              <p className="mt-2 text-yellow-500">⭐ {product.rating}</p>

              {/* Category */}
              <p className="mt-1 text-gray-500 text-sm capitalize">{product.category}</p>
            </div>
            <button className="bg-[#FF7B64] w-full px-4 py-2 text-white"> Add to Cart</button>
          </div>
        </div>
      ))}
    </>
  );
}

// {
//   "id": 1,
//   "title": "Essence Mascara Lash Princess",
//   "category": "beauty",
//   "price": 9.99,
//   "discountPercentage": 10.48,
//   "rating": 2.56,
//   "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
//   "images": [
//     "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
//   ]
// }
