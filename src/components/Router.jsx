import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Shop from './Shop';
import Cart from './Cart';
import ErrorPage from './ErrorPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
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

  return <RouterProvider router={router} />;
}

export default Router;