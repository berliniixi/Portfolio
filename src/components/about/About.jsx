import React from 'react'
import './about.css'
import ME from '../../assets/profil3.png'
import {FaAward} from 'react-icons/fa'
import {TbStairsUp} from 'react-icons/tb'
import {VscWorkspaceTrusted} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className='about__me-img'>
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>0-1 Years Working</small>
            </article>
        
            <article className='about__card'>
              <TbStairsUp className='about__icon'/>
              <h5>Career Level</h5>
              <small>Junior Front-End Developer</small>
            </article>
          
            <article className='about__card'>
              <VscWorkspaceTrusted className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>

          <p>
          My enthusiasm about computers brought me to the department of Computer Science
          of Frederick University were I'm currently studying. I'm fully passionate about
          programming. I am always curious to find new things to accomplish and always trying
          to improve my skills to the highest level of productivity. Always eager to learn new
          things and help others with learning as well. Equipped with experience in team work
          and problem solving as well as hands on experience with programming languages.
          Open for new opportunities to learn and grow
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>

    </section>
  )
}

export default About