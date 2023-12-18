import React, { useState } from 'react';
import '../css/style.css';

function Kotak() {
  const [file, setFile] = useState('');
  const [key, setKey] = useState('');

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('key', key);

    try {
      const response = await fetch("http://localhost:8000/v1/base64/encode", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      // Handle the response data as needed
    } catch (error) {
      console.error('Error:', error);
      // Handle errors
    }
  };

  return (
    <div className="container">
      <div className='cover'>
        <input
          type="file"
          name='file'
          className='encrypt-file'
          placeholder='Choose File'
          onChange={(e) => setFile(e.target.files[0])}
        />
        <input
          type="password"
          name='key'
          className='encrypt-key'
          placeholder='Enter Key'
          onChange={(e) => setKey(e.target.value)}
        />
        <button type='button' className="encrypt-btn" onClick={handleSubmit}>
          Encrypt
        </button>
      </div>
    </div>
  );
}

export default Kotak;