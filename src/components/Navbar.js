import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'


export default function Navbar(){

    const [click, setClick] = useState(0);
    

  return (
    <div>
        <nav className='navbar'>
        <Link to='/' className='navbar-logo'/>    
        <div className='line'></div>
            <div className='navbar-container'> 
                <ul className="nav-menu">
                    <li className='nav-item'>
                        <Link to='/' onClick={() => setClick(0)} className={click===0? 'nav-links active': 'nav-links'}>00 HOME</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/destination' onClick={() => setClick(1)} className={click===1? 'nav-links active': 'nav-links'}>01 DESTINATION</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/crew' onClick={() => setClick(2)} className={click===2? 'nav-links active': 'nav-links'}>02 CREW</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/technology' onClick={() => setClick(3)} className={click===3? 'nav-links active': 'nav-links'}>03 TECHNOLOGY</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
