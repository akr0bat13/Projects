import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Navigation.css'

const Navigation = () => {
  return (
    <nav className="nav">
      <h3>Github Search</h3>
      <span>
        <Link className="nav-item" to="/">
          Home
        </Link>
        <Link className="nav-item" to="/favourites">
          Favourites
        </Link>
      </span>
    </nav>
  )
}

export default Navigation
