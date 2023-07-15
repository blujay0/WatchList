import "./Navbar.css"
import { Link } from "react-router-dom" // Link component replaces the anchor tags

const Navbar = () => {
  return <nav className="nav">
    <Link to="/" className="site-title">
      WatchList
    </Link>
    
    <Link to="/login" className="nav-links">
      Login
    </Link>
    
    <Link to="/signup" className="nav-links">
      SignUp
    </Link>

    <Link to="/cart" className="nav-links">
      Cart
    </Link>

  </nav>
}

export default Navbar