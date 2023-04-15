import React from 'react'
import  './Destination.css'
import DestinationDesc from './DestinationDesc'
import DestinationPlanet from './DestinationPlanet'
import { useState} from 'react'
import data from '../../data.json'

export default function DestinationSection() {

  const [index, setIndex] = useState(0);
  const element = data.destinations[index];



  return (
    <div className='dest'>
      <div className='title'>
        <h1><span>01</span> Pick your destination</h1>
      </div>
        <DestinationPlanet data={element}/>
        <div className='dest-container'>
          <div className='dest-nav'>
            <div className='dest-nav-items'>
              <button onClick={() => setIndex(0)} className={index === 0 ? 'active' : ''}>Moon</button>
              <button onClick={() => setIndex(1)} className={index === 1 ? 'active' : ''}>Mars</button>
              <button onClick={() => setIndex(2)} className={index === 2 ? 'active' : ''}>Europa</button>
              <button onClick={() => setIndex(3)} className={index === 3 ? 'active' : ''}>Titan</button>
            </div>
          </div>
          <DestinationDesc data={element}/> 
        </div>
    </div>
  )
}

