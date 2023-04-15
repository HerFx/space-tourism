import React from 'react'

export default function TechnologyDesc(props) {
  return (
    <div className='tech-desc'>
        <h4>The terminology...</h4>
        <h1>{props.data.name}</h1>
        <p>{props.data.description}</p>
    </div>
  )
}
