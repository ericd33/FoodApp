import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
    <div className='nav-wrapper'>
        <ul>
            <li><a href='/home'>Home</a></li>
            <li><a href='/create'>Create</a></li>
            <li><a href='/recipe'>About</a></li>
        </ul>
    </div>
  )
}
