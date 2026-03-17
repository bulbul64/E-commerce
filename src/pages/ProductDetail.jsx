import React from 'react';
import { useLoaderData, useNavigate, Link } from 'react-router-dom';

export default function ProductDetail() {
  const product = useLoaderData();
  const navigate = useNavigate();
 console.log(product)
  return (
    <div className=" bg-gray-50 py-10 px-5">
      {/* Breadcrumb + Back Button */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <button
            onClick={() => navigate(-1)}
            className="hover:text-orange-500 font-semibold flex items-center gap-1"
          >
            ← Back
          </button>
          <span>/</span>
          <Link to="/" className="hover:text-orange-500">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-700">{product.category}</span>
          <span>/</span>
          <span className="font-semibold text-gray-800">{product.title}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col lg:flex-row gap-8">
        {/* Left: Product Image */}
        <div className="flex-1 flex flex-col items-center">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full max-w-md rounded-2xl object-cover shadow-md"
          />
          <div className="flex gap-2 mt-4">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className="w-20 h-20 object-cover rounded-lg border hover:border-orange-400 cursor-pointer transition"
              />
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>

          <div className="flex items-center gap-4">
            <p className="text-2xl font-semibold text-green-600">${product.price}</p>
            <p className="text-red-500 line-through text-lg">{product.discountPercentage}% off</p>
          </div>

          <div className="flex items-center gap-2 text-yellow-500">
            <span>⭐ {product.rating}</span>
            <span className="text-gray-400 text-sm">({product.reviews.length} reviews)</span>
          </div>

          <p className="text-gray-600 mt-4">{product.description}</p>

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300">
            Add to Cart
          </button>

          {/* Meta Info */}
          <div className="mt-6 text-gray-500 text-sm space-y-1">
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Brand:</strong> {product.brand}
            </p>
            <p>
              <strong>Stock:</strong> {product.stock} items
            </p>
            <p>
              <strong>Availability:</strong> {product.availabilityStatus}
            </p>
            <p>
              <strong>SKU:</strong> {product.sku}
            </p>
            <p>
              <strong>Weight:</strong> {product.weight}g
            </p>
            <p>
              <strong>Dimensions:</strong> {product.dimensions.width} x {product.dimensions.height}{' '}
              x {product.dimensions.depth} mm
            </p>
            <p>
              <strong>Shipping:</strong> {product.shippingInformation}
            </p>
            <p>
              <strong>Warranty:</strong> {product.warrantyInformation}
            </p>
            <p>
              <strong>Return Policy:</strong> {product.returnPolicy}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
