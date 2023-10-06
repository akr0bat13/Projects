import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { indexPage } from '../../utils/indexPage'
import './HomePage.scss'

const HomePageTry = () => {
  const { beresneva, landscape } = indexPage
  return (
    <>
      <Header />
      <div className="container-index">
        <div className="logo">
          <img className="beresneva-img" src={beresneva} alt="" />
          <img className="landscape-img" src={landscape} alt="" />
        </div>
        <button className="button">
          <Link to="/projects">Проекты</Link>
        </button>
      </div>
    </>
  )
}
export default HomePageTry
