import Header from './Header';
import Footer from './Footer';
import Product from './Product';

import { useEffect, useState } from 'react';

function Shop() {

  const [productsJSON, setProductsJSON] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/', { mode: 'cors' })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((response) => setProductsJSON(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Header />
      <div className='flex flex-row flex-wrap items-center justify-center w-4/5 m-5 font-display'>
        {error ? (
          <p>A network error was encountered</p>
        ) : (
          loading ? (
            <p>Loading...</p>
          ) : (
            productsJSON.map((product) => (
              <Product
                key={product.id}
                product={product} 
              />
            ))
          )
        )}
      </div>
      
      <Footer />
    </>
  )
}

export default Shop;