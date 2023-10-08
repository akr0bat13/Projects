import React from 'react'
import './ModalInput.scss'

const ModalInput = ({ title, icon }) => {
  return (
    <div className="input-container">
      <div className="input-icon">
        <img src={icon} alt="" />
      </div>
      <input
        className="input-field"
        type="text"
        name="name"
        placeholder={title}
      />
    </div>
  )
}

export default ModalInput
