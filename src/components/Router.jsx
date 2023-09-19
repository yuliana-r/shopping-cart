import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';
import ErrorPage from './ErrorPage';

const Router = () => {

  const [cartItems, setCartItems] = useState([]);

  function add(product) {
    setCartItems(cartItems => [...cartItems, product]);
  }

  function emptyCart() {
    setCartItems([]);
  }

  function removeItemsFromCart(itemIdToRemove) {
    const updatedCart = cartItems.filter((item) => item.id !== itemIdToRemove);
    setCartItems(updatedCart);
  }


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home 
        cartItems={cartItems} />,
      errorElement: <ErrorPage />
    },
    {
      path: '/shop',
      element: <Shop 
        onAdd={add} 
        cartItems={cartItems}/>,
      errorElement: <ErrorPage />
    },
    {
      path: '/cart',
      element: <Cart 
        cartItems={cartItems} 
        emptyCart={emptyCart} 
        removeItemsFromCart={removeItemsFromCart} />,
      errorElement: <ErrorPage />
    },
  ])

  return <RouterProvider router={router} />;
}

export default Router;