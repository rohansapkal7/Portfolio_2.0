import React from 'react'

function Project_card({data}) {
  return (
    <div className='project-card-box'>
        <div className="project-header">
          <p className="project-title" id='PT'>{data.project_title}</p>
          <div className="projects-icons">
            {
              data.project_icons.map((e)=>{
                return(
                  <p>{e}</p>
                )
              })
            }
          </div>
        </div>

        <div className="project-content">
          <p className="project-subt">
            {data.project_subtitle}
          </p>
          <p className="project-desc">

          </p>
        </div>

        <p className="project-techs"></p>
    </div>
  )
}

export default Project_card