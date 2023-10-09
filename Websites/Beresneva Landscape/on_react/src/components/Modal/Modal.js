import React, { useEffect, useState } from 'react'
import close from '../../assets/images/icons/close.svg'
import { modalInfo } from '../../utils/modal'

import ModalInput from '../ModalInput/ModalInput'
import './Modal.scss'

const Modal = ({ closeModal }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ваша логика обработки отправки данных
    // Например, отправка данных на сервер или выполнение других действий
    // после успешной отправки формы

    // Здесь вы можете использовать значения переменных name, email и message
    // для отправки данных или выполнения другой логики

    // После обработки отправки данных можно закрыть модальное окно
    closeModal()
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handleContainerClick = (event) => {
    event.stopPropagation()
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={handleContainerClick}>
        <div className="title-content">
          <h4 className="modal-title">
            Остались <span>вопросы</span>?
          </h4>
          <h4 className="modal-text">
            <p>Заполните анкету и мы Вам перезвоним</p>
          </h4>
        </div>
        <form className="modal-form" onSubmit={handleSubmit}>
          {modalInfo.map((input) => {
            const { id, title, icon } = input
            return (
              <ModalInput
                key={id}
                title={title}
                icon={icon}
                onChange={
                  id === 'name'
                    ? handleNameChange
                    : id === 'email'
                    ? handleEmailChange
                    : handleMessageChange
                }
              />
            )
          })}

          <button className="form-submit" type="submit">
            Связаться
          </button>
        </form>
        <button className="close-button" onClick={closeModal}>
          <img src={close} alt="Close" />
        </button>
        <div className="suptitle-content">
          <h4 className="modal-suptitile">
            Наши <span>контакты</span>
          </h4>
          <h5>Телефон: +79262289926</h5>
          <h5>Почта: 9711081@mail.ru</h5>
        </div>
      </div>
    </div>
  )
}

export default Modal
