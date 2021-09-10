import React from 'react'
import { Route,Switch } from 'react-router-dom'

import Home from '../pages/user/Home'
import Product from '../pages/user/Product'
import Catalog from '../pages/user/Catalog'
import Cart from '../pages/user/CartPage' 
import DashBoard from '../pages/dashboard/Dashboard'
import Customers from '../pages/dashboard/Customers'
import Login from '../components/user/Form/Login'
import CreateProduct from '../pages/dashboard/CreateProduct'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/catalog/:slug' component={Product}/>
            <Route path='/catalog' component={Catalog}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/admin/create-product' exact component={CreateProduct}/>
            <Route path='/admin/customers' exact component={Customers}/>
            <Route path='/admin' component={DashBoard}/>
            <Route path='/login' component={Login}/>
        </Switch>
    )
}

export default Routes
