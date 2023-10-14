import React from 'react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import './Slider.scss'

import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Slider = ({ slides }) => {
  return (
    <div className="slider">
      <Swiper
        modules={[Pagination, Autoplay]}
        lazy={true}
        // pagination={{
        //   clickable: true,
        //   dynamicBullets: true,
        // }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide} alt="" loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider

// import React, { useEffect, useState } from 'react'
// import './Slider.scss'

// const Slider = ({ slides }) => {
//   const [currentSlide, setCurrentSlide] = useState(0)

//   const goToNextSlide = () => {
//     setCurrentSlide((currentSlide + 1) % slides.length)
//   }

//   const goToPrevSlide = () => {
//     setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)
//   }

//   useEffect(() => {
//     const slideTimer = setInterval(goToNextSlide, 3000)

//     return () => {
//       clearInterval(slideTimer)
//     }
//   }, [currentSlide])

//   return (
//     <div className="slider">
//       {slides.map((slide, index) => (
//         <img
//           key={index}
//           src={slide}
//           alt=""
//           className={index === currentSlide ? 'slide active' : 'slide'}
//         />
//       ))}

//       <div className="slider-buttons">
//         <button onClick={goToPrevSlide}>Назад</button>
//         <button onClick={goToNextSlide}>Вперед</button>
//       </div>
//     </div>
//   )
// }

// export default Slider
