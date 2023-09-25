import PropTypes from 'prop-types';

import { useContext } from 'react';
import { ShopContext } from '../Router';

export default function CartItem(props) {

  const { removeItemsFromCart } = useContext(ShopContext);

  return(
    <div className='flex items-center h-[110px] justify-between sm:w-full w-[320px] gap-2 mb-4 border border-solid rounded shadow-md border-silver-400 font-display'>
      <div className='flex items-center justify-start w-5/6 font-display'>
        <div className='sm:w-[85px] w-[30px] overflow-hidden h-full p-4'>
          <img src={props.item.image} alt="" className='self-center object-contain w-full h-full' />
        </div>
        <div className="flex items-center justify-between w-2/3 gap-2">
          <div className="flex flex-col h-full">
            <p className='mb-2 overflow-hidden text-sm font-bold tracking-wide text-navy-900 line-clamp-2'>{props.item.title}</p>
            <p className='text-sm font-bold tracking-wider text-black-800'><span className="font-normal">Price:</span> £{props.item.price.toFixed(2)}</p>
          </div>
        </div>
      </div>
      
      <p className="w-[75px] font-semibold text-base text-center text-black-900">{props.qty}</p>
        
      <p className="w-[100px] text-base font-medium tracking-wider text-right pr-4 text-black-950">£{props.totalPricePerItem.toFixed(2)}</p>
      <button 
        className="pr-4 font-bold text-sm text-yellow-600 hover:scale-110 w-[30px]"
        onClick={() => removeItemsFromCart(props.item.id)}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.object,
  qty: PropTypes.number,
  totalPricePerItem: PropTypes.number
}