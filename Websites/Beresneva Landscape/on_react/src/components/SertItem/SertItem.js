import React, { useEffect, useRef, useState } from 'react'
import close from '../../assets/images/icons/close.svg'
import './SertItem.scss'

const SertItem = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const containerRef = useRef(null)

  const openImage = (image) => {
    setSelectedImage(image)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  const handleContainerClick = (event) => {
    event.stopPropagation()
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeImage()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="sert-items">
      {images.map((image, index) => (
        <div className="sert-item" key={index}>
          <img src={image} alt={`${index}`} onClick={() => openImage(image)} />
        </div>
      ))}

      {selectedImage && (
        <div className="sert-item-full-size" onClick={closeImage}>
          <div
            className="sert-item-container"
            onClick={handleContainerClick}
            ref={containerRef}
          >
            <button className="close-button" onClick={closeImage}>
              <img src={close} alt="Close" />
            </button>
            <img src={selectedImage} alt="Full Size" />
          </div>
        </div>
      )}
    </div>
  )
}

export default SertItem
