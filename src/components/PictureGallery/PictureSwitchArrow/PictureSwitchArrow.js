import React from 'react';
import './PictureSwitchArrow.css'

const PictureSwitchArrow = (props) => {
    const {classes,showMoreLessPictureRow,id} = props;

    return(
        <i className={classes} onClick={showMoreLessPictureRow} id={id}></i>
    )
}

export default PictureSwitchArrow;