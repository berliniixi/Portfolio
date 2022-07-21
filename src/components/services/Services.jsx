import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

const Services = () => {
  return (

    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>
            <ul className="service__list">
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Visual Design</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Information Architecture</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Interaction Design</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Usability</p>
              </li>
            </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>
            <ul className="service__list">
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Designing user interfaces and navigation menus</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Writing and reviewing code for sites, typically HTML, JavaScript</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Integrating multimedia content onto a site</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Troubleshooting problems with performance or user experience</p>
              </li>
            </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>GAME DEVELOPMENT</h3>
          </div>

            <ul className="service__list">
              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Planning game projects</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Using computer software to create programming code and create game elements</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Creating game menus</p>
              </li>

              <li>
                <BsCheckLg className='service__list-icon'/>
                <p>Testing and debugging games</p>
              </li>

            </ul>
        </article>

        {/* END OF GAME DEVELOPMENT */}
      </div>
    </section >
  )
}

export default Services