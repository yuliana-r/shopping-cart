import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function Nav() {
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
          <li key={link.id} className='m-2 text-base font-extrabold tracking-wider list-none font-display text-silver-900'>
            <NavLink name={link.name} to={link.to} className={({isActive}) => isActive ? 'text-navy-500 border-b-2' : ''}>{link.name}</NavLink>
          </li>
        )
      })}
    </nav>
  )
}

Nav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      to: PropTypes.string,
      name: PropTypes.string
    })
  )
}

export default Nav;