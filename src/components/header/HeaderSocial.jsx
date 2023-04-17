import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {SiDocker} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com' target="_blank"><AiFillGithub/></a>
        <a href='https://dribble.com' target='_blank'><SiDocker/></a>
      
    </div>
  )
}

export default HeaderSocials
