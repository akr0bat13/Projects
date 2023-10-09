import React from 'react'
import './SingleProjectItem.scss'

const SingleProjectItem = ({
  params,
  year,
  designers,
  location,
  photograps,
}) => {
  return (
    <>
      {params.map((item) => {
        const { title, constant } = item
        let value

        switch (title) {
          case 'Реализация':
            value = year
            break
          case 'Дизайнеры':
            value = designers
            break
          case 'Местоположение':
            value = location
            break
          case 'Фотографы':
            value = photograps
            break
          default:
            value = ''
        }

        return (
          <div key={title} className="project-items">
            <h4 className="project-items-title">{title}:</h4>
            <div className="project-items-value">{value}</div>
          </div>
        )
      })}
    </>
  )
}

export default SingleProjectItem
