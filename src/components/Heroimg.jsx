import React from 'react'
import IntroImg from '../img/img.jpg'
import {IoLocationSharp, IoCalendarOutline} from 'react-icons/io5'
import "../style/HomeImg.css"

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
      <header className='poster'>International Conference on Advanced Computing and Information Science (ICACIS-2023) </header>
      <desc className='loc'><IoLocationSharp/>Graphic Era, Haldwani Campus</desc>
      <desc className='date'><IoCalendarOutline/>11-12th August 2023</desc>
        <p>Welcome</p>
        <h1>ICACIS 2023 | Graphic Era Hill University Haldwani</h1>
       
      </div>
    </div>
  )
}

export default Heroimg
