import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { animateScroll as scroll } from 'react-scroll'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBGqSvIc__C_iAqwMs-i1SHslh8VziehHk",
  authDomain: "coherent-mesh-302818.firebaseapp.com",
  projectId: "coherent-mesh-302818",
  storageBucket: "coherent-mesh-302818.appspot.com",
  messagingSenderId: "205153229863",
  appId: "1:205153229863:web:f23df4f32a1c8d96930202",
  measurementId: "G-F293ETL8GT"
});

export const Context = createContext(null)

const firestore = firebase.firestore()

window.onload = () => {scroll.scrollToTop()};

ReactDOM.render(
  <Context.Provider value={{
    firebase,
    firestore
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
