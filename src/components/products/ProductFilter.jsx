import { useContext,  useEffect, useState } from 'react';
import { CategoryContext } from '../../context/CategoryContext';


export default function ProductFilter() {
  const [categories, setCategories] = useState([]);
  const { category, setCategory } = useContext(CategoryContext);
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('https://dummyjson.com/products/categories');
      const data = await res.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);
 
 
  return (
    <div className="flex justify-between items-center">
      <div>
        <label htmlFor="category">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          id="category"
          name="category"
          className=""
        >
          <option value="">All</option>
          {categories.map((cat) => {

            return (
              <option key={cat.slug} value={cat.slug}>
              {cat.name}
            </option>
           )
          })}
      
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
  );
}
