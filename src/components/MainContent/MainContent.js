import React from 'react';
import {Route,Switch} from 'react-router-dom';
import PictureSlider from '../PictureSLider/PictureSlider';
import PictureGallery from '../PictureGallery/PictureGallery';
import Heroes from '../Heroes/Heroes';
import Story from '../Story/Story';
import Error from '../Error/Error';

const MainContent = () => {

    return (
      <Switch>
        <Route path="/" component={PictureSlider} exact/>
        <Route path="/Story" component={Story} exact/>
        <Route path="/Watch" component={Heroes} exact/>
        <Route path="/pictureGallery" component={PictureGallery} exact />
        <Route component={Error}/>
      </Switch>
    )
}

export default MainContent;