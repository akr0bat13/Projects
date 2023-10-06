import React, { useState } from 'react'

const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal_content">
        <h2>Модальное окно</h2>
        <button className="modal_close" onClick={closeModal}>
          Закрыть
        </button>
      </div>
    </div>
  )
}

export default Modal
