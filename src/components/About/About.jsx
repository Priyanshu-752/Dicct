import React from 'react'
import AboutImg from './Aboutimg'
import "../../style/About.css"
import  AtImg  from "../../img/org.jpg"

const About = () => {
  return (
    <div>
      <AboutImg/>
      <div className='about'>

      <header>About Graphic Era Hill University, Haldwani</header>
      <desc>The 21st century is earmarked as Information Technology driven and India is at the Centre of global attraction and considered as a knowledge powerhouse.Advanced mechanisms have taken over the field of computing, with governments, along with private companies, embroiled in a high-stakes race to increase indigenous computing power for economic and strategic purposes.With India’s data generation at an all-time high, there is a need to improve computational capabilities by using advanced computing technologies.In this competitive and emerging era, upgrading the treasured directional knowledge is one of the prime factors to face the real-world challenges. It is a great challenge for the institution those are imparting education, to groom the students in the manner so that they could become self-reliant citizen. Keeping in mind, research experiences can transform faculties conception and understanding the reasonability of educational institute, the First International Conferences on Advanced Computing and Information Science (ICACIS-2023)will be organizing in the GEHU Haldwani campus.</desc>
      <img className="into" src={AtImg} alt="IntroImg" />

      <desc>The ICACIS-2023main objectives to bring together academicians, scientists and researchers to share their knowledge, expertise and experience in relation to developments in computing arena along with softwareand information sciences. It provides a unique interdisciplinary forum for new research findings on the performance of advanced computing, communication, material techniques and exploring the interface between the industry and real time environment with state-of-the-art techniques. The conference will provide a premier inter-disciplinary platform to establish a global relationship among the educators, researchers and practitioners. Also, it will help in presenting high quality research contributions describing original, unpublished results and discussing the most recent innovations, trends with concerns in the related areas of research.</desc>
      </div>
    </div>
  )
}

export default About
