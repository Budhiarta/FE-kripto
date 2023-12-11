import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Encryption from './pages/encryption';
import Decryption from './pages/decryption';
import Key from './pages/key';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Encryption/>}></Route>
        <Route path="/Decryption" element={<Decryption/>}></Route>
        <Route path="/Key" element={<Key/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
