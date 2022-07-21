import React from 'react'
import './header.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/feed/" rel='noreferrer' target="_blank"> <BsLinkedin/></a>
        <a href="hhttps://github.com/berliniixi" rel='noreferrer' target="_blank"> <BsGithub/></a>
        <a href="https://www.instagram.com/" rel='noreferrer' target="_blank"> <BsInstagram/> </a>
    </div>
  )
}

export default HeaderSocials