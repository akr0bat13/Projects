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
          <div className="logo-index">
            <img className="beresneva-img" src={beresneva} alt="" />
            <img className="landscape-img" src={landscape} alt="" />
          </div>
          <Link className="button type1" to="/projects" />
        </div>
      </div>
    </>
  )
}
export default HomePage
