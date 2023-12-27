import React, { useState } from 'react'
import { portfolioOptions, portfolioOptionsContent } from '../../constant';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Style from './style.module.css'

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            className={`${Style.customTabPanel}`}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const Portfolio = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={`${Style.portfolio}`}>
            <div className={`${Style.content}`}>
                <h2 >Portfolio</h2>
            </div>
            <div sx={{ border: "1px solid blue" }}>
                <Tabs value={value} onChange={handleChange} centered
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: "white",
                        }
                    }}>
                    {portfolioOptions?.map((item) => {
                        return (
                            <Tab label={item.name} key={item.id} {...a11yProps(item.id)} />
                        );
                    })}
                </Tabs>
            </div>
            {portfolioOptionsContent?.map((item) => {
                return (
                    <CustomTabPanel value={value} index={item.id}>
                        <Typography variant='h5' className={`${Style.title} text-center`}>
                            {item.title}
                        </Typography>
                        <Typography className={`${Style.subTitle}`}>
                            {item.subTitle}
                        </Typography>
                        <div className={`${Style.imageContainer}`}>
                            {item?.image?.map((value, id) => {
                                return (
                                    <div key={id} className={`${Style.images}`}>
                                        {value}
                                    </div>
                                )
                            })}
                        </div>
                    </CustomTabPanel>
                )
            })}
        </div >
    )
}

export default Portfolio