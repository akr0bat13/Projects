import React from 'react'
import '../assets/scss/AboutPage.scss'
import { aboutInfo } from '../utils/aboutPage'

const AboutUs = () => {
  const { name, lastName, text, title, image } = aboutInfo

  return (
    <section class="section">
      <div class="container">
        <div class="author">
          <div class="author__item">
            <div class="author__title">
              <span>{lastName}</span> {name}
            </div>
            <div class="author__suptitle">{title}</div>
            <p class="author__text">{text}</p>
          </div>

          <div class="author__item author__item--img">
            <img src={image} alt="Beresneva Marina" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutUs
