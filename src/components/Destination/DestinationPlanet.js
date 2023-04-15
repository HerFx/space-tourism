import React from 'react'

export default function DestinationPlanet(props) {
  return (
    <div className='dest-img'>
        <img src={props.data.images.png} alt='planet'></img>
    </div>
  )
}
