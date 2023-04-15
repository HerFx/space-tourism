import React from 'react'

export default function TechnologyImg(props) {
  return (
    <div className='tech-img'>
    <img src={props.data.images.portrait} alt='tech'></img>
</div>
  )
}
