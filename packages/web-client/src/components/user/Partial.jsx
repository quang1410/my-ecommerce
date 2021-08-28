import React from 'react'

import Footer from './Footer'
import Header from './Header'

const Partial = (props) => {
    return (
        <>
            <Header {...props} />
                <div className="container">
                    <div className="main">
                        {props.children}
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default Partial
