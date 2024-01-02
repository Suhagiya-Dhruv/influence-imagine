import React from 'react'
import Navbar from '../../components/Navbar'
import Style from './style.module.css';

const DevelopmentPage = () => {
  return (
    <>
      <Navbar />
      <div className={`${Style.mainServices}`}>
        <div className='w-1/3'>
          <h1>Web and app Development</h1>
          <p>A Comprehensive Guide to Creative and User-Friendly Application Design and Development for Web and Mobile Platforms</p>
        </div>
        <div className={`${Style.servicesImage}`}>

        </div>
      </div>
      <div>
        <div><div>
          <ul>
            <li>
              <strong>Backend Development:</strong> Develop robust server-side components, including databases and APIs, to enhance the functionality of both web and mobile applications.
            </li>
            <li>
              <strong>Optimization Services:</strong> Optimize app and web solutions for increased visibility, improved search results, and enhanced download rates.
            </li>
            <li>
              <strong>Analytics and Reporting:</strong> Collect and analyze user data to gain insights into performance metrics and user behavior for continual improvement.
            </li>
            <li>
              <strong>Upgrades and Enhancements:</strong> Stay ahead with ongoing development, introducing new features and enhancements to elevate the overall functionality and user experience of your web and mobile applications.
            </li>
          </ul>
        </div></div>
      </div>
    </>
  )
}

export default DevelopmentPage