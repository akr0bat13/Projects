import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/scss/Error.scss'

import error from '../assets/images/icons/Error.svg'

const Error = () => {
  return (
    <div className="container">
      <div className="error-page">
        <img className="error-image" src={error} alt="not found" />
        <h3 className="error-title">Страница не найдена!</h3>
        <p className="error-text">Не можем найти нужную Вам страницу</p>
        <Link className="error-link" to="/">
          Назад на главную
        </Link>
      </div>
    </div>
  )
}
export default Error
