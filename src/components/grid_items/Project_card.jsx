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
                  <img src={'/icons/'+e} alt="badge-icon" />
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
            {data.project_desc}
          </p>
        </div>

        <div className="project-footer">
          <p>{data.tech_used}</p>
          <button>{'</>'}</button>
        </div>
    </div>
  )
}

export default Project_card