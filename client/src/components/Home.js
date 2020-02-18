import React from 'react';
import myVideo from '../photos/homepage_video.mp4'

const Home = () => {
  return (
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
  )
};

export default Home;
