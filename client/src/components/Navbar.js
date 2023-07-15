import "./Navbar.css"
import { Link } from "react-router-dom" // Link component replaces the anchor tags

const Navbar = () => {
  return <nav className="nav">
    <Link to="/" className="site-title">
      WatchList
    </Link>
    <ul>
      <li>
        <a href="/login">Login</a>
      </li>
      <li>
        <a href="/signup">SignUp</a>
      </li>
      <li>
        <a href="/cart">Cart</a>
      </li>
    </ul>
  </nav>
}

export default Navbar