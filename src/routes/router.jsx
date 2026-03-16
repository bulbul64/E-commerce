import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import ProductCard from '../components/products/ProductCard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: async () => {
          const res = await fetch('https://dummyjson.com/products');
          if (!res.ok) throw new Error('Network response was not ok');
          const data = await res.json();
          return data;
        },
      },
      {
        path: '/products',
        element: <ProductCard />,
      },
    ],
  },
]);
