import React from 'react'
import Navbar from '../../components/Navbar'
import Style from './style.module.css'

const GraphicePage = () => {
  return (
    <>
    <Navbar/>
    <div className={`${Style.mainServices}`}>
        <div className='w-1/3'>
          <h1>Graphice Design</h1>
          <p>Elevate your brand with captivating Graphics Designing that speaks volumes, leaving a lasting impression on your audience.</p>
        </div>
        <div className={`${Style.servicesImage}`}>

        </div>
      </div>
    <div>GraphicePage</div>
    </>
  )
}

export default GraphicePage