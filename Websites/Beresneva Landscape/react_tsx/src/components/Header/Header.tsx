import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { introLinks, links, logoIcon, mediaLinks } from '../../utils/constants'

import Modal from '../Modal/Modal'
import './Header.scss'

const Header = () => {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLinkClick = (link: any) => {
    setActiveLink(link)
    if (link === 'Контакты') {
      setIsModalOpen(true)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  if (
    location.pathname === '/' ||
    location.pathname === '/projects' ||
    location.pathname === '/about' ||
    location.pathname === '/sertificates' ||
    location.pathname === '/publications'
  ) {
    return (
      <header
        className={`${location.pathname === '/' ? 'header--index' : 'header'}`}
      >
        <div className="container">
          <div className="header_inner">
            <Link to="/">
              <img
                className="logo"
                src={
                  location.pathname === '/'
                    ? logoIcon.logo_white
                    : logoIcon.logo
                }
                alt="Beresneva Landscape"
              />
            </Link>
            <ul className="nav">
              {links.map((link) => {
                if (location.pathname === '/' && link.text === 'Сертификаты') {
                  return null
                }

                const { id, text, url } = link
                return (
                  <Link
                    className={`nav_link ${activeLink === id ? 'active' : ''} ${
                      location.pathname === '/' ? 'nav_link--index' : ''
                    }`}
                    key={id}
                    onClick={() => handleLinkClick(text)}
                    to={url}
                  >
                    {text}
                  </Link>
                )
              })}
            </ul>
            <div className="media">
              {mediaLinks.map((media) => {
                const { icon, link } = media
                if (location.pathname === '/') {
                  return null
                }
                return (
                  <a className="media_link" href={link}>
                    <img src={icon} alt="#" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
        {isModalOpen && <Modal closeModal={closeModal} />}
      </header>
    )
  }
}

export default Header
