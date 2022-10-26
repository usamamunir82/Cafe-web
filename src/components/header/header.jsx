import React from 'react'
import './header.css'
import logo from '../../assets/images/soree.png'

function Header() {
  return (
    <div className='container'>
        <div className='headerContainer'>
            <span className='headerImg'><p>SOREÉ</p></span>
            <div >
                <ul className='headerlists'>
                   <a href=''> <li>Home</li></a>
                   <a href=''><li>Menu</li></a>
                   <a href=''><li>Facility</li></a>
                   <a href=''><li>Reservation</li></a>


                </ul>
            </div>
        </div>

    </div>
  )
}

export default Header