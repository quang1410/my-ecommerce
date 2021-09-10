import React from 'react'

import Partial from '../../components/dashboard/Partial/Partial'
import Helmet from '../../components/user/Helmet'
import Form from '../../components/dashboard/Form/Form'

const CreateProduct = () => {
    return (
        <Partial>
            <Helmet title="Trang tạo sản phẩm">
                <Form />
            </Helmet>
        </Partial>
    )
}

export default CreateProduct
