import React from 'react'
import HeroImg from './Heroimg'
import "../style/Home.css"
import  HmImg  from "../img/hm.jpg"
const Home = () => {
  return (
    <div>
     <HeroImg  />
     <div className='about'>

<header className='head'> Graphic Era Hill University, Haldwani</header>
<div className='container'>
<img className="images" src={HmImg} alt="IntroImg" />
<desc className='text'>Graphic Era Hill University is the culmination of the hard work of its visionary founder, Prof. (Dr.) Kamal Ghanshala, who had the dream to change the destiny of thousands of youths through quality and holistic education. Graphic Era Hill University (GEHU) is a renowned institution of higher education located in Uttarakhand, India. The university has a vast and modern campus that provides students with a conducive learning environment. The campus is equipped with modern infrastructure, including state-of-the-art classrooms, well-equipped laboratories, libraries, sports facilities. GEHU places great emphasis on research and innovation. The university encourages students and faculty members to engage in research activities, publish papers in reputed journals, and participate in national and international conferences. This research-driven approach helps in creating a vibrant academic environment and contributes to the advancement of knowledge in various disciplines.
{/* <span className='left'> The ICACIS-2023main objectives to bring together academicians, scientists and researchers to share their knowledge, expertise and experience in relation to developments in computing arena along with softwareand information sciences. It provides a unique interdisciplinary forum for new research findings on the performance of advanced computing, communication, material techniques and exploring the interface between the industry and real time environment with state-of-the-art techniques. The conference will provide a premier inter-disciplinary platform to establish a global relationship among the educators, researchers and practitioners. Also, it will help in presenting high quality research contributions describing original, unpublished results and discussing the most recent innovations, trends with concerns in the related areas of research.</span>*/}</desc> 
</div>
</div>
    </div>
    
  )
}

export default Home
