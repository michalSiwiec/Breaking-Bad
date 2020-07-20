import React from 'react';
import './PictureSlider.css';
import PictureSwitch from './PictureSliderSwitch/PictureSwitch';
import PictureArrow from './PictureArrow/PIctureArrow';
import Picture1 from '../../Picture/Picture1.jpg';
import Picture2 from '../../Picture/Picture2.jpg';
import Picture3 from '../../Picture/Picture3.jpg';
import Picture4 from '../../Picture/Picture4.jpg';
import Picture5 from '../../Picture/Picture5.jpg';



class PictureSlider extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            picture: [Picture1,Picture2,Picture3,Picture4,Picture5],
            presentPictureNumber: 0,
            switchSliderClasses: ["selected",undefined,undefined,undefined,undefined]
        }
        this.interval = undefined;
    }

    componentDidMount(){
        this.startCounting();
    }

    componentWillUnmount(){
        if(this.interval !== undefined)
            clearInterval(this.interval);
    }

    startCounting = () => {
        let second = 0;

        if(this.interval !== undefined)
            clearInterval(this.interval);

        this.interval = setInterval(() => {
            // console.log(`Passed one second`);
            ++second;
            if(second === 5){
                clearInterval(this.interval);
                // console.log(`end of interval`);
                this.setPictureAfterCounting();
                this.startCounting();
            }
        },1000)
    }

    setPictureAfterCounting = () => {

        let secondaryNumber = this.state.presentPictureNumber,
            switchSliderClassesBuffor = [undefined,undefined,undefined,undefined,undefined];

        if(this.state.presentPictureNumber === 4)
            secondaryNumber = 0;
        else
            ++secondaryNumber;

            switchSliderClassesBuffor[secondaryNumber] = "selected";


        this.setState({
            presentPictureNumber: secondaryNumber,
            switchSliderClasses: switchSliderClassesBuffor
        })

    }


    setPictureAfterCLickSwitchOrArrow = (type,e) => {

        if(this.interval !== undefined)
            clearInterval(this.interval);

        const {id} = e.target,
            {presentPictureNumber} = this.state;
        let number,
            switchSliderClassesBuffor = [undefined,undefined,undefined,undefined,undefined];

        switch(type){
            case "PictureSwitch":
                if(id === "pictureSwitch1")
                    number = 0;
                else if(id === "pictureSwitch2")
                    number = 1;
                else if(id === "pictureSwitch3")
                    number = 2;
                else if(id === "pictureSwitch4")
                    number = 3;
                else if(id === "pictureSwitch5")
                number = 4;
                break;

            case "PictureArrow":
                if(id === "rightArrow"){
                    
                    if(presentPictureNumber === 4)
                        number = 0;
                    else
                        number = presentPictureNumber + 1;

                }else if(id === "leftArrow"){

                    if(presentPictureNumber === 0)
                        number = 4;
                    else
                        number = presentPictureNumber - 1;

                }
                break;
            default:
                break;
        }

        switchSliderClassesBuffor[number] = "selected";

        this.startCounting();
        this.setState({
            presentPictureNumber: number,
            switchSliderClasses: switchSliderClassesBuffor
        })

    }








    render(){

        const {picture,presentPictureNumber,switchSliderClasses} = this.state;

        return (
            <div className="pictureContainer">

                <figure>
                    {/* Do i have to loaded such piture? By import... */}
                    <img src={picture[presentPictureNumber]} alt=""/> 
                </figure>

                <div className="switchContainer">
                    <PictureSwitch classes={switchSliderClasses[0]} clickHandler={(e) => {this.setPictureAfterCLickSwitchOrArrow("PictureSwitch",e)}} id="pictureSwitch1"/>
                    <PictureSwitch classes={switchSliderClasses[1]} clickHandler={(e) => {this.setPictureAfterCLickSwitchOrArrow("PictureSwitch",e)}} id="pictureSwitch2"/>
                    <PictureSwitch classes={switchSliderClasses[2]} clickHandler={(e) => {this.setPictureAfterCLickSwitchOrArrow("PictureSwitch",e)}} id="pictureSwitch3"/>
                    <PictureSwitch classes={switchSliderClasses[3]} clickHandler={(e) => {this.setPictureAfterCLickSwitchOrArrow("PictureSwitch",e)}} id="pictureSwitch4"/>
                    <PictureSwitch classes={switchSliderClasses[4]} clickHandler={(e) => {this.setPictureAfterCLickSwitchOrArrow("PictureSwitch",e)}} id="pictureSwitch5"/>
                </div>

                <div className="PictureArrow">
                    <PictureArrow id="rightArrow" className="icon-right-open" clickHandler={(e) => {this.setPictureAfterCLickSwitchOrArrow("PictureArrow",e)}}/>
                    <PictureArrow id="leftArrow" className="icon-left-open" clickHandler={(e) => {this.setPictureAfterCLickSwitchOrArrow("PictureArrow",e)}}/>
                </div>

            </div>
        )
    }
}


export default PictureSlider;