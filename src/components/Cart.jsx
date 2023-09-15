import Header from './Header';
import Footer from './Footer';

function Cart(props) {
  return (
    <>
      <Header count={props.count} />
      <h1>Cart page!</h1>
      <Footer />
    </>
  )
}
  
export default Cart;