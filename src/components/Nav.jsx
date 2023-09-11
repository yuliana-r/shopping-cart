import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Nav() {
  const LINKS = [
    {
      id: 0,
      to: '/',
      name: 'Home',
    },
    {
      id: 1,
      to: '/shop',
      name: 'Shop'
    },
    {
      id: 2,
      to: '/cart',
      name: 'Cart'
    }
  ]

  return(
    <nav className='flex gap-4'>
      {LINKS.map((link) => {
        return(
          <li key={link.id} className='list-none'>
            <Link name={link.name} to={link.to}>{link.name}</Link>
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