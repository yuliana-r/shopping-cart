import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import ErrorPage from './ErrorPage';

const Router = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {

  }, [])

  function add() {
    console.log(count);
    setCount(count => count + 1);
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home count={count} />,
      errorElement: <ErrorPage />
    },
    {
      path: '/shop',
      element: <Shop onAdd={add} count={count}/>,
      errorElement: <ErrorPage />
    },
    {
      path: '/cart',
      element: <Cart count={count} />,
      errorElement: <ErrorPage />
    },
  ])

  return <RouterProvider router={router} />;
}

export default Router;