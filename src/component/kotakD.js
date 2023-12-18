import React from 'react';
import '../css/style.css'

function KotakD() {
  return (
    <div className="container">
      <div className='cover'>
        <input type="file" className='encrypt-file' placeholder='Choose File'/>
        <input className='encrypt-key' placeholder='Enter Key'/>
        <button className="encrypt-btn" onClick="">Decrypt</button>
      </div>
    </div>
  );
}

export default KotakD;