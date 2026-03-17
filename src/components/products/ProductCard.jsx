import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../ui/ProductSkeleton';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';

export default function ProductCard({ filteredProducts }) {
  const [loadedImages, setLoadedImages] = useState({});
  const dispatch = useDispatch()


  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (!filteredProducts) return <Loading />;
  

  return (
    <>
      {filteredProducts.map((product) => {
        const isLoaded = loadedImages[product.id];


        return (
          <Link to={`/ProductDetail/${product.id}`} key={product.id}>
            <div  className="bg-white max-w-xs rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Image */}
              <div className="relative w-full h-56 bg-gray-100">
                {!isLoaded && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-t-2xl"></div>
                )}
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className={`w-full h-56 object-cover rounded-t-2xl ${
                    !isLoaded ? 'hidden' : 'block'
                  }`}
                  onLoad={() => handleImageLoad(product.id)}
                />
              </div>

              {/* Product Info */}
              {isLoaded && (
                <div className="p-4 flex flex-col gap-2">
                  {/* Title */}
                  <h2 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h2>

                  {/* Price + Discount */}
                  <div className="flex items-center gap-2">
                    <p className="text-green-600 font-bold text-lg">${product.price}</p>
                    <p className="text-red-500 text-sm line-through">
                      {product.discountPercentage}% off
                    </p>
                  </div>

                  {/* Rating + Category */}
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-yellow-500">⭐ {product.rating}</p>
                    <p className="text-gray-500 text-sm capitalize">{product.category}</p>
                  </div>

                  {/* Add to Cart */}
                  <button 
                    onClick={(e) => {
                      e.preventDefault()
                      handleAddToCart(product);
                    }}
                    className="mt-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition duration-300">
                    Add to Cart
                  </button>
                </div>
              )}
            </div>
          </Link>
        );
      })}
    </>
  );
}
