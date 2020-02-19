import React from 'react';
import myVideo from '../photos/homepage_video.mp4';
import RandomButton from './RandomButton';


const Home = props => {
  return (
    <>
    <video
        autoPlay
        muted
        loop
        style={{
          position: "fixed",
          height: "100%",
          left: 0,
          top: 0
        }}
      >
        <source src={myVideo} type="video/mp4" />
      </video>
      <RandomButton/>
      </>
  )
};

export default Home;
