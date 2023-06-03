import React from 'react'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import nb from '../assets/nb.png'
import addidas from '../assets/adidas.png'
import nike from '../assets/nike.png'
import tick from '../assets/tick.png'

const Reasons = () => {
  return (
    <div className="container">
      <div className="reasons" id="reasons">
        <div className="reasons__item">
          <img className='reasons__img img1' src={image1} alt="" />
          <img className='reasons__img img2' src={image2} alt="" />
          <img className='reasons__img img3' src={image3} alt="" />
          <img className='reasons__img img4' src={image4} alt="" />
        </div>

        <div className="reasons__item item--text">
          Some reasons 
          <div className='why-us'>
           <span className='stroke-text'>why</span> 
            choose us
          </div>

            <div className="reasons__pluses">
              <div className="pluses__item">
                <img className='pluses__img' src={tick} alt="" />
                <span>over 140+ expert coaches</span>
              </div>
              <div className="pluses__item">
                <img className='pluses__img' src={tick} alt="" />
                <span>train smarter and faster then before</span>
              </div>
              <div className="pluses__item">
                <img className='pluses__img' src={tick} alt="" />
                <span>1 free program for new members</span>
              </div>
              <div className="pluses__item">
                <img className='pluses__img' src={tick} alt="" />
                <span>reliable partners</span>
              </div>
            </div>
            <div className="partners">
              <div className="partners__title">our partners</div>
              <img src={nike} alt="nike" />
              <img src={addidas} alt="addidas" />
              <img src={nb} alt="nb" />
            </div>

        </div>
      </div>
    </div>
  )
}

export default Reasons