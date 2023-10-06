import React from 'react'
import { projects } from '../../utils/projects/projects'

const SinglePage = ({ match }) => {
  const { id } = match.params
  const project = projects.find((project) => project.id === id)

  if (!project) {
    return <div>Проект не найден</div>
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <p>Год: {project.year}</p>
      <p>Дизайнеры: {project.designers}</p>
      <p>Координаты: {project.coordinates}</p>
      <p>Фотографы: {project.photographs}</p>
      <p>{project.text}</p>
      <img src={project.img} alt={project.title} />
    </div>
  )
}

export default SinglePage
