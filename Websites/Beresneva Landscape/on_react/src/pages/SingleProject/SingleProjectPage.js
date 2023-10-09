import React from 'react'
import { Link } from 'react-router-dom'
import SingleProjectItem from '../../components/SingleProjectItem/SingleProjectItem'
import { projects } from '../../utils/projects/projects'
import Error from '../ErrorPage/ErrorPage'

import './SingleProjectPage.scss'

const SingleProject = () => {
  const id = window.location.pathname.replace('/projects/', '')
  const project = projects.find((project) => project.id === id)
  const { image, title, year, text, designers, location, photograps } = project

  if (!project) {
    return <Error />
  }

  const params = [
    {
      title: 'Реализация',
      constant: year,
    },
    {
      title: 'Дизайнеры',
      constant: designers,
    },
    {
      title: 'Местоположение',
      constant: location,
    },
    {
      title: 'Фотографы',
      constant: photograps,
    },
  ]

  const paragraphs = text.split('\n')

  return (
    <div className="projects">
      <div className="container">
        <div className="single-project">
          <div className="single-project-subcontent">
            <div className="single-project-info">
              <h1>{title}</h1>
              <SingleProjectItem
                params={params}
                year={year}
                designers={designers}
                location={location}
                photograps={photograps}
              />
            </div>
            <div className="single-project-slider">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="single-project-content">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="project-link">
            <Link className="project-return" to="/projects">
              Вернуться к проектам
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingleProject
