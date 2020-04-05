import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onPictureSubmit}) => {
  return (
   <div>
     <p className='f3'>
      {'This Will Detect Faces In Your Pictures Give It A Try'}
     </p>
     <div className= 'center'>
      <div className='form center pa4 br3 shadow-5'>
        <input className='f4 pa2 center w-80' type='text' onChange={onInputChange} />
        <button className='f4 w-20 grow link ph3 pv2 dib bg-gold green' onClick={onPictureSubmit} >Detect</button>
      </div>
     </div>
   </div>
  );
}

export default ImageLinkForm;
