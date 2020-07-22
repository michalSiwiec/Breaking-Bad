import React from 'react';
import './PictureGallery.css';
import WaitingAnimation from './WaitingAnimation/WaitingAnimation';
import '../../fontello/fontello-7ff14d85/css/fontello.css';


class PictureGallery extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            showPictureRow: [""," "," "," hide"," hide"],
            counterShowPictureRow: 3
        }

        this.data = [];
    }

    componentDidMount(){
        this.getData();
    }


    getData = () => {

        setTimeout(() => {

            fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => {

                for(let i = 0; i < 25; ++i){
                    this.data.push({
                        id: data[i].id,
                        title: data[i].title,
                        url: data[i].url
                    })
                }

                this.setState({
                    isLoaded: true
                })

            });

        },2000)
    }

    showMoreLessPicture = (e) => {

        let secondaryShowPictureRow = this.state.showPictureRow.slice(),
            secondaryCounterShowPictureRow = this.state.counterShowPictureRow;


        if(e.target.id === "showMoreArrow"){
            
            switch(secondaryCounterShowPictureRow){
                case 1:
                    secondaryShowPictureRow[0] = "";
                    ++secondaryCounterShowPictureRow;
                    break;
                case 2:
                    secondaryShowPictureRow[1] = "";
                    ++secondaryCounterShowPictureRow;
                    break;
                case 3:
                    secondaryShowPictureRow[2] = "";
                    ++secondaryCounterShowPictureRow;
                    break;
                case 4:
                    secondaryShowPictureRow[3] = "";
                    ++secondaryCounterShowPictureRow;
                    break;
                case 5:
                    secondaryShowPictureRow[4] = "";
                    ++secondaryCounterShowPictureRow;
                    break;
                default:
                    break;
            }

        }else{
            
            switch(secondaryCounterShowPictureRow){
                case 3:
                    secondaryShowPictureRow[1] = " hide";
                    --secondaryCounterShowPictureRow;
                    break;
                case 4:
                    secondaryShowPictureRow[2] = " hide";
                    --secondaryCounterShowPictureRow;
                    break;
                case 5:
                    secondaryShowPictureRow[3] = " hide";
                    --secondaryCounterShowPictureRow;
                    break;
                case 6:
                    secondaryShowPictureRow[4] = " hide";
                    --secondaryCounterShowPictureRow;
                    break;
                default:
                    break;
            }
        }

        // console.log(secondaryShowPictureRow);
        // console.log(secondaryCounterShowPictureRow);

        this.setState({
            showPictureRow: secondaryShowPictureRow,
            counterShowPictureRow: secondaryCounterShowPictureRow
        })

    }

    showBiggerPicture = () => {
        console.log(this);
    }


    createResponse = () => {
        if(!this.state.isLoaded){
            return(
                <WaitingAnimation/>
            )
        }else{

            const {showPictureRow} = this.state;

            return(
                <>
                    <div className={"pictureRow" + showPictureRow[0]}>
                        <img src={this.data[0].url} alt={this.data[0].title} onClick={this.showBiggerPicture}/>
                        <img src={this.data[1].url} alt={this.data[1].title} onClick={this.showBiggerPicture}/>
                        <img src={this.data[2].url} alt={this.data[2].title} onClick={this.showBiggerPicture}/>
                        <img src={this.data[3].url} alt={this.data[3].title} onClick={this.showBiggerPicture}/>
                        <img src={this.data[4].url} alt={this.data[4].title} onClick={this.showBiggerPicture}/>
                    </div>
                    <div className={"pictureRow" + showPictureRow[1]}>
                        <img src={this.data[5].url} alt={this.data[5].title} onClick={this.showBiggerPicture}/>
                        <img src={this.data[6].url} alt={this.data[6].title} onClick={this.showBiggerPicture}/>
                        <img src={this.data[7].url} alt={this.data[7].title} onClick={this.showBiggerPicture}/>
                        <img src={this.data[8].url} alt={this.data[8].title} onClick={this.showBiggerPicture}/>
                        <img src={this.data[9].url} alt={this.data[9].title} onClick={this.showBiggerPicture}/>
                    </div> 
                    <div className={"pictureRow" + showPictureRow[2]}>
                        <img src={this.data[10].url} alt={this.data[10].title} onClick={this.showBiggerPicture}/>
                        <img src={this.data[11].url} alt={this.data[11].title} onClick={this.showBiggerPicture}/>
                        <img src={this.data[12].url} alt={this.data[12].title} onClick={this.showBiggerPicture}/>
                        <img src={this.data[13].url} alt={this.data[13].title} onClick={this.showBiggerPicture}/>
                        <img src={this.data[14].url} alt={this.data[14].title} onClick={this.showBiggerPicture}/>
                    </div>
                    <div className={"pictureRow" + showPictureRow[3]}>
                        <img src={this.data[15].url} alt={this.data[15].title} onClick={this.showBiggerPicture}/>
                        <img src={this.data[16].url} alt={this.data[16].title} onClick={this.showBiggerPicture}/>
                        <img src={this.data[17].url} alt={this.data[17].title} onClick={this.showBiggerPicture}/>
                        <img src={this.data[18].url} alt={this.data[18].title} onClick={this.showBiggerPicture}/>
                        <img src={this.data[19].url} alt={this.data[19].title} onClick={this.showBiggerPicture}/>
                    </div> 
                    <div className={"pictureRow" + showPictureRow[4]}>
                        <img src={this.data[20].url} alt={this.data[20].title} onClick={this.showBiggerPicture}/>
                        <img src={this.data[21].url} alt={this.data[21].title} onClick={this.showBiggerPicture}/>
                        <img src={this.data[22].url} alt={this.data[22].title} onClick={this.showBiggerPicture}/>
                        <img src={this.data[23].url} alt={this.data[23].title} onClick={this.showBiggerPicture}/>
                        <img src={this.data[24].url} alt={this.data[24].title} onClick={this.showBiggerPicture}/>
                    </div>

                    <div className="pictureGallerySwitch">
                        <i className="icon-down-circle" id="showMoreArrow" onClick={this.showMoreLessPicture}></i>
                        <i className="icon-up-circle" id="showLessArrow" onClick={this.showMoreLessPicture}></i>
                    </div>

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