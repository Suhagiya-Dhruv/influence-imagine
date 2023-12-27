import React from 'react'
import Navbar from '../components/Navbar'
import Service from '../components/Services';
import { ServicesCard } from '../components/Cards';
import Style from '../components/Services/style.module.css'
import { ServicesContent } from '../constant';

const Services = () => {
    return (
        <>
            <Navbar />
            <div className={`${Style.mainServices}`}>
                <div className='w-1/3'>
                    <h1>Our Services</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officiis dolores id eveniet minus cupiditate maxime quod nostrum voluptatem suscipit.</p>
                </div>
                <div className={`${Style.servicesImage}`}>

                </div>
            </div>
            <div className={`w-full`}>
                <div className={`flex justify-evenly flex-wrap ${Style.cardServices} `}>
                    {ServicesContent?.map((item) => {
                        return (
                            <ServicesCard title={item.title} content={item.subTitle} url={item.url} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Services