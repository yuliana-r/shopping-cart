import PropTypes from 'prop-types';

function Product(props) {

  function handleAddClick() {
    props.onAdd(props.product);
  }

  return(
    <div className='flex flex-col items-center justify-between w-56 mb-8 border-2 border-solid rounded shadow-md border-silver-400 h-96 font-display'>
      <div className='flex flex-col items-center justify-start mt-4 text-center'>
        <div className='overflow-hidden w-44 h-44'>
          <img src={props.product.image} alt="" className='self-start object-contain w-full h-full' />
        </div>
        <p className='p-2 mt-2 overflow-hidden font-bold tracking-wide h-14 text-navy-900 line-clamp-2'>{props.product.title}</p>
        <div>
          <p className='m-2 text-base hover:cursor-grab hover:underline'>
            <i className="text-yellow-400 fa-solid fa-star"></i> 
            <span className='font-semibold text-black-900'>{props.product.rating.rate} </span> 
            <span className='font-light'>({props.product.rating.count} reviews)</span></p>
          <p className='mt-3 text-lg font-bold tracking-wider text-black-950'>£{props.product.price.toFixed(2)}</p>
        </div>
      </div>

      <button onClick={handleAddClick}
        className='px-6 py-1 mb-4 text-sm font-semibold border border-solid rounded bg-navy-500 border-navy-700 text-black-50 hover:scale-105'>
        <i className="px-2 fa-solid fa-cart-shopping"></i>ADD</button>
    </div>
  )
}

Product.propTypes = {
  product: PropTypes.object,
  onAdd: PropTypes.func
}

export default Product;

