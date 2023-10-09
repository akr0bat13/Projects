import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { links, logoIcon, mediaLinks } from '../../utils/constants'

import './Header.scss'

const Header = ({ openModal }) => {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  const handleLinkClick = (link) => {
    setActiveLink(link)
    if (link === 'Контакты') {
      openModal()
    }
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

  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location.pathname])

  return (
    <header className={`header ${isScrolled ? 'dark' : ''}`}>
      <div className="header-container">
        <div
          className={`${
            location.pathname === '/' ? 'header_inner index' : 'header_inner'
          }`}
        >
          {location.pathname === '/' ? null : (
            <Link to="/">
              <img
                className="beresneva-logo"
                src={logoIcon.logo}
                alt="Beresneva Landscape"
              />
            </Link>
          )}

          <ul className="nav">
            {links.map((link) => {
              const { id, text, url } = link
              return (
                <Link
                  className={`nav_link `}
                  key={id}
                  onClick={() => handleLinkClick(text)}
                  to={url}
                >
                  <div
                    className={`link-text ${
                      activeLink === text ? 'active' : ''
                    }`}
                  >
                    {text}
                  </div>
                </Link>
              )
            })}
          </ul>
          {location.pathname === '/' ? null : (
            <div className="media">
              {mediaLinks.map((media) => {
                const { icon, link } = media

                return (
                  <a className="media_link" href={link}>
                    <img src={icon} alt="#" />
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  )
  // }
}

export default Header
