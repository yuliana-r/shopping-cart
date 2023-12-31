import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../Router';

export default function Nav() {

  const { cartItems } = useContext(ShopContext);

  const LINKS = [
    {
      id: 0,
      to: '/',
      name: 'HOME',
    },
    {
      id: 1,
      to: '/shop',
      name: 'SHOP'
    },
    {
      id: 2,
      to: '/cart',
      name: 'CART'
    }
  ]

  return(
    <nav className='flex sm:gap-20'>
      {LINKS.map((link) => {
        return(
          <li key={link.id} className='m-2 text-base font-extrabold tracking-wider list-none font-display text-silver-900 hover:scale-105'>
            <NavLink 
              name={link.name} 
              to={link.to} 
              className={({isActive}) => isActive ? 'text-navy-500 border-b-2 pb-1' : ''}>
              {link.name === 'CART' ? (
                <span>
                  {link.name}<span className="float-right w-6 h-6 ml-1.5 text-[11px] font-semibold text-center align-bottom rounded-full bg-navy-500 text-silver-50">{cartItems.length}</span>
                </span>
              ) : (
                link.name
              )}
            </NavLink>
          </li>
        )
      })}
    </nav>
  )
}
