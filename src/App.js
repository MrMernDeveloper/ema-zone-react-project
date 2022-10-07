
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import About from './components/About/About';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './Loaders/ProductsAndCartLoader';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: ()=> fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/shop',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: 'inventory',
          element: <Inventory></Inventory>
        },
        {
          path: 'about',
          element: <About></About>
        }
      ]
    }
    

  ])
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
