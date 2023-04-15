import React from 'react'
import './Tech.css'
import TechnologyDesc from './TechnologyDesc'
import data from '../../data.json'
import TechnologyImg from './TechnologyImg'
import { useState } from 'react'

export default function TechnologySection() {

  const [index, setIndex] = useState(0);
  const element = data.technology[index];




  return (
    <div className='tech'>
       <div className='title'>
        <h1><span>03</span> space launch 101</h1>
        <div className='tech-nav'>
        <div className='tech-nav-items'>
          <button onClick={() => setIndex(0)} className={index === 0 ? 'active-tech' : ''}>1</button>
          <button onClick={() => setIndex(1)} className={index === 1 ? 'active-tech' : ''}>2</button>
          <button onClick={() => setIndex(2)} className={index === 2 ? 'active-tech' : ''}>3</button>
        </div>
      </div>
      </div>
      <TechnologyDesc data={element} />
      <TechnologyImg data={element} />
    </div>
  )
}

