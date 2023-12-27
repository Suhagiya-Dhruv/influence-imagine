import React from 'react'
import Navbar from '../../components/Navbar'
import Style from './style.module.css';

const VideoPage = () => {
    return (
        <>
            <Navbar />
            <div className={`${Style.mainServices}`}>
                <div className='w-1/3'>
                    <h1>Video Editing</h1>
                    <p>Transform your content into masterpieces through precise Video Editing, bringing your vision to life with professional finesse and creativity.</p>
                </div>
                <div className={`${Style.servicesImage}`}>

                </div>
            </div>
            <div>VideoPage</div>
        </>
    )
}

export default VideoPage