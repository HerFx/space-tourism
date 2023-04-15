import React from 'react'

export default function DestinationDesc(props) {
  return (
    <div className='dest-desc'>
        <div className='dest-name'>
            <h1>{props.data.name}</h1>
            <p>{props.data.description}</p>
        </div>
        <div className='dest-info'>
            <div className='dest-info-item'>
                <h3>Avg. distance</h3>
                <h2>{props.data.distance}</h2>
            </div>
            <div className='dest-info-item'>
                <h3>Est. Travel time</h3>
                <h2>{props.data.travel}</h2>
            </div>
        </div>
    </div>
  )
}
