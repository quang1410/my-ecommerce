import React, { useEffect } from 'react'
import { BrowserRouter,Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Sidebar from '../sidebar/Sidebar'
import TopNav from '../TopNav/TopNav'
import Routes from '../Routes'

import './Layout.css'
import { themeActions } from './../../Store/Reducers/ThemeSlice';

const Layout = () => {
    const { mode,color } = useSelector(state => state.theme)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(themeActions.setMode(themeClass))

        dispatch(themeActions.setColor(colorClass))
    }, [dispatch])
    return (
        <BrowserRouter>
            <Route render={(props)=>(
                <div className={`layout ${mode} ${color}`}>
                    <Sidebar {...props} />
                    <div className="layout__content">
                        <TopNav/>
                        <div className="layout__content-main">
                            <Routes/>
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default Layout
