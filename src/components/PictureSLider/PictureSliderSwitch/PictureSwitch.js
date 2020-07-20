import React from 'react';
import './PictureSwitch.css';


const PictureSwitch = (props) => {
    const classes = "switch " + props.classes;
    return(
        <div className={classes} onClick={props.clickHandler} id={props.id}></div>
    )
}

export default PictureSwitch;