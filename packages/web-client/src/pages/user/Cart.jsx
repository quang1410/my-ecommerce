import React from 'react'

import Footer from '../../components/user/Footer'
import Header from '../../components/user/Header'

const Cart = (props) => {
    return (
        <div>
            <Header {...props} />
                <div className="container">
                    <div className="main">
                        Cart
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Cart
