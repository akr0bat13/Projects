import React from 'react'
import { useLocation } from 'react-router-dom'
import { footerComponents, mediaLinks } from '../../utils/constants'
import './Footer.scss'

function Footer() {
  const location = useLocation()
  const { phone, mail, copyrightDate } = footerComponents

  if (
    location.pathname === '/projects' ||
    location.pathname === '/about' ||
    location.pathname === '/sertificates' ||
    location.pathname === '/publications'
  ) {
    return (
      <footer className="footer">
        <div className="footer__content">
          <div className="copyright">
            <div className="copyright__symvol">&copy;</div>
            <div className="copyright__year">{copyrightDate}</div>
          </div>
          <address className="footer__contacts">
            <div className="footer__contacts__tel">
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
            <div>
              <a href={`mailto:${mail}`}>{mail}</a>
            </div>
          </address>
          <div className="media media--footer">
            {mediaLinks.map((media) => {
              if (location.pathname === '/') {
                return null
              }
              const { icon, link } = media
              return (
                <a className="media__link" href={link}>
                  <img className="image" src={icon} alt="#" />
                </a>
              )
            })}
          </div>
        </div>
      </footer>
    )
  }
  return null
}

export default Footer
