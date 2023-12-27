import React from 'react'
import Navbar from '../components/Navbar'

const Contact = () => {
    return (
        <>
            <Navbar />
            <div style={{padding: "4px", height: "90vh", overflow:"auto" }}>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdkE_EtJTvRewGN41s5y39yHvoW40Yyaq1aq6QA8GBgfOouJw/viewform?embedded=true"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0">Loading…</iframe>
            </div>
        </>
    )
}

export default Contact