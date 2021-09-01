import React from 'react'

import Partial from '../../components/user/Partial'
import Helmet from '../../components/user/Helmet'
import Cart from '../../components/user/Cart/Cart'

const CartPage = (props) => {
    return (
        <Partial>
            <Helmet title="Giỏ hàng">
                <Cart/>
            </Helmet>
        </Partial>
    )
}

export default CartPage
