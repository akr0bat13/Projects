import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectsItem.scss'

const ProjectItem = ({ img, title, year, text, index, id }) => {
  const words = text.split(' ')
  const truncatedText = words.slice(0, 30).join(' ')
  const isOdd = index % 2 !== 0

  return (
    <div className={`project ${isOdd ? 'reverse' : ''}`}>
      <div className="project-item text-info">
        <div className="project-title">{title}</div>
        <div className="project-year">{year}</div>
        <div className="project-info">{truncatedText}...</div>
        <Link className="project-detailed" to={`/projects/${id}`}>
          Подробнее
        </Link>
      </div>
      <div className="project-item">
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default ProjectItem
