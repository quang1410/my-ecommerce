import React,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Sidebar from '../sidebar/Sidebar'
import TopNav from '../TopNav/TopNav'

import '../../../assets/css/grid.css'
import '../../../assets/css/theme.css'
import '../../../assets/css/index.css'
import './Partial.css'

const Partial = (props) => {
    const { mode,color } = useSelector(state => state.theme)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch.theme.setMode(themeClass)

        dispatch.theme.setColor(colorClass)
    }, [dispatch])
    return (
      <div className={`layout ${mode} ${color}`}>
        <Sidebar/>
        <div className="layout__content">
          <TopNav />
          <div className="layout__content-main">{props.children}</div>
        </div>
      </div>
    );
}

export default Partial
