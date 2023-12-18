import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Encryption from './pages/encryption';
import Decryption from './pages/decryption';
import Key from './pages/key';
import Login from './component/kotakLogin'; 

import {Provider} from "react-redux";
import store from './store';
// import { compose, applyMiddleware} from "redux";
// import * as thunk from 'redux-thunk';
// import reducers from "./reducer"

// const createStore = store(
//   reducers,
//   compose(
//     applyMiddleware(thunk),
//   )
// )

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Encryption/>}></Route>
        <Route path="/Decryption" element={<Decryption/>}></Route>
        <Route path="/Key" element={<Key/>}></Route>
        <Route path="/log" element={<Login/>}></Route>
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
