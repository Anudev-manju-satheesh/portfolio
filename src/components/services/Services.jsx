import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Python Code Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Write clean and readable codes with profiling. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Code optimization and memory optimization. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web data extraction fw (selenium,scrapy).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Data viz fw. (pycaret, plotly dash.) </p>
            </li>
          </ul>
        </article>
        {/* NEXT SECTION */}
        <article className='service'>
          <div className='service__head'>
            <h3>Machine and Deep Learning</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Problem understanding and finding right solution. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design neural architecture for image and text data.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Distributed learning and federated learning strats. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>MLOPS, Model fine tuning and HP tuning </p>
            </li>
          </ul>
        </article>
        {/* NEXT SECTION */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Backend fw (Django, flask and node) </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>SQL and NoSQL database handling. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>API creation and deployment using FastAPI</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Manage and deployment in production (apache2) </p>
            </li>
          </ul>
        </article>
        {/* FINISHED */}
      </div>
    </section>
  )
}

export default Services
