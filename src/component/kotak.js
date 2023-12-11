import React from 'react';
import '../css/style.css'

function Kotak() {
  return (
    <div className="container">
      <div className='cover'>
        <input className='encrypt-file' placeholder='Choose File'/>
        <input className='encrypt-key' placeholder='Enter Key'/>
        <button className="encrypt-btn" onClick="">Encrypt</button>
      </div>
    </div>
  );
}

export default Kotak;