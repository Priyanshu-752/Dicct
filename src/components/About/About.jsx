import React from 'react'
import AboutImg from './Aboutimg'
import "../../style/About.css"
import  AtImg  from "../../img/org.jpg"

const About = () => {
  return (
    <div>
      <AboutImg/>
      <div className='about_1'>

      <header className='head_1'>About Event</header>
      <div className='container_1'>
      <img className="image_1" src={AtImg} alt="IntroImg" />
      <desc className='text_1'>The 21st century is earmarked as Information Technology driven and India 
      is at the Centre of global attraction and considered as a knowledge powerhouse.Keeping in mind, 
      research experiences can transform faculties conception and understanding the reasonability of 
      educational institute, the First International Conferences on Advanced Computing and Information
       Science (ICACIS-2023) will be organizing in the GEHU Haldwani campus. The ICACIS-2023main objectives
        to bring together academicians, scientists and researchers to share their knowledge, expertise and
         experience in relation to developments in computing arena along with softwareand information sciences.
          It provides a unique interdisciplinary forum for new research findings on the performance of advanced
           computing, communication and
            real time environment with state-of-the-art techniques.Also, it will help in presenting high quality
            research contributions describing original, unpublished results and discussing the most recent innovations
             trends with concerns in the related areas of research.
     {/* <span className='left'> The ICACIS-2023main objectives to bring together academicians, scientists and researchers to share their knowledge, expertise and experience in relation to developments in computing arena along with softwareand information sciences. It provides a unique interdisciplinary forum for new research findings on the performance of advanced computing, communication, material techniques and exploring the interface between the industry and real time environment with state-of-the-art techniques. The conference will provide a premier inter-disciplinary platform to establish a global relationship among the educators, researchers and practitioners. Also, it will help in presenting high quality research contributions describing original, unpublished results and discussing the most recent innovations, trends with concerns in the related areas of research.</span> */}</desc>
      </div>
      </div>
    </div>
  )
}

export default About
