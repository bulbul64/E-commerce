import React from 'react';

export default function NoProducts() {
  return (
    <div className="flex flex-col items-center justify-center text-center col-span-full px-4">
      {/* Icon */}
      <div className="text-6xl mb-4">🛒</div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">No Products Found</h2>

      {/* Description */}
      <p className="text-gray-500 max-w-md mb-4">
        Sorry, we couldn’t find any products. Try changing your filters or come back later.
      </p>

      {/* Button */}
      <button className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Reset Filters
      </button>
    </div>
  );
}
