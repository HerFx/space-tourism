import React from 'react'

export default function CrewDesc(props) {
  return (
    <div className='crew-desc'>
        <h2>{props.data.role}</h2>
        <h1>{props.data.name}</h1>
        <p>{props.data.bio}</p>
    </div>
  )
}
