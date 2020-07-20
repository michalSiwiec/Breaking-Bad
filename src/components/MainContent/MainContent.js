import React from 'react';
import './MainContent.css';
import PictureSlider from '../PictureSLider/PictureSlider';
import PictureGallery from '../PictureGallery/PictureGallery';

const MainContent = (props) => {

    let content;
    // console.log(props.selectedOption);

    switch(props.selectedOption){
        case 1:
          // alert(`menu option1`);
          content = <PictureSlider/>
          break;
        case 2:
            // alert(`menu option2`);
          break;
        case 3:
            // alert(`menu option3`);
          break;
        case 4:
            content = <PictureGallery/>
          break;
        default:
            // alert(`nothing`);
          break;
      }

    return (
        <span>{content}</span>
    )
}

export default MainContent;