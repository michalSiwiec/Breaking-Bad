import React from 'react';
import './PictureGalleryImage.css';
import '../../../fontello/fontello-5182458c/css/fontello.css';


class PictureGalleryImage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            isBiggerPictureShown: false
        }
    }

    showBiggerPicture = () => {
        this.setState({
            isBiggerPictureShown: true
        })
    }

    hideBiggerPicture = () => {
        this.setState({
            isBiggerPictureShown: false
        })
    }


    createBiggerPicture = () => {

        const {url,title,isSomeBiggerPictureActive,changeStateIsSomeBiggerActive} = this.props;

        if(!isSomeBiggerPictureActive){
            return(
                <div className="bigImage">
                    <i className="icon-cancel"
                        onClick={() => {
                            this.hideBiggerPicture();
                            changeStateIsSomeBiggerActive();
                        }}
                    > 
                    </i>
                    <img src={url} alt={title}/>
                    <figcaption>{title}</figcaption>
                </div>
            )
        }else{
            return undefined;
        }
        
    }

    createNormalPicture = () => {

        const {url,id,title} = this.props;

        return (
            <figure>
                <img src={url}
                    alt={id} 
                    onClick={() => {
                        this.showBiggerPicture();
                        this.props.changeStateIsSomeBiggerActive();
                    }}
                 />
                {/* <figcaption>{title}</figcaption> */}
            </figure>
        )
    }

    createResponse = () => {
        
        if(this.state.isBiggerPictureShown){
            return (
                <>
                    {this.createNormalPicture()}
                    {this.createBiggerPicture()}
                </>    
            )
        }else{
            return(
                this.createNormalPicture()
            )
        }

    }

    render(){
        this.response = this.createResponse();
        return(
            this.response
        )
    }
    
}

export default PictureGalleryImage;