import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import { GlobalStyles } from './GlobalStyles.js';
import { firebase } from './db/firebase.prod';
import { FirebaseContext } from './context/firebase';



ReactDOM.render(
  <>
  <FirebaseContext.Provider value={{ firebase }}>
  <GlobalStyles />
  <App />
  </FirebaseContext.Provider>
  </>,
  document.getElementById('root'));

