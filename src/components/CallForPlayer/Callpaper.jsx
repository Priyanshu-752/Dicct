import React from 'react'
import CallPaper from './Callimg'
import "../../style/CallPaper.css"
import { Track } from "./Track"

const Callpaper = () => {
  return (
    <>
      <CallPaper />
      <div className='box'>
        
        <desc>
The conference includes a wide range of cutting-edge subjects relating to advanced computing methods associated with various branches of cutting-edge software information sciences and cutting-edge technologies. An international group of professionals will gather for the peer-reviewed ICACIS-2023 conference.Authors are encourage to submit their high quality research article's abstract:(Not limited to the topics mentioned below)
</desc>
          <Track />
         <header>Submission Rules</header>
         <desc>• The length of all papers submitted to the conference should not exceed 4 to 6 printed pages (10 pt font) in double columns, and they must be written in English.<br/>
•	Authors should send ICACIS 2023 their original, unpublished work in PDF or MS Word IEEE format.<br/>
•	Submissions must adhere to the prescribed IEEE conference template, which may be found here (https://www.ieee.org/conferences/publishing/templates.html).<br/>
•	The Technical Programme Committee reserves the right to decide whether to accept a paper.<br/>
•	Please be aware that in order to submit papers, authors must register their email addresses with the conference link.
</desc>
<header>Publication Ethics</header>
<desc className='deku'>Prior to being forwarded to a pre-conference review, each paper submitted to the ICACIS 2023 will be examined for plagiarized content using anti-plagiarism software (Turnitin). High standards for publishing ethics should be followed by authors. Falsification or fabrication of data, plagiarism, including the duplicate publishing of the author's own work without the appropriate reference, and misuse of the work are all prohibited.<br/>
For more details, please refer to IEEE Web Page on Plagiarism through the following link: https://www.ieee.org/publications/rights/plagiarism/plagiarism.html
</desc>

        </div>
    </>
  )
}

export default Callpaper
