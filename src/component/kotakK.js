import React from 'react';
import '../css/style.css'

function KotakK() {
  return (
    <div className="container">
      <div className='cover-k'>
        <h1 className='list-key'>List of Key</h1>
        <input type="file" className='key-file' placeholder='Choose File'/>
        <input className='key-key' placeholder='Enter Key'/>
      </div>
    </div>
  );
}

export default KotakK;