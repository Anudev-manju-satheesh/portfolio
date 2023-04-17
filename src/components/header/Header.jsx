import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.jpeg'
import HeaderSocials from './HeaderSocial'

const Header = () => {
  return (
   <header>
    <div className="container header__container">
        <h5>I'm</h5>
        <h1>Anudev S Kumar</h1>
        <h5 className="text-light">
            Fullstack Data Scientist
        </h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
            <img src={Me} alt='me'/>
        </div>

        <a href='#contact'className='scroll__down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header
