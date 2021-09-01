import React from 'react'
import {Route, Switch} from 'react-router-dom'

import DashBoard from '../Pages/Dashboard'
import Customers from '../Pages/Customers';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={DashBoard}/>
            <Route path='/customers' component={Customers}/>
        </Switch>
    )
}

export default Routes
