import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ProjectItem from '../../components/ProjectItem/ProjectItem'
import { projects } from '../../utils/projects/projects'
import './ProjectsPage.scss'

const ProjectsPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="projects">
          {projects.map((project, index) => {
            const { img, title, year, text, id } = project
            return (
              <ProjectItem
                id={id}
                img={img}
                title={title}
                year={year}
                text={text}
                index={index}
              />
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProjectsPage
