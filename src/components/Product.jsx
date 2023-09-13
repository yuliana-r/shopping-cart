function Product({ product }) {
  return(
    <li>
      <img src={product.image} alt="" />
      {product.title}
              £{product.price}
      {product.rating.rate} ({product.rating.count})
    </li>
  )
}

export default Product;

