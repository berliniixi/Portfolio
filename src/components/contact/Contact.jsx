import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>stelios.taliadwros@outlook.com</h5>
            <a href="mailto:stelios.taliadworos@outlook.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messager</h4>
            <h5>Stelios Taliadwros</h5>
            <a href="https://m.me/stelios.omonoia.92" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Stelios Taliadwros</h5>
            <a href="https://api.whatsapp.com/send?=phone+35797637716" target="_blank">Send a message</a>
          </article>
        </div>

        {/*END OF CONTACT OPTIONS*/}

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        
        {/*END OF CONTACT FORM*/}

      </div>
    </section>
  )
}

export default Contact