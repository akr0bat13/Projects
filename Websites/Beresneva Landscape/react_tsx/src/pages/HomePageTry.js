import React from 'react'
import '../assets/scss/HomePageTry.scss'
import { indexPage } from '../utils/indexPage'

const HomePageTry = () => {
  const { beresneva, landscape } = indexPage
  return (
    <div className="container">
      <div className="beresneva">
        <img className="image" src={beresneva} alt="" />
      </div>
      <div className="landscape">
        <img src={landscape} alt="" />
      </div>
      <button className="button">Проекты</button>
    </div>
  )
}
export default HomePageTry
