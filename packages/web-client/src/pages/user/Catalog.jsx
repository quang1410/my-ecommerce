import React from 'react'

import Footer from '../../components/user/Footer'
import Header from '../../components/user/Header'

const Catalog = (props) => {
    return (
        <div>
            <Header {...props} />
                <div className="container">
                    <div className="main">
                        Catalog
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Catalog
