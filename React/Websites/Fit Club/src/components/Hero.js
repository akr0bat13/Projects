import React from 'react'
import Header from './Header'
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import Heart from '../assets/heart.png'
import Calories from '../assets/calories.png'

import {motion} from 'framer-motion'

const Hero = () => {

  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth <= 768 ? true : false

  return (
    <div className="container">
      <div className="hero" id='home'>
        <div className="blur hero--blur"></div>
        <div className="hero__left">
          <Header />
          <div className='hero__city'>
            <motion.div
              initial={{left: mobile ? '178px' : '238px'}}
              whileInView={{left: '8px'}}
              transition={{...transition, type: 'tween'}}
              ></motion.div>
            <span>the best fitness center in the city</span>
          </div>

          {/* Hero-text */}
          <div className="hero-text">
            <div>
              <span className='stroke-text'>Shape </span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal Body</span>
            </div>
            <div className='hero__info'>
              In here we'll help you shape your ideal body and live up your lifeto fullest
            </div>
          </div>

          {/* Hero-feagures */}
          <div className="figures">
            <div className="figure__item">
              <div className="figure__number">+140</div>
              <div className="figure__text">exept coaches</div>
            </div>
            <div className="figure__item">
              <div className="figure__number">+978</div>
              <div className="figure__text">memberes joined</div>
            </div>
            <div className="figure__item">
              <div className="figure__number">+50</div>
              <div className="figure__text">fitness programs</div>
            </div>
          </div>

          {/* Hero buttons */}

          <div className="hero__buttons">
            <button className='btn btn-orange'>Get Started</button>
            <button className='btn btn-transp'>Learn More</button>
          </div>

        </div>  {/* hero left */}


        <div className="hero__right">
          <button className='btn'>Join Now</button>
          <motion.div
          className="heart-rate"
          initial={{right: '-1rem'}}
          whileInView={{right: '4rem'}}
          transition={transition}
           >
            <img className='heart__img' src={Heart} alt="Heart" />
            <span className='heart__text'>Heart Rate</span>
            <span className='heart__number'>116 bpm</span>
          </motion.div>

          {/* hero-images */}

          <img className='hero__image' src={hero_image} alt="hero-image" />
          <motion.img className='hero__image__back'
           initial={{right: '11rem'}}
           whileInView={{right: '20rem'}}
           transition={transition}
           src={hero_image_back} alt="hero-image_back" />

          {/* Calories */}
          <motion.div 
          className="calories"
          initial={{right: '37rem'}}
          whileInView={{right: '28rem'}}
          transition={transition}
          >
            <img className='calories__img' src={Calories} alt="calories" />
            <div className="calories__info">
              <span className='calories__text'>Calories Burned</span>
              <span className='calories__number'>220 kcal</span>
            </div>
          </motion.div>

        </div> {/* hero-right */}
      </div>
    </div>

  )
}

export default Hero