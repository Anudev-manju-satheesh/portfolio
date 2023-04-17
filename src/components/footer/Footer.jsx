import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'>
        Anudev
      </a>
      <ui className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ui>
      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebookF/></a>
        <a href='https://linkedin.com'><FaLinkedinIn/></a>
        <a href='https://twitter.com'><FaTwitter/></a>
      </div>
      <div className='footer_copyright'>
        <small>&copy; Anudev Manju Satheesh</small>
      </div>
    </footer>
  )
}

export default Footer
