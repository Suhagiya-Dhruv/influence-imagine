import React from 'react'
import Navbar from '../../components/Navbar'
import Style from './style.module.css'

const ModelingPage = () => {
  return (
    <>
      <Navbar />
      <div className={`${Style.mainServices}`}>
        <div className='w-1/3'>
          <h1>3D Modeling</h1>
          <p>Immerse your audience in a three-dimensional world with our cutting-edge 3D modeling, where imagination meets reality for stunning visual experiences.</p>
        </div>
        <div className={`${Style.servicesImage}`}>

        </div>
      </div>
      <div>ModelingPage</div>
    </>
  )
}

export default ModelingPage