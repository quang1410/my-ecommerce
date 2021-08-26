import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Routes from '../routes/Routes'

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={(props) =><Routes {...props}/>}/>
        </BrowserRouter>
    )
}

export default Layout
