import React from 'react'
import Twitter from "./svgs/Twitter"
import Github from "./svgs/Github"
import Discord from "./svgs/Discord"



const Footer = () => {
  return (
    <div className='footer'>
      <div className="left-foot">
        <Twitter/>
        <Github/>
        <Discord/>
      </div>
      <div className="right-foot">
        <ul className='navlist'>
          <li className='nav-item'><a href='#'>Documentation</a></li>
          <li className='nav-item'><a href='#'>Tutorials</a></li>
          <li className='nav-item'><a href='#'>Risks</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer