import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAbbRUI_AEXLAD5xH_VEyE5_pHtRjl6-24",
    authDomain: "cart-4b40e.firebaseapp.com",
    databaseURL: "https://cart-4b40e.firebaseio.com",
    projectId: "cart-4b40e",
    storageBucket: "cart-4b40e.appspot.com",
    messagingSenderId: "671972633552",
    appId: "1:671972633552:web:a9c106c1d72308369a27d5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
