import React from 'react'

import Footer from '../../components/user/Footer'
import Header from '../../components/user/Header'

const Product = (props) => {
    return (
        <div>
            <Header {...props} />
                <div className="container">
                    <div className="main">
                        Product detail
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Product
