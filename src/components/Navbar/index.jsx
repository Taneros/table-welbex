import React, { useState } from 'react'
import './style.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev)
  }

  return (
    <nav className="header">
      <div className="container">
        <h1 style={{ position: 'absolute', top: '-500px', left: '-500px' }}>
          TableWelbeX
        </h1>
        <h2>
          Table<span className="primary">WelbeX</span>
        </h2>
        <ul className={showMenu ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to="/">Домой</Link>
          </li>
          <li>
            <Link to="/Main">Таблица</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>

        <div className="humburger" onClick={handleShowMenu}>
          {showMenu ? (
            <FaTimes size={25} style={{ color: '#333' }} />
          ) : (
            <FaBars size={25} style={{ color: '#333' }} />
          )}
        </div>
      </div>
    </nav>
  )
}
