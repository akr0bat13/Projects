import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { links, logoIcon } from '../../utils/constants'
import './Sidebar.scss'

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const closeModal = () => {
    setIsSidebarOpen(false)
  }

  const openModal = () => {
    setIsSidebarOpen(true)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset

      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div className={`burger-menu ${isScrolled ? 'active' : ''}`}>
        <RxHamburgerMenu onClick={openModal} />
      </div>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className="sidebar-header">
          <Link to="/">
            <img
              className="beresneva-logo"
              src={logoIcon.logo}
              alt="Beresneva Landscape"
              onClick={closeModal}
            />
          </Link>
          <button className="close-btn" onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeModal}>
                  {text}
                </Link>
              </li>
            )
          })}
        </ul>
      </aside>
    </>
  )
}

export default Sidebar
