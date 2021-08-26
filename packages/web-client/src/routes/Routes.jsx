import React from 'react'
import { Route,Switch } from 'react-router-dom'

import Home from '../pages/user/Home'
import Product from '../pages/user/Product'
import Catalog from '../pages/user/Catalog'
import Cart from '../pages/user/Cart'
import HomeAdmin from '../pages/dashboard/Home'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/catalog/:slug' component={Product}/>
            <Route path='/catalog' component={Catalog}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/admin' component={HomeAdmin}/>
        </Switch>
    )
}

export default Routes
