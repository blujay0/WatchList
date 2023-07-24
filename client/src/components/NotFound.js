import React from 'react'
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <h1>Uh oh! Page not found!</h1>
      <p>Go to the <Link to="/">Homepage</Link>.</p>
    </div>
  )
}

export default NotFound;