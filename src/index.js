import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "FIREBASE_API_KEY",
    authDomain: "FURBASE_AUTHDOMAIN",
    databaseURL: "https://cart-4b40e.firebaseio.com",
    projectId: "cart-4b40e",
    storageBucket: "cart-4b40e.appspot.com",
    messagingSenderId: "FIREBASE",
    appId: "FIREBASE_ID"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
