import React from 'react';
import Tilt from 'react-parallax-tilt';

const TiltImage = ({ src, alt,url }) => (
  <Tilt
    tiltMaxAngleX={10}     // Maximum tilt on the X-axis
    tiltMaxAngleY={10}     // Maximum tilt on the Y-axis
    perspective={1000}     // Perspective for the 3D effect
    scale={1.05}           // Slight zoom on hover
    transitionSpeed={250}  // Speed of the transition
    className="rounded-2xl" // Tailwind class for rounded corners
  >
    <a target="_black" href={`${url}`}><img className="bsha rounded-2xl duration-400 p-1" src={src} alt={alt} /></a>
  </Tilt>
);

export default TiltImage;