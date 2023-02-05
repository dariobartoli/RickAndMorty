import React from 'react'
import '../assets/styles/footer.css'

const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className='react'>
            <img src="assets/image/React-icon.svg.png" className='icon' />
        <p>React Js</p>
        </div>
        <p>Created by: <a href='https://github.com/dariobartoli?tab=repositories' className='span' target='_blank'>Darío Bartoli</a></p>
    </div>
  )
}

export default Footer