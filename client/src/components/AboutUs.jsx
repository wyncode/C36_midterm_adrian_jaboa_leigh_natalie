import React from 'react';

import jaboa from '../photos/jaboa.jpg'
import natalie from '../photos/natalie.jpg'
import leigh from '../photos/leigh.jpg'
import adrian from '../photos/adrian.jpg'
import groupPhoto from '../photos/group.jpg'


const AboutUs = () => {



    return ( 
        <>
        <div className="hero-container" style={{display: 'flex'}}>
            <div className="Hero1">
                <img src={jaboa} alt="Jaboa"style={{height: '17rem', width: '14rem'}}/>
            <p>Jaboa's favorite drink is Hennessey and Red Bull</p>
            </div>
            <div className="Hero2">
            <img src={natalie} alt="Natalie" style={{height: '17rem', width: '14rem'}}/>
            <p>Natalie's favorite drink is Moscow Mule</p>
            </div>
            <div className="Hero3">
            <img src={adrian} alt="Adrian" style={{height: '17rem', width: '14rem'}}/>
                <p>Adrian's favorite drink is Pina Coloda</p>
            </div>
            <div className="Hero4">
            <img src={leigh} alt="leigh" style={{height: '17rem', width: '14rem'}}/>
                <p>Leigh's favorite drink is Tanqueray and Sprite</p>  
            </div>

        
    </div>    

<h1 className="hero-title">"On the eve of Valentines, this band of devoted developers came together to help bring more ways to help everyone drink responsibly. You're welcome" </h1>
</>
    )
}
 
export default AboutUs;
