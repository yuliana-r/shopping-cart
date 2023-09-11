import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


function Nav({ links }) {
  return(
    <nav>
      {links.map((link) => {
        <Link to={link.to} name={link.name}></Link>
      })}
    </nav>
  )
}

Nav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      name: PropTypes.string
    })
  )
}

export default Nav;