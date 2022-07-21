import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {FaBook} from 'react-icons/fa'
import {RiServiceFill} from 'react-icons/ri'
import {AiFillMessage} from 'react-icons/ai'
import {FaIdCard} from 'react-icons/fa'
import { useState} from 'react'


const Nav = () => {

    const [activeNav , setActiveNav] = useState('#')

  return (
    <nav>

      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} > <FaUserCircle/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <FaBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}> <RiServiceFill/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}> <FaIdCard/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <AiFillMessage/></a>
    </nav>
  )
}

export default Nav