
import React from 'react';
import './PictureArrow.css';
import '../../../fontello/fontello-bf52eb07/css/fontello.css';

const PictureArrow = (props) => {

    const {className,id,clickHandler} = props;

    return(
        <i className={className} id={id} onClick={clickHandler}></i>
    )
}

export default PictureArrow;