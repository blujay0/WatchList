import "./Footer.css"
import { Link } from "react-router-dom" // Link component replaces the anchor tags

function Navbar() {
  return <nav className="footer">
    <Link to="/" className="site-title">
      WatchList
    </Link>
    <ul>
      <li>
        <a href="/about">About</a>
      </li>
    </ul>
  </nav>
}

export default Navbar