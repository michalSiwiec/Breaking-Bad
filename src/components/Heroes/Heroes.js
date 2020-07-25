import React from 'react';
import './Heroes.css';
import Walter from '../../Picture/WalterWhite.jpg';
import Jesse from '../../Picture/Jesse Pinkman.jpg';
import Skyler from '../../Picture/Skyler White.jpg';
import Hank from '../../Picture/Hank.jpg'; 

//why it doesn't work?
{/* <img src="../../Picture/WalterWhite.jpg" alt="Walter White"/> */}
{/* <img src="../../Picture/Skyler White.jpg" alt="Skyler White"/> */}
{/* <img src="../../Picture/WalterWhite.jpg" alt="Jesse Pinkman"/> */}
{/* <img src="../../Picture/Hank.jpg" alt="Hank xD"/> */}



const Heroes = () => {
    return(
        <div className="heroesContainer">
            <h1>Breaking Bad</h1>
            <div className="flexContainer">
                

                <div className="singlePictureContainer">
                    <figure className="pictureCard-front">
                        <img src={Walter} alt="Walter White"/>
                    </figure>

                    <figure className="pictureCard-back">
                        <h3>Walter White</h3>
                        <ul>
                            <li>Something information</li>
                            <li>Something information</li>
                            <li>Something information</li>
                            <li>Something information</li>
                        </ul>
                    </figure>
                </div> 

                <div className="singlePictureContainer">
                    <figure className="pictureCard-front">
                        <img src={Skyler} alt="Skyler White"/>
                    </figure>

                    <figure className="pictureCard-back">
                        <h3>Skyler White</h3>
                        <ul>
                            <li>Something information</li>
                            <li>Something information</li>
                            <li>Something information</li>
                            <li>Something information</li>
                        </ul>
                    </figure>
                </div> 

                <div className="singlePictureContainer">
                    <figure className="pictureCard-front">
                        <img src={Jesse} alt="Jesse Pinkman"/>
                    </figure>

                    <figure className="pictureCard-back">
                        <h3>Jesse Pinkman</h3>
                        <ul>
                            <li>Something information</li>
                            <li>Something information</li>
                            <li>Something information</li>
                            <li>Something information</li>
                        </ul>
                    </figure>
                </div> 

                <div className="singlePictureContainer">
                    <figure className="pictureCard-front">
                        <img src={Hank} alt="Hank"/>
                    </figure>

                    <figure className="pictureCard-back">
                        <h3>Hank</h3>
                        <ul>
                            <li>Something information</li>
                            <li>Something information</li>
                            <li>Something information</li>
                            <li>Something information</li>
                        </ul>
                    </figure>
                </div> 

                

                 

                
                
                
            
            </div>
        </div>
    )
}

export default Heroes;