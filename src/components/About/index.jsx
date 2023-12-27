import React from 'react'
import { aboutContact, aboutMainContent, aboutSubContent, aboutUsCardContent } from '../../constant'
import Style from './style.module.css';
import { AboutCard } from '../Cards';
import { Typography } from '@mui/material';

const Aboutus = () => {
    return (
        <div className={`${Style.aboutUs}`}>
            <div className={`${Style.content}`}>
                <h2 >About us</h2>
                <h2>{aboutMainContent}</h2>
                <h2>{aboutSubContent}</h2>
            </div>
            <div className={`${Style.aboutContent}`}>
                <div className={`flex flex-wrap gap-8 ${Style.card}`}>
                    {aboutUsCardContent?.map((item) => {
                        return (
                            <AboutCard title={item.title} icon={item.icon} content={item.subTitle} key={item.id}/>
                        )
                    })}
                </div>
                <div className='flex flex-col gap-2'>
                    <Typography variant='h4' className={`${Style.titleAbout} ${Style.titleCompanyName}`}>
                        {aboutContact.name}
                    </Typography>
                    <Typography>
                        <Typography variant='h6' className={`${Style.titleAbout}`}>
                            Call Anytime
                        </Typography>

                        +91 {aboutContact.mobile}
                        <br />
                        +91 {aboutContact.phone}
                    </Typography>
                    <Typography>
                        <Typography variant='h6' className={`${Style.titleAbout}`}>
                            Send Email
                        </Typography>
                        {aboutContact.email}
                    </Typography>
                    <Typography>
                        <Typography variant='h6' className={`${Style.titleAbout}`}>
                            Visit Us
                        </Typography>
                        {aboutContact.address}
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default Aboutus