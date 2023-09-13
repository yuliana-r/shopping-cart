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
      <Footer />
    </>
  )
}

export default Shop;