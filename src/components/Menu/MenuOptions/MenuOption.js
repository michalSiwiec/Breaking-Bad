import React from 'react';
import './MenuOptions.css';


const MenuOptions = (props) => {
    const {clickMenuOption,id,value,classes} = props;

    return(
        <li onClick={clickMenuOption} id={id} className={classes}>{value}</li>
    )
}

export default MenuOptions;