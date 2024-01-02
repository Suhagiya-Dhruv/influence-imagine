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
    <div>
    <div>
          <ul>
            <li>
              <strong>User Research:</strong> Dive into the needs and aspirations of your target audience through thorough user research.
            </li>
            <li>
              <strong>Information Architecture:</strong> Craft a seamless structure for your digital product, ensuring users easily find the information they seek.
            </li>
            <li>
              <strong>User Interface Design:</strong> Bring your product to life with visually engaging elements - from buttons to menus - for an immersive user experience.
            </li>
            <li>
              <strong>Interaction Design:</strong> Define the user journey and experience, ensuring a seamless and intuitive interaction with your product.
            </li>
            <li>
              <strong>Usability Testing:</strong> Validate the user-friendliness of your digital product through rigorous testing, ensuring it aligns perfectly with user needs and expectations.
            </li>
          </ul>
        </div>
    </div>
    </>
  )
}

export default UIPages