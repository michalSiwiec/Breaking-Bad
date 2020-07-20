
import React from 'react';
import './Footer.css';
import '../../fontello/fontello-871b8ca9/css/fontello.css';

const Footer = () => {
    return (
        <footer>
            <div id="navContainer">
                <div className="footerPart">
                    <h2>Footer Links</h2>
                    <ol>
                        <li><a href="App.js"><i className="icon-right-dir"></i>About us</a></li>
                        <li><a href="App.js"><i className="icon-right-dir"></i>Private Policy</a></li>
                        <li><a href="App.js"><i className="icon-right-dir"></i>Disclaimer</a></li>
                        <li><a href="App.js"><i className="icon-right-dir"></i>Sitemap</a></li>
                        <li><a href="App.js"><i className="icon-right-dir"></i>Link</a></li>
                        <li><a href="App.js"><i className="icon-right-dir"></i>Link</a></li>
                    </ol>
                </div>
                <div className="footerPart">
                    <h2>Contact Information</h2>
                    <ol>
                        <li><i className="icon-town-hall"></i>City: Żywiec 34-300</li>
                        <li><i className="icon-road"></i>Street: Beskidzka 50</li>
                        <li><i className="icon-mail-alt"></i>Email:  siwiec.michal724@gmial.com</li>
                        <li><i className="icon-phone"></i>Phone number:  724 131 140</li>
                    </ol>
                </div>
                <div className="footerPart" id="quickContact">
                    <h2>Quick contact</h2>
                    <div>
                        <input type="text" placeholder="Enter name"/>
                        <input type="text" placeholder="Enter E-mail"/>
                        <textarea placeholder="Enter message" cols="27" rows="3"></textarea>
                    </div>
                    <div>
                        <button>Cancel</button>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            
            <div className="bottomBeam">
                <p>All rights reserved by Palmer 2020</p>
                <div className="navToSocjalMedia">
                    <a href="App.js"><i className="icon-facebook-official"></i></a>
                    <a href="App.js"><i className="icon-youtube"></i></a>
                    <a href="App.js"><i className="icon-twitter"></i></a>
                </div>
            </div>

        </footer>
    )
}

export default Footer;