import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ year experience</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Around the world.</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
            As a full stack data scientist, I have expertise in all layers of
            the technology stack used for data analysis, front-end development,
            back-end development, and database management. I have a strong
            passion for my work and I'm committed to continuous learning and
            personal growth in my field. I see learning as a lifelong journey
            that will help to expand the skill set, stay up-to-date with the
            latest industry trends, and continue to excel as a data scientist.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
