import React from 'react'
import {testimonialsData} from '../data/testimonialsData'
import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'
import { useState } from 'react'

import {motion} from 'framer-motion'

const Testimonials = () => {

  const transition = {type: 'spring', duration: 3}

  const [selected, setSelected] = useState(0)
  const tLength = testimonialsData.length

  const prevPerson = () => {
    selected === 0 ? setSelected(tLength - 1) : setSelected( (prev) => prev - 1)
  }
  const nextPerson = () => {
    selected === tLength - 1 ? setSelected(0) : setSelected( (next) => next + 1)
  }

  return (
    <div className="container">
      <div className="testiomonials" id='testiomonials'>
        <div className="testimonials__item">
          <div className="testimonials__title">
            <div className="section__title">
              Testimonials 
            </div>
            <span className='stroke-text title-size'>what they </span>
            <div className="section__title white title-size">
              say about us
            </div>
          </div>
          <motion.div
           className="testimonials__info"
           key={selected}
           initial={{opacity: 0, x: -100}}
           transition={transition}
           animate={{opacity: 1, x: 0}}
           exit={{opacity: 0, x: 100}}
           >
            {testimonialsData[selected].review}
          </motion.div>
          <div className="person__info">
            <span>
              {testimonialsData[selected].name}
            </span>{' '}
            - {testimonialsData[selected].status}
          </div>
        </div>
        <div className="testimonials__item right-side">
          <motion.div
          className="background__orange"
          initial={{opacity: 0, x: -100}}
          transition={{...transition, duration: 2}}
          whileInView={{opacity: 1, x: 0}}
          ></motion.div>
          <motion.div
          className="background__snd"
          initial={{opacity: 0, x: 100}}
          transition={{...transition, duration: 2}}
          whileInView={{opacity: 1, x: 0}}
          ></motion.div>
          <motion.img
          className='person__img'
          key={selected}
          initial={{opacity: 0, x:   100}}
          transition={transition}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: -100}}
          src={testimonialsData[selected].image} alt="" />
          <div className="arrows">
            <img src={leftArrow} alt="left arrow" onClick={() => prevPerson(selected)}/>
            <img src={rightArrow} alt="right arrow" onClick={() => nextPerson(selected)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials