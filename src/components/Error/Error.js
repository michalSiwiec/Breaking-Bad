import React from 'react';
import './Error.css';

/*
    How should I deal with such sitution?
    Is this a correct way?
    Using <Link/> didn't work
*/


const Error = () => {

    setTimeout( () => {window.location.href="http://localhost:3000/"},5000);

    return (
        <div className="ErrorContainer">
            <h1>Such webpage doesn't exist!<br/><span>You' ll moved to main page</span></h1>
        </div>  
    )
}

export default Error;