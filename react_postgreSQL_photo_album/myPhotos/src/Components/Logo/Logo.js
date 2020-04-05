import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Binoc from './binoculars.svg';
// import Particles from 'react-particles-js';


// const polygonOptions = {
//   polygon: {
//     enable: true,
//     type: 'inside',
//     move: {
//       radius: 1
//     },
//     url: Binoc,
//     // draw: {
//     //   enable: true,
//     // }
//   }
// }


const Logo = () => {
  return (
   <div className= 'ma4 mb0 mt0'>
     
     
     
     
    <Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 100, width: 100 }} >
      <div className="Tilt-inner pa3">
        {/* <Particles 
            params={polygonOptions} 
        /> */}
        <img className='' style={{paddingTop: '14px'}} alt='Icon' src={Binoc} /> 
 
      </div>
    </Tilt>
   </div> 
  );
}

export default Logo;

// icons from
// <a target="_blank" href="https://icons8.com/icons/set/binoculars--v1">Binoculars icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>