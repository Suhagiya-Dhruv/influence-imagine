import React from 'react'
import Navbar from '../../components/Navbar'
import Style from './style.module.css';

const UIPages = () => {
  return (
    <>
    <Navbar/>
    <div className={`${Style.mainServices}`}>
        <div className='w-1/3'>
          <h1>UI/UX Designing</h1>
          <p>Craft seamless user experiences with our UI/UX Designing expertise, ensuring intuitive and visually appealing interfaces for optimal engagement.</p>
        </div>
        <div className={`${Style.servicesImage}`}>

        </div>
      </div>
    <div>UIPages</div>
    </>
  )
}

export default UIPages