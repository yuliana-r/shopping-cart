import Header from '../Header/Header';
import Footer from '../Footer';
import Product from './Product';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function Shop(props) {
  const [productsJSON, setProductsJSON] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/', { mode: 'cors' })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((response) => {
        setProductsJSON(response);
        setFilteredProducts(response);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (selectedCategory === '') {
      setFilteredProducts(productsJSON);
    } else {
      const filtered = productsJSON.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, productsJSON]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <>
      <Header cartItems={props.cartItems} />
      <div className='mt-[240px] xs:mt-[200px] flex flex-col items-center justify-center w-[min(90vw,900px)] h-fit text-center sm:justify-between'>
        <div className="flex flex-row flex-wrap items-center justify-center gap-2 mt-6 ml-0 sm:ml-auto sm:w-full sm:mr-5 sm:justify-end font-display">
          <p className='text-base font-bold text-yellow-500'>Category:</p>
          <div>
            <select
              name="category-list"
              id="category-list"
              className='w-48 text-center border-2 border-solid rounded text-black-900 border-silver-500 h-7 bg-silver-100'
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Show all</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewellery</option>
              <option value="men's clothing">Men&apos;s clothing</option>
              <option value="women's clothing">Women&apos;s clothing</option>
            </select>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 m-5 sm:justify-between sm:w-full">
          {error ? (
            <p className='m-auto mt-6 text-5xl select-none text-silver-800 font-motto'>a network error has occured... please try again!</p>
          ) : loading ? (
            <p className='m-auto mt-6 text-5xl select-none text-silver-800 font-motto'>loading...</p>
          ) : (
            filteredProducts.map((product) => (
              <Product 
                key={product.id} 
                product={product} 
                onAdd={props.onAdd} />
            ))
          )}
        </div>
      </div>
      
      <Footer />
    </>
  );
}

Shop.propTypes = {
  cartItems: PropTypes.array,
  onAdd: PropTypes.func
}