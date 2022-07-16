import React, { useState } from 'react'
import './style.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate()

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
        <ul
          className={showMenu ? 'nav-menu active' : 'nav-menu'}
          onClick={handleShowMenu}
        >
          <li className="hover:bg-gray-50" onClick={() => navigate('/')}>
            Домой
          </li>
          <li className="hover:bg-gray-50" onClick={() => navigate('/table')}>
            Таблица
          </li>
          <li
            className="hover:bg-gray-50"
            onClick={() => navigate('/contacts')}
          >
            Контакты
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
