import React from 'react'

function Project_card({data}) {
  return (
    <div className='project-card-box'>
        <div className="project-header">
          <p className="project-title">{data.project_title}</p>
          <div className="projects-icons">

          </div>
        </div>

        <div className="project-content">
          <p className="project-subt">

          </p>
          <p className="project-desc">

          </p>
        </div>

        <p className="project-techs"></p>
    </div>
  )
}

export default Project_card