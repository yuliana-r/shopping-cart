import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import ErrorPage from './ErrorPage';

const Router = () => {

  const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   console.log(`items in cart: ${cartItems}`);
  // }, [cartItems])

  function add(product) {
    setCartItems(cartItems => [...cartItems, product]);
    //console.log(cartItems);
    // console.log(`product added: ${product}`);
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home cartItems={cartItems} />,
      errorElement: <ErrorPage />
    },
    {
      path: '/shop',
      element: <Shop onAdd={add} cartItems={cartItems}/>,
      errorElement: <ErrorPage />
    },
    {
      path: '/cart',
      element: <Cart cartItems={cartItems} />,
      errorElement: <ErrorPage />
    },
  ])

  return <RouterProvider router={router} />;
}

export default Router;