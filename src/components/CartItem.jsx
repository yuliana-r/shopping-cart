export default function CartItem(props) {
  return(
    <div className='p-2 flex items-center h-[90px] justify-between w-full gap-2 mb-4 border border-solid rounded shadow-md border-silver-400 font-display'>
      <div className='w-[85px] overflow-hidden h-full p-2'>
        <img src={props.item.image} alt="" className='self-center object-contain w-full h-full' />
      </div>
      <div className="flex items-center justify-between w-2/3 gap-2">
        <div className="flex flex-col h-full">
          <p className='mb-2 overflow-hidden font-bold tracking-wide text-navy-900 line-clamp-2'>{props.item.title}</p>
          <p className='text-base font-bold tracking-wider text-black-800'><span className="font-normal">Price:</span> £{props.item.price.toFixed(2)}</p>
        </div>
      </div>
      <p className="w-[50px] font-semibold text-center text-black-900">{props.qty}</p>
        
      <p className="w-[100px] font-medium tracking-wider text-center text-black-950">£{props.totalPricePerItem}</p>
    </div>
  )
}