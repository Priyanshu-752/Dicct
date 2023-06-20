import React from 'react'
import RegImg from './RegImg'
import "../../style/Register.css"

const Register = () => {
  return (
    <div >
      <RegImg />
      <div className='truck'>

      <header className='head'>Paper Submission</header>
        <desc className='dec'>Authors are invited to submit full papers in English of not more than 6 pages (including figures, tables & references) in IEEE/Springerformat. Submissions must present original work that has not been previously published, and is not under submission elsewhere. All articles will be reviewed for scientific quality by the technical program committee and external reviewers. <br/>
        Papers must be submitted electronically via on-line submission using the Easy Chair system at the following link: </desc>

        <header className='head'>Important Dates:</header>
<div className='sub'>
<table>
        <thead>
          <tr>
            <td>Submission of Full Papers Deadline</td>
            <td>15th Jully 2023</td>
            
          </tr>
          <tr>
            <td>Notification of Acceptance Deadline</td>
            <td>20thJully 2023</td>
         
          </tr>
          <tr>
            <td>Submission of Accepted Camera-Ready Paper Deadline</td>
            <td>25thJully 2023</td>
           
          </tr>
          <tr>
            <td>Author Registration Deadline</td>
            <td>30thJully 2023</td>
           
          </tr>
          <tr>
            <td>Conference Dates</td>
            <td>11-12th August 2023</td>
          </tr>
        </thead>
      </table>
      
</div>
{/* <div className='headss'>
<header className='heads'><span className='pro'>Estimated participants: </span> 50-100</header>
      <header className='heads'><span className='pro'>Proposed Publication:</span> 50-100</header>
</div> */}

      <header className='head'>Fees Structure</header>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Category</th>
            <th>Registration Fee</th>
          
          </tr>
        </thead>
        <thead>
          <tr>
            <td>1.</td>
            <td>Students</td>
            <td>3,000/-</td>
            
          </tr>
          <tr>
            <td>2.</td>
            <td>Students (with late fee)</td>
            <td>4,000/-</td>
          
          </tr>
          <tr>
            <td>3.</td>
            <td>Faculty</td>
            <td>5,000/-</td>
           
          </tr>
          <tr>
            <td>4.</td>
            <td>Industry</td>
            <td>6,000/-</td>
            
          </tr>
        </thead>
      </table>
      <button className='btn'>Register</button>
      <header className='head'>Proposed Outcome of The Conferences:</header>
      <desc className='dec'>• The Conferences will offer a premier setting for business professionals to network and report on the most recent advancements while also giving researchers and academics with  high productivity and quality a platform. to provide an overview of the current state of the art and to share new developments in computer, information science and its applications.<br/>
      • The Conference promotes important conceptual and applied contributions to all key areas of computer science, engineering, and information sciences.<br/>
      •	The conference invites authors to participate by submitting articles that demonstrate research findings, projects, surveying works, and industrial experiences that explain major advancements in the fields ofadvanced computing and information science.</desc>
      </div>
    </div>
  )
}

export default Register
