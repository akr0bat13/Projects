import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import SertItem from '../../components/SertItem/SertItem'
import { sertPage } from '../../utils/sertPage'
import './SertificatesPage.scss'

const Sertificates = () => {
  return (
    <>
      <Header />
      <div className="projects">
        {sertPage.map((item) => {
          const { title, id, images } = item
          return (
            <>
              <div className="container">
                <div className="sertificates">
                  <div className="sert-title">{title}</div>
                  <SertItem key={id} images={images} />
                </div>
              </div>
            </>
          )
        })}
      </div>
      <Footer />
    </>
  )
}
export default Sertificates
