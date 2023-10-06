import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { videos } from '../../utils/publications'
import './Publications.scss'

const Publications = () => {
  return (
    <>
      <Header />
      <div class="container">
        <div className="projects">
          <div class="publications">
            <div class="publications__list">
              <div class="items__body">
                {videos.map((video) => {
                  const { id, link, title, year } = video
                  return (
                    <div class="item" key={id}>
                      <div class="item__video">
                        <iframe
                          src={link}
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                      <div class="projects__item__bottom">
                        <h3 class="projects__item__title">{title}</h3>
                        <h4 class="projects__item__suptitle">{year}</h4>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Publications
