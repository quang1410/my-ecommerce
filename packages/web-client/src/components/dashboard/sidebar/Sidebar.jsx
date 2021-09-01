import React from 'react'
import { Link,useLocation } from 'react-router-dom'

import './Sidebar.css'
import logo from '../../../assets/images/Logo.png'

import sidebar_items from '../../../assets/JsonData/sidebar_routes.json'

const SidebarItem = props => {
    const active = props.active ? 'active' : ''
    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active} `}>
                <i className={props.icon}></i>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

const Sidebar = () => {
    const location = useLocation();
    const activeItem = sidebar_items.findIndex(item => `/admin${item.route}` === location.pathname)
    return (
        <div className="sidebar">
            <Link to="/" className="sidebar__logo">
                <img src={logo} alt="company logo"/>
            </Link>
            {
                sidebar_items.map((item,index)=>(
                    <Link to={`/admin${item.route}`} key={index}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index===activeItem}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar
