import React from 'react'
import Navbar from '../components/Navbar'
import MainSection from '../components/MainSection'
import Services from '../components/Services'
import Aboutus from '../components/About'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <MainSection />
            <Services />
            {/* <Portfolio /> */}
            <Aboutus />
            <Footer/>
        </>
    )
}

export default Home