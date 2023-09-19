import Header from '../Header/Header';
import Footer from '../Footer';
import CartItem from './CartItem';
import PropTypes from 'prop-types';

export default function Cart(props) {

  const items = props.cartItems;
  const uniqueItemIds = Array.from(new Set(items.map((item) => item.id)));

  function calculateTotalPerItem(item, qty) {
    return item.price * qty;
  }

  function calculateTotalPerCart(cartItems) {
    return cartItems.reduce((total, item) => total + item.price, 0);
  }

  const totalPricePerCart = calculateTotalPerCart(items);

  return (
    <>
      <Header cartItems={props.cartItems} />
      <main className='mt-[240px] flex flex-col h-full items-center justify-center w-[min(90vw,900px)] font-display'>
        {items.length > 0 ? (
          <>
            <div className='flex items-center py-4 justify-between sm:w-full w-[320px] gap-2 mb-2 text-lg font-bold text-black-800'>
              <p className='w-5/6'>Item</p>
              <p className='text-center w-[75px]'>Qty</p>
              <p className='text-right pr-4 w-[100px]'>Total</p>
              <p className='pr-4 font-bold text-sm w-[30px] text-right'>
                <i className="fa-solid fa-trash-can"></i>
              </p>
            </div>
            {
              uniqueItemIds.map((itemId) => {
                const itemsWithId = items.filter((item) => item.id === itemId);
                const qty = itemsWithId.length;
                const totalPricePerItem = calculateTotalPerItem(
                  itemsWithId[0],
                  qty
                );

                const currentItem = items.find((item) => item.id === itemId);
                return(
                  <CartItem 
                    key={itemId}
                    item={currentItem} 
                    totalPricePerItem={totalPricePerItem} 
                    qty={qty}
                    removeItemsFromCart={props.removeItemsFromCart}
                  />
                )
              })
            }
            <h1 className='self-center pr-2 my-6 text-lg font-semibold tracking-wide sm:self-end text-black-950'>TOTAL <span className='font-normal'>(inc. VAT)</span>: £{totalPricePerCart.toFixed(2)}</h1>

            <div className='flex flex-wrap justify-center w-full sm:justify-between sm:flex-nowrap'>
              <button onClick={props.emptyCart}
                className="self-center w-48 px-5 py-1 mb-8 mr-0 text-base font-semibold bg-yellow-500 border border-yellow-700 border-solid rounded sm:mr-4 text-black-50 hover:scale-105 group">
              EMPTY CART
              </button>

              <button className="self-center w-56 px-5 py-1 mb-8 text-base font-semibold border border-solid rounded bg-navy-500 border-navy-700 text-black-50 hover:scale-105 group">
                <span className="group-hover:hidden">FAKE CHECKOUT</span>
                <span className="hidden group-hover:inline">THIS DOES NOTHING</span>
              </button>
            </div>
          </>
        ) : (
          <p className='p-8 m-auto mt-6 text-4xl select-none text-silver-800 font-motto'>your cart is empty!</p> 
        )}
      </main>

      <Footer />
    </>
  )
}

Cart.propTypes = {
  cartItems: PropTypes.array,
  removeItemsFromCart: PropTypes.func,
  emptyCart: PropTypes.func
}
