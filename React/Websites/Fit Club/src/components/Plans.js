import React from 'react'
import {plansData} from '../data/plansData'
import whiteTick from '../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="container">
      <div className="plans" id='plans'>
        <div className="blur plans--blur--first"></div>
        <div className="blur plans--blur--second"></div>
        <div className="programs__title" style={{gap: '2rem'}}>
          <span className='stroke-text'>Ready to start</span>
          your journey
          <span className='stroke-text'>with us</span>
        </div>

        {/* plans card */}
        <div className="plans__variants">
          {plansData.map( (plan, index) => {
            const {icon, name, price, features} = plan
            return(
              <div className="plan" key={index}>
                {icon}
                <div className="plan__name">{name}</div>
                <div className="plan__price">{price}$</div>
                <div className="features">
                  {features.map( (feature, index) => {
                    return (
                      <div className="feature">
                        <img src={whiteTick} alt="whiteTick" />
                        <span key={index}>{feature}</span>
                      </div>
                    )
                  })}
                </div>
                <div className="benefits">
                  See more benefits ->
                </div>
                <button className='btn'>Join now</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Plans