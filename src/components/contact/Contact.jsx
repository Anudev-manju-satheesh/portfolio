import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { MdWhatsapp } from 'react-icons/md'
import { SlSocialLinkedin } from 'react-icons/sl'
import  { useRef } from 'react'
import emailjs from 'emailjs-com'

const data = [
  {
    type: 'Email',
    icon: <MdOutlineEmail className='contact__option-icon' />,
    content: 'anudev.s.kumar@gmail.com',
    link: 'mailto:anudev.s.kumar@gmail.com',
  },
  {
    type: 'Whatsapp',
    icon: <MdWhatsapp className='contact__option-icon' />,
    content: '+91 889 177 2478',
    link: 'https://wa.me/+918891772478',
  },
  {
    type: 'Linkedin',
    icon: <SlSocialLinkedin className='contact__option-icon' />,
    content: 'Anudev Manju Satheesh',
    link: 'https://www.linkedin.com/in/anudev-manju-satheesh-218b71175/',
  },
]

const Contact = () => {
    const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault()

        emailjs
          .sendForm(
            'service_ak45927',
            'template_wg9u10p',
            form.current,
            'urF0hS99Rl1PY-pQz'
          )
          e.target.reset()
      }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          {data.map(({ type, icon, content, link }, index) => {
            return (
              <article className='contact__option'>
                {icon}
                <h4>{type}</h4>
                <h5>{content}</h5>
                <a href={link} target='_blank'>
                  Connect
                </a>
              </article>
            )
          })}
        </div>
        <form action='' ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your full name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your message'
            req
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
