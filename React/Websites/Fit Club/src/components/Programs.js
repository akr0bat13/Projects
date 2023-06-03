import React from 'react'
import {programsData} from '../data/programsData'
import RightArrow from '../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="container">
      <div className="programs" id="programs">

        {/* title */}
        <div className="programs__title">
          <span className='stroke-text'>Explore our</span>
          Programs 
          <span className='stroke-text'>to shape you</span>
        </div>

        <div className="programs__categories">
          {programsData.map( (program) => {
            const {image, title, info} = program
            return (
              <div className="category">
                <div className="category__image">
                  {image}
                </div>
                <div className="category__title">{title}</div>
                <div className="category__info">{info}</div>
                <div className="join_us">
                  Join now
                  <img src={RightArrow} alt="join_us" />
                </div>
              </div>
            )
          })}
        </div>

      </div> {/* programs */}
    </div>
  )
}

export default Programs