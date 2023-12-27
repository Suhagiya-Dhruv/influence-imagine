import React from 'react'
import Style from './styel.module.css';
import { ServicesHomeImage } from '../../assets/icon/Icons';
import { mainPageContent, mainSecondaryContent } from '../../constant';

const MainSection = () => {
    return (
        <div className={`${Style.main} flex justify-evenly items-center`}>
            <div className={Style.content}>
                <div className={`${Style.mainContent}`}>
                    {mainPageContent}
                </div>
                <div className={`${Style.mainSubContent}`}>
                    {mainSecondaryContent}
                </div>
            </div>
            <div className={Style.image}>
                <ServicesHomeImage />
            </div>
        </div>
    )
}

export default MainSection