import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router.jsx';
import { SearchProvider } from './context/SearchContext.jsx';
import { CategoryProvider } from './context/CategoryContext.jsx';
import { Provider } from 'react-redux';
import store from './app/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CategoryProvider>
      <Provider store={store}>
        <SearchProvider>
          <RouterProvider router={router} />
        </SearchProvider>
      </Provider>
    </CategoryProvider>
  </StrictMode>,
);
