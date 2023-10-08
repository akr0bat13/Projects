import React from 'react'
import { Link } from 'react-router-dom'
import { indexPage } from '../../utils/indexPage'
import './HomePage.scss'

const HomePage = () => {
  const { beresneva, landscape } = indexPage
  return (
    <>
      <div className="center">
        <div className="container-index">
          <div className="logo">
            <img className="beresneva-img" src={beresneva} alt="" />
            <img className="landscape-img" src={landscape} alt="" />
          </div>
          <button className="button type1">
            <Link to="/projects"></Link>
          </button>
        </div>
      </div>
    </>
  )
}
export default HomePage
