import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { aboutInfo } from '../../utils/aboutPage'
import './AboutPage.scss'

const AboutUs = () => {
  const { name, lastName, text, title, image, specialization } = aboutInfo

  return (
    <>
      <Header />
      <div className="container">
        <div className="projects">
          <div className="author">
            <div className="author-item">
              <div className="author-title">
                <span>{lastName}</span> {name}
              </div>
              <div className="author-suptitle">{title}</div>
              <p className="author-text">{text}</p>
              <p className="author-text">Опыт в ландшафте — более 20 лет.</p>
              <ul className="author-list">
                <div className="author-list-title">Специализация:</div>
                <div className="list-content">
                  {specialization.map((item) => (
                    <li>{item}</li>
                  ))}
                </div>
              </ul>
            </div>
            <div className="author-item photo">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default AboutUs

/*
 <section class="section">
      <div class="container">
        <div class="author">
          <div class="author__item">
            <div class="author__title">
              <span>{lastName}</span> {name}
            </div>
            <div class="author__suptitle">{title}</div>
            <p class="author__text">{text}</p>
            <ul className=''>
              {specialization.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>

          <div class="author__item author__item--img">
            <img src={image} alt="Beresneva Marina" />
          </div>
        </div>
      </div>
    </section>
*/
