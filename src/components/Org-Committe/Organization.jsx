import React from 'react'
import OrgImg from './OrgImg'
import { Track } from './Track'
const Organization = () => {
  return (
    <div>
      <OrgImg/>
      <div className='box'>
        <Track/>
      </div>
    </div>
  )
}

export default Organization
