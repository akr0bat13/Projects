import React from 'react'
import Footer from '../../components/Footer/Footer'
import ProjectItem from '../../components/ProjectItem/ProjectItem'
import { projects } from '../../utils/projects/projects'
import './ProjectsPage.scss'

const ProjectsPage = () => {
  return (
    <>
      <div className="container">
        <div className="projects">
          {projects.map((project, index) => {
            // const { img, title, year, text, id } = project
            return (
              <ProjectItem key={project.id} index={index} project={project} />
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProjectsPage
