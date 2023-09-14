import PropTypes from 'prop-types';

function Product({ product }) {
  return(
    <div className='flex flex-col items-center justify-between w-56 mb-8 border-2 border-solid rounded shadow-md border-silver-400 h-96 font-display'>
      <div className='flex flex-col items-center justify-start mt-4 text-center'>
        <div className='overflow-hidden w-44 h-44'>
          <img src={product.image} alt="" className='self-start object-contain w-full h-full' />
        </div>
        <p className='p-2 mt-2 overflow-hidden font-bold tracking-wide h-14 text-navy-900 line-clamp-2'>{product.title}</p>
        <div>
          <p className='m-2 text-base hover:cursor-grab hover:underline'><i className="text-yellow-400 fa-solid fa-star"></i> <span className='font-semibold text-black-900'>{product.rating.rate}</span> <span className='font-light'>({product.rating.count} reviews)</span></p>
          <p className='mt-3 text-lg font-bold tracking-wider text-black-950'>£{product.price}</p>
        </div>
      </div>
      
      <div className='flex flex-row items-center justify-between w-3/4 m-2'>
        <select name="quantity" id="quantity" className='w-12 text-center border-2 border-solid rounded text-black-900 border-silver-500 h-7 bg-silver-100'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <button className='px-5 py-1 text-sm font-semibold border border-solid rounded bg-navy-500 border-navy-700 text-black-50 hover:scale-105'><i className="fa-solid fa-cart-shopping"></i> ADD</button>
      </div>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object

}

export default Product;

