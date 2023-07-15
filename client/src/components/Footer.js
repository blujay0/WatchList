import "./Footer.css"
import { Link } from "react-router-dom" // Link component replaces the anchor tags

function Navbar() {
  return <nav className="footer">
    <Link to="/" className="site-title">
      WatchList
    </Link>
    <Link to="/about">
      About
    </Link>
  </nav>
}

export default Navbar