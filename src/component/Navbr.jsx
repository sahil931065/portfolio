import React, { useEffect } from 'react'
import { navLinks } from '../constants'

const Navbr = () => {
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(()=>{
    const handleScroll = () => {
      if( window.scrollY>10 )
        setScrolled(true)
      
    }

    window.addEventListener('scroll' , handleScroll);
    return ()=> window.removeEventListener('scroll' , handleScroll)

    },[])

  return (
    <header className={`navbar  ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <a href="#hero" className="logo">Sahil Sidhu</a>
        
        <nav className='desktop'>
          <ul>
            {
              navLinks.map(({link , name})=>(
                <li key={name} className='group'>
                  <a href={link}><span>{name}</span>
                  <span className='underline'/>
                  </a>
                </li>
              ))
            }
          </ul>

        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact Me</span>
          </div>
        </a>
      </div>
    </header>
  )
}

export default Navbr