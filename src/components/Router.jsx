import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, createContext } from 'react';
import Home from './Home';
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';
import ErrorPage from './ErrorPage';

export const ShopContext = createContext({
  cartItems: [],
  addToCart: () => {},
  emptyCart: () => {},
  removeItemsFromCart: () => {}
});

const Router = () => {

  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
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
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: '/shop',
      element: <Shop />,
      errorElement: <ErrorPage />
    },
    {
      path: '/cart',
      element: <Cart />,
      errorElement: <ErrorPage />
    },
  ])

  return (
    <ShopContext.Provider value={{ cartItems, addToCart, emptyCart, removeItemsFromCart }}>
      <RouterProvider router={router} />
    </ShopContext.Provider>
  );
}

export default Router;