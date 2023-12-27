import React from 'react'
import Navbar from '../../components/Navbar'
import Style from './style.module.css';

const DevelopmentPage = () => {
  return (
    <>
      <Navbar />
      <div className={`${Style.mainServices}`}>
        <div className='w-1/3'>
          <h1>Web Development</h1>
          <p>Bring your digital presence to life with our Web and App Development services, creating tailored solutions that resonate with your audience and drive success.</p>
        </div>
        <div className={`${Style.servicesImage}`}>

        </div>
      </div>
      <div>DevelopmentPage</div>
    </>
  )
}

export default DevelopmentPage