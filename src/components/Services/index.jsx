import React from 'react'
import { ServicesCard } from '../Cards'
import Style from './style.module.css'
import { ServicesContent, servicesMainContent, servicesSubContent } from '../../constant'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Services = () => {
    return (
        <div className={`${Style.ourServices}`}>
            <div className={`${Style.content}`}>
                <h2>Services</h2>
                <h2>{servicesMainContent}</h2>
                <h2>{servicesSubContent}</h2>
            </div>
            <div className={`flex justify-center flex-wrap ${Style.card} w-full`}>
                {ServicesContent?.slice(2).map((item)=>{
                    return(
                        <ServicesCard title={item.title} content={item.subTitle} url={item.url}/>
                    )
                })}
            </div>
            <Link to="/services" className={Style.viewAll}>More Services</Link>
        </div>
    )
}

export default Services