import React from 'react'
import './Crew.css'
import CrewImg from './CrewImg'
import CrewDesc from './CrewDesc'
import { useState, useEffect} from 'react'
import data from '../../data.json'


export default function CrewSection() {

  const [index, setIndex] = useState(0);
  const element = data.crew[index];


  const handleKeyDown = (e) => {
    if (e.keyCode === 37) {
      if (index === 0) {
        setIndex(3)
      } else {
        setIndex(index - 1)
      }
    } else if (e.keyCode === 39) {
      if (index === 3) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }
  }

  const autoSlide = () => {
    if (index === 3) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }



  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  useEffect(() => {
    const interval = setInterval(() => {
      autoSlide()
    }, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  return (
    <div className='crew'>
       <div className='title'>
        <h1><span>02</span> Meet your crew</h1>
      </div>
      <div className='crew-container'>
        <CrewDesc data={element}/>
        <div className='crew-nav'>
          <div className='crew-nav-items'>
            <button onClick={() => setIndex(0)} className={index === 0 ? 'active-crew' : ''}></button>
            <button onClick={() => setIndex(1)} className={index === 1 ? 'active-crew' : ''}></button>
            <button onClick={() => setIndex(2)} className={index === 2 ? 'active-crew' : ''}></button>
            <button onClick={() => setIndex(3)} className={index === 3 ? 'active-crew' : ''}></button>
          </div>
        </div>
      </div>
      <CrewImg data={element}/>
    </div>
  )
}


