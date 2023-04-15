import React from 'react'

export default function CrewImg(props) {
  return (
    <div className='crew-img'>
        <img src={props.data.images.png} alt='crew'></img>
    </div>
  )
}
