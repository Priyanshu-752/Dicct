import React from 'react'
import {IoLocationSharp, IoCalendarOutline} from 'react-icons/io5'
import "../style/HomeImg.css"

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <div className="into-img"  alt="IntroImg" />
      </div>
      <div className="content">
      <header className='poster'>1st International Conference on Advanced Computing and Information Science <br/> ICACIS 2023</header>
      <desc className='loc'><IoLocationSharp/>Graphic Era, Haldwani Campus</desc>
      <desc className='date'><IoCalendarOutline/>11-12th August 2023</desc>
        
        <p>Organized by<br/>Department of Computer Science Engineering.<br/>Graphic Era Hill University Haldwani</p>
       
      </div>
    </div>
  )
}

export default Heroimg
