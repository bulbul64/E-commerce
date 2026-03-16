import React from 'react'

export default function Filter() {
  return (
    <div className='flex justify-between items-center'>
          <div>
            <label htmlFor="category">Category:</label>
            <select id="category" name="category" className=''>
              <option value="all">All</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
            </select>
          </div>
          <div>
            <label htmlFor="sort">Sort By:</label>
            <select id="sort" name="sort">
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
              <option value="rating-asc">Rating (Low to High)</option>
              <option value="rating-desc">Rating (High to Low)</option>
            </select>
          </div>
    </div>
  )
}
