import React from 'react'
import './SertItem.scss'

const SertItem = ({ images }) => {
  return (
    <div className="sert-items">
      {images.map((image, index) => (
        <div className="sert-item">
          <img key={index} src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  )
}

export default SertItem
