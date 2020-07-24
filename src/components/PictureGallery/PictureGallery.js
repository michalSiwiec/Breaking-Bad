import React from 'react';
import PictureSwitchArrow from '../PictureGallery/PictureSwitchArrow/PictureSwitchArrow';
import PictureGalleryImage from '../PictureGallery/PIctureGalleryImage/PictureGalleryImage';
import './PictureGallery.css';
import WaitingAnimation from './WaitingAnimation/WaitingAnimation';
import '../../fontello/fontello-7ff14d85/css/fontello.css';


class PictureGallery extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            isHide: [],
            howManyRowShown: 1,
            isSomeBiggerPictureActive: false
        }
        this.data = [];
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {

        let secondaryIsHide = this.state.isHide.slice();

        setTimeout(() => {

            fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => {

                //wyciąganie wskazanej liczby obiektów
                for(let i = 0; i < 25; ++i){
                    this.data.push({
                        id: data[i].id,
                        title: data[i].title,
                        url: data[i].url
                    })
                }

                //ustawianie widocznosci dla poszczegolnych row
                for(let i=0; i < 5; ++i){
                    secondaryIsHide.push(" hide");
                }
                secondaryIsHide[0] = " visible";

                this.setState({
                    isLoaded: true,
                    isHide: secondaryIsHide
                })

            });

        },2000)
    }

    showMoreLessPictureRow = (e) => {

        const {id} = e.target,
            {isHide,howManyRowShown} = this.state;

        let secondaryHowManyRowShown = howManyRowShown,
            secondaryIsHide = isHide.slice(); 


        if(id === "arrowShowLess"){

            if(secondaryHowManyRowShown > 1){
                secondaryIsHide[secondaryHowManyRowShown-1] = " hide";
                --secondaryHowManyRowShown;
            }

        }else if(id === "arrowShowMore"){
            if(secondaryHowManyRowShown < 5){
                secondaryIsHide[secondaryHowManyRowShown] = " visible";
                ++secondaryHowManyRowShown;
            }
            
        }

        this.setState({
            isHide: secondaryIsHide,
            howManyRowShown: secondaryHowManyRowShown
        })

    }

    changeStateIsSomeBiggerActive = () => {

        console.log(`Active: ${this.state.isSomeBiggerPictureActive}`);

        this.setState(prevState =>({
            isSomeBiggerPictureActive: !prevState.isSomeBiggerPictureActive
        }))

    }


    createPictureRow = () => {

        let response,
            pictureRow = [],
            pictureRowContent = [];

        for(let i=0,j=this.data.length; i<j; ++i){

            pictureRowContent.push(
                <PictureGalleryImage 
                    url={this.data[i].url} 
                    alt={this.data[i].id}
                    title={this.data[i].title} 
                    isSomeBiggerPictureActive={this.state.isSomeBiggerPictureActive}
                    changeStateIsSomeBiggerActive={this.changeStateIsSomeBiggerActive}
                />
            )

            if(i % 5 === 4){
                pictureRow.push(
                    <div className={"pictureRow" + this.state.isHide[Math.floor(i/5)]}>
                        {pictureRowContent}
                    </div>
                )
                pictureRowContent = [];
            }

        }

        response = pictureRow;

        return (
            response
        )
    }

    createPictureSwitch = () => {
        return (
            <div className="pictureGallerySwitch">
                <PictureSwitchArrow classes="icon-up-circle" showMoreLessPictureRow={this.showMoreLessPictureRow} id="arrowShowLess"/>
                <PictureSwitchArrow classes="icon-down-circle" showMoreLessPictureRow={this.showMoreLessPictureRow} id="arrowShowMore"/>
            </div>
        )
    }

    createAnimation = () => {
        return (
            <WaitingAnimation/>
        )
    }

    
    createResponse = () => {
        if(!this.state.isLoaded){
            return(
                this.createAnimation()
            )
        }else{
            return(
                <>
                    {this.createPictureRow()}
                    {this.createPictureSwitch()}
                </> 
            )
        }
    }

    render(){

        this.response = this.createResponse();

        return (
            <div className="gallery">
                {this.response}
            </div>
        )
    }
}

export default PictureGallery;