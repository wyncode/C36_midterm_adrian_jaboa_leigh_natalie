import React from 'react';

import jaboa from '../photos/jaboa.jpg'
import natalie from '../photos/natalie.jpg'
import leigh from '../photos/leigh.jpg'
import adrian from '../photos/adrian.jpg'
import groupPhoto from '../photos/group.jpg'


const AboutUs = () => {
    return (
        <>
            <h1 className="hero-title">"On the eve of Valentines, this band of devoted developers came together to help bring more ways to help everyone drink responsibly. You're welcome" </h1>

            <div className="hero-container" style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <div className="hero-container_div">
                    <img className="hero-container_img"src={jaboa} alt="Jaboa"style={{height: '17rem', width: '14rem'}}/>
                    <p className="hero-container_text">Jaboa's favorite drink is Hennessey and Red Bull</p>
                </div>
                <div className="hero-container_div">
                    <img className="hero-container_img" src={natalie} alt="Natalie" style={{height: '17rem', width: '14rem'}}/>
                    <p className="hero-container_text">Natalie's favorite drink is Moscow Mule</p>
                </div>
                <div className="hero-container_div">
                    <img className="hero-container_img" src={adrian} alt="Adrian" style={{height: '17rem', width: '14rem'}}/>
                        <p className="hero-container_text">Adrian's favorite drink is Pina Coloda</p>
                </div>
                <div className="hero-container_div">
                    <img className="hero-container_img" src={leigh} alt="leigh" style={{height: '17rem', width: '14rem'}}/>
                    <p className="hero-container_text">Leigh's favorite drink is Tanqueray and Sprite</p>
                </div>
            </div>
         </>
    )
}

export default AboutUs;
