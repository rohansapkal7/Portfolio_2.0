import React from 'react'

function Experience({data}) {
  return (
    <div className='exp'>
        <p className="exp-role">{data.role}</p>
        <p className="exp-company"><i>{data.company}<br/>{data.mode}</i></p>
        <p className="exp-duration"><i>{data.duration}</i></p>
    </div>
  )
}

export default Experience