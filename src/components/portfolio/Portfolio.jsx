import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.webp'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Large language model ',
    github: 'https://www.github.com',
    live: '',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Stock Price Analytics',
    github: 'https://www.github.com',
    live: '',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Tensorflow JS',
    github: 'https://www.github.com',
    live: '',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Generative Networks',
    github: 'https://www.github.com',
    live: '',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Analyse your data',
    github: 'https://www.github.com',
    live: '',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Diffusion AI',
    github: 'https://www.github.com',
    live: '',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
            data.map(({id,image,title,github,live}) =>{
                return (
                  <article key={id} className='portfolio__item'>
                    <div className='portfolio__item-image'>
                      <img src={image} alt='' />
                    </div>
                    <h3>{title}</h3>
                    <div className='portfolio__item-cta'>
                      <a
                        href={github}
                        className='btn'
                        target='_blank'
                      >
                        GitHub
                      </a>
                      <a href={live} className='btn btn-primary' target='_blank'>
                        Live Project
                      </a>
                    </div>
                  </article>
                )
            })
        }
     
      </div>
    </section>
  )
}

export default Portfolio
