import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom'

import Routes from '../routes/Routes'

const Layout = () => {
    
    return (
        <BrowserRouter>
            <Route render={(props)=>{
                return (
                    <Routes {...props}/>
                )
            }}/>
        </BrowserRouter>
    )
}

export default Layout

