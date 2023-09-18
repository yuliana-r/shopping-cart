import Header from './Header';
import Footer from './Footer';
import CartItem from './CartItem';

export default function Cart(props) {

  const items = props.cartItems;

  function calculateTotalPerItem(item, qty) {
    return item.price * qty;
  }

  function calculateTotalPerCart(cartItems) {
    return cartItems.reduce((total, item) => total + item.price, 0);
  }

  const uniqueItemIds = Array.from(new Set(items.map((item) => item.id)));

  const totalPricePerCart = calculateTotalPerCart(items);

  function logItems() {
    console.log(items);
    //console.log(uniqueItemIds);
  }

  return (
    <>
      <Header cartItems={props.cartItems} />
      <div className='flex flex-col items-center w-7/12 min-w-[350px] mt-10 font-display'>
        <div className='flex items-center justify-between w-full gap-2 mb-2 text-lg font-bold text-black-800'>
          <p className='w-4/5 '>Item</p>
          <p className='w-[50px] text-center'>Qty</p>
          <p className='w-[100px] text-center'>Total</p>
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
              <CartItem item={currentItem} totalPricePerItem={totalPricePerItem} qty={qty}/>
            )
          })
        }
        <h1 className='self-center pr-6 my-4 text-lg font-semibold tracking-wide sm:self-end text-black-950'>TOTAL (inc. VAT): £{totalPricePerCart.toFixed(2)}</h1>

        <button className="self-center w-56 px-5 py-1 m-4 text-sm font-semibold border border-solid rounded bg-navy-500 border-navy-700 text-black-50 hover:scale-105 group">
          <span className="group-hover:hidden">FAKE CHECKOUT</span>
          <span className="hidden group-hover:inline">THIS DOES NOTHING</span>
        </button>
      </div>
      
      
      <Footer />
    </>
  )
}


