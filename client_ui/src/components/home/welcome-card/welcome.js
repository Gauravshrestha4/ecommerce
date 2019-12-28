import React from 'react';
/**CSS imports */
import './welcome.css';

const Welcome = (props) => {
    return (
        <div className = "welcome-board">
            <p className = "welcome-msg">
                Welcome, Shourya
            </p>
            <p className = "welcome-tagline">
                Good to see you back !
            </p>
        </div>
    )
}

export default Welcome;