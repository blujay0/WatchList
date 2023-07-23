import "./Navbar.css";
import { Link } from "react-router-dom"; // Link component replaces the anchor tags
import { IconButton } from '@mui/material';
import { Watch } from '@mui/icons-material';

const Navbar = ({ customer }) => {
  const iconStyle = { marginRight: 2, fontSize: 40, color: 'white' };

  return (
    <nav className="nav">

    <IconButton component={Link} to={{ pathname: '/' }} rel='noopener noreferrer'>
        <Watch sx={iconStyle} />
        <Link to="/" className="site-title">
          <h3>WatchList</h3>
        </Link>
    </ IconButton>

    {/* if customer does not exist, show login link */}
    {!customer && <Link to="/login" className="nav-links">
      <p>Login</p>
    </Link>}

    {/* if customer exists, show logout link */}
    {customer && <Link to="/logout" className="nav-links">
      <p>Logout</p>
    </Link>}

    <Link to="/signup" className="nav-links">
      <p>SignUp</p>
    </Link>

    <Link to="/cart" className="nav-links">
      <p>Cart</p>
    </Link>

    <Link to="/edit-product" className="nav-links">
      <p>Edit Product</p>
    </Link>

    <Link to="/order" className="nav-links">
      <p>Orders</p>
    </Link>

    </nav>  
  )
}

export default Navbar