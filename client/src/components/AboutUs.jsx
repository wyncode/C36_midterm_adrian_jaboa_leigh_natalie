import React from 'react';
import jaboa from '../photos/jaboa.jpg';
import natalie from '../photos/natalie.jpg';
import leigh from '../photos/leigh.jpg';
import adrian from '../photos/adrian.jpg';

const AboutUs = () => {
  return (
    <>
      <h1 className="hero-title">
        We are Mixed in Miami,<br/>
        creating new ways to learn the art of cocktails{' '}
      </h1>

      <div
        className="hero-container"
        style={{ display: 'flex', justifyContent: 'space-evenly' }}
      >
        <div className="hero-container_div">
          <img
            className="hero-container_img"
            src={jaboa}
            alt="Jaboa"
            style={{ height: '17rem', width: '14rem' }}
          />
          <p className="hero-container_text">
            Jaboa's favorite drink: <br/>
            Hennessey and Red Bull
          </p>
        </div>
        <div className="hero-container_div">
          <img
            className="hero-container_img"
            src={natalie}
            alt="Natalie"
            style={{ height: '17rem', width: '14rem' }}
          />
          <p className="hero-container_text">
            Natalie's favorite drink: <br/>
            Moscow Mule
          </p>
        </div>
        <div className="hero-container_div">
          <img
            className="hero-container_img"
            src={adrian}
            alt="Adrian"
            style={{ height: '17rem', width: '14rem' }}
          />
          <p className="hero-container_text">
            Adrian's favorite drink: <br/>
            Pina Coloda
          </p>
        </div>
        <div className="hero-container_div">
          <img
            className="hero-container_img"
            src={leigh}
            alt="leigh"
            style={{ height: '17rem', width: '14rem' }}
          />
          <p className="hero-container_text">
            Leigh's favorite drink: <br/>
            Tanqueray and Sprite
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
