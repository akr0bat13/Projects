import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { links, logoIcon, mediaLinks } from '../../utils/constants'

import Modal from '../Modal/Modal'
import './Header.scss'

const Header = () => {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLinkClick = (link) => {
    setActiveLink(link)
    if (link === 'Контакты') {
      setIsModalOpen(true)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <header className="header">
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
                src={
                  location.pathname === '/'
                    ? logoIcon.logo_white
                    : logoIcon.logo
                }
                alt="Beresneva Landscape"
              />
            </Link>
          )}

          <ul className="nav">
            {links.map((link) => {
              // if (location.pathname === '/' && link.text === 'Сертификаты') {
              //   return null
              // }

              const { id, text, url } = link
              return (
                <Link
                  className={`nav_link ${activeLink === text ? 'active' : ''}`}
                  key={id}
                  onClick={() => handleLinkClick(text)}
                  to={url}
                >
                  <div className="link-text">{text}</div>
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
      {isModalOpen && <Modal closeModal={closeModal} />}
    </header>
  )
  // }
}

export default Header
