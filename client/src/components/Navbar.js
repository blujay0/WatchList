import "./Navbar.css"
import { Link } from "react-router-dom" // Link component replaces the anchor tags

const Navbar = () => {
  return <nav className="nav">
    <Link to="/" className="site-title">
      <h3>WatchList</h3>
    </Link>
    
    <Link to="/login" className="nav-links">
      <p>Login</p>
    </Link>
    
    <Link to="/signup" className="nav-links">
      <p>SignUp</p>
    </Link>

    <Link to="/cart" className="nav-links">
      <p>Cart</p>
    </Link>

  </nav>
}

export default Navbar