import React from 'react'
import ConImg from './Contactimg'
import { FaPhoneSquareAlt, FaFacebookSquare,FaInstagram,FaLinkedinIn, FaTwitter} from 'react-icons/fa' 
import {HiOutlineMail} from 'react-icons/hi'
import {IoLocationSharp} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import "../../style/Map.css"

const Contact = () => {
  return (
    <>
      <ConImg/>
    {/* <div className = "contact-section">
    
      <div className = "contact-body">
      <h1>Get in Touch</h1>
        <div className = "contact-form">
          <form>
            <div>
              <input type = "text" className = "form-control" placeholder="First Name" />
              <input type = "text" className = "form-control" placeholder="Last Name" />
            </div>
            <div>
              <input type = "email" className = "form-control" placeholder="E-mail" />
              <input type = "text" className = "form-control" placeholder="Phone" />
            </div>
            <textarea rows = "5" placeholder="Message" className = "form-control"></textarea>
            <input type = "submit" className = "send-btn" value = "send message" />
          </form>

          <div className='contact info'>
        
         <div className='infoBox'>
         <h3>Contact Info</h3>
          <div>
            <span><IoLocationSharp/></span>
            <p>XYZ halwani, Uttra Khand ,INDIA </p>
          </div>
          <div>
            <span><HiOutlineMail /></span>
            <a href='mailto:icacis2024@gehu.ac.in'>icacis2024@gehu.ac.in</a>
          </div>
          <div>
            <span><FaPhoneSquareAlt/></span>
            <a href='mailto:icacis2024@gehu.ac.in'>+91 123 456 7890</a>
          </div>

          <ul className="sci">
            <li><Link to="#"><FaFacebookSquare/></Link></li>
            <li><Link to="#"><FaTwitter/></Link></li>
            <li><Link to="#"><FaInstagram /></Link></li>
            <li><Link to="#"><FaLinkedinIn /></Link></li>
          </ul>
         </div>
        </div>
        </div>
      

      <div className = "map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.355774734666!2d79.51697327521242!3d29.12469497539961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0854e46fbbcbb%3A0xe8ad2dca724e9699!2sGraphic%20Era%20Hill%20University%20Haldwani%20Campus!5e0!3m2!1sen!2sin!4v1686643619472!5m2!1sen!2sin"  
      width="100%" height="450" frameorder="0"
        style={{ border: 0 }}
        allowFullScreen="" 
        loading="lazy"
         referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>    
    </div>
    </div> */}

      
    <div className = "contact-section">
     


      <div className = "contact-body">
        <div className = "contact-info">
        <h2>Get in Touch</h2>
        </div>

        <div className = "contact-form">
          <form>
            <div>
              <input type = "text" className = "form-control" placeholder="First Name" />
              <input type = "text" className = "form-control" placeholder="Last Name" />
            </div>
            <div>
              <input type = "email" className = "form-control" placeholder="E-mail" />
              <input type = "text" className = "form-control" placeholder="Phone" />
            </div>
            <textarea rows = "5" placeholder="Message" className = "form-control"></textarea>
            <input type = "submit" className = "send-btn" value = "send message" />
          </form>

          <div className='contact info'>
         {/* <h3>Contact Info</h3> */}
         <div className='infoBox'>
         {/* <h3>Contact Info</h3> */}
          <div>
            <span><IoLocationSharp/></span>
            <p>XYZ halwani, Uttra Khand ,INDIA </p>
          </div>
          <div>
            <span><HiOutlineMail /></span>
            <a href='mailto:icacis2024@gehu.ac.in'>icacis2024@gehu.ac.in</a>
          </div>
          <div>
            <span><FaPhoneSquareAlt/></span>
            <a href='mailto:icacis2024@gehu.ac.in'>+91 123 456 7890</a>
          </div>

          <ul className="sci">
            <li><Link to="#"><FaFacebookSquare/></Link></li>
            <li><Link to="#"><FaTwitter/></Link></li>
            <li><Link to="#"><FaInstagram /></Link></li>
            <li><Link to="#"><FaLinkedinIn /></Link></li>
          </ul>
         </div>
        </div>
      </div>

      <div className = "map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.355774734666!2d79.51697327521242!3d29.12469497539961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0854e46fbbcbb%3A0xe8ad2dca724e9699!2sGraphic%20Era%20Hill%20University%20Haldwani%20Campus!5e0!3m2!1sen!2sin!4v1686643619472!5m2!1sen!2sin"  
      width="100%" height="450" frameorder="0"
        style={{ border: 0 }}
        allowFullScreen="" 
        loading="lazy"
         referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      </div>
      </div>
    </>
  )
}

export default Contact
