import React from 'react';
import './PictureGallery.css';
import WaitingAnimation from './WaitingAnimation/WaitingAnimation';


class PictureGallery extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false
        }
    }

    componentDidMount(){
        this.getData();
        console.log(`componentDidMount`);
    }


    getData = () => {

        setTimeout(() => {

            fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    isLoaded: true
                })
            });

        },3000)
    }


    createResponse = () => {
        if(!this.state.isLoaded){
            return(
                <WaitingAnimation/>
            )
        }else{
            return(
                <p>Data loaded</p>
            )
        }
    }


    render(){

        console.log(`render`);
        this.response = this.createResponse();

        return (
            <div className="gallery">
                {this.response}
            </div>
        )
    }
}

export default PictureGallery;