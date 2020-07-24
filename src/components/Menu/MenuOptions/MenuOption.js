import React from 'react';
import './MenuOptions.css';
import {NavLink} from 'react-router-dom';


const MenuOptions = (props) => {
    const {value,path} = props;
    return(
        <li className="menuOption"><NavLink to={path} exact>{value}</NavLink></li>
    )
}

export default MenuOptions;