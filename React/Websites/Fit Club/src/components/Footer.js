import React from 'react'
import Github from '../assets/github.png'
import Instagram from '../assets/instagram.png'
import LinkedIn from '../assets/linkedin.png'
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
  <>
    <hr className='footer__line' />
    <div className="container">
      <footer>
        <div className="footer">
          <div className="footer__social">
            <img src={Github} alt="github" />
            <img src={Instagram} alt="instagram" />
            <img src={LinkedIn} alt="linkedin" />
          </div>

          <div className="footer__logo">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <div className="blur footer--blur-first"></div>
        <div className="blur footer--blur-second"></div>
      </footer>
    </div>
  </>
  )
}

export default Footer