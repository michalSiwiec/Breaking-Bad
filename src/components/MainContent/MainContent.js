import React from 'react';
import {Route,Switch} from 'react-router-dom';
import PictureSlider from '../PictureSLider/PictureSlider';
import PictureGallery from '../PictureGallery/PictureGallery';
import Error from '../Error/Error';

const MainContent = () => {

    return (
      <Switch>
        <Route path="/" component={PictureSlider} exact/>
        <Route path="/Story" component={undefined} exact/>
        <Route path="/Watch" component={undefined} exact/>
        <Route path="/pictureGallery" component={PictureGallery} exact />
        <Route component={Error}/>
      </Switch>
    )
}

export default MainContent;