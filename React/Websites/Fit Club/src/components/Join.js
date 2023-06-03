import React from 'react'
import { useRef } from 'react'

const Join = () => {

  const form = useRef()

  return (
    <div className="container">
      <div className="join" id="join">
        <div className="join__item">
          <hr className='orange__line'/>
          <div className="join__title">
            <span className='stroke-text'>Ready to </span>
            Level up
          </div>
          <div className="join__title">
            Your body 
            <span className='stroke-text'> with us?</span>
          </div>
        </div>
        <div className="join__item join--right">
          <form className='email__sending' ref={form} action="https://formspree.io/f/moqzojea" method='post'>
            <input className='emil__input' type="email" name='user_email' placeholder='Enter E-mail' />
            <button className='btn btn--join' type='submit'>Join us</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Join