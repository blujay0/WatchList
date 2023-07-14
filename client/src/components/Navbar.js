import "./Navbar.css"

export default function Navbar() {
  return <nav className="site-title">
    <a href="/">
      WatchList
    </a>
    <ul>
      <li>
        <a href="/login">Cart</a>
      </li>
      <li>
        <a href="/signup">SignUp</a>
      </li>
      <li>
        <a href="/cart">Cart</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </ul>
  </nav>
}