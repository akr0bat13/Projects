import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectsItem.scss'

const ProjectItem = ({ index, project }) => {
  const { text, title, image, year, id } = project
  const words = text.split(' ')
  const truncatedText = words.slice(0, 30).join(' ')
  const isOdd = index % 2 !== 0

  return (
    <div className={`project ${isOdd ? 'reverse' : ''}`}>
      <div className="project-item text-info">
        <div className={`project-title ${isOdd ? 'right' : ''}`}>{title}</div>
        <div className={`project-year ${isOdd ? 'right' : ''}`}>{year}</div>
        <div className={`project-info ${isOdd ? 'right' : ''}`}>
          {truncatedText}...
        </div>
        {/* <div className="project-link">
          <a className="project-detailed" href={`/projects/${id}`}>
            Подробнее
          </a>
        </div> */}
        <div className="project-link">
          <Link className="project-detailed" to={`/projects/${id}`}>
            Подробнее
          </Link>
        </div>
      </div>
      <div className="project-item">
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default ProjectItem
