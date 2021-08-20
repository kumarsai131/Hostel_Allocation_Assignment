import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";
import { BrowserRouter } from 'react-router-dom';

firebase.initializeApp({
  apiKey: "AIzaSyC1mn1-BXpDGfssIWtiT24sYR300MUgrg8",
  authDomain: "hostel-allocation-77179.firebaseapp.com",
  projectId: "hostel-allocation-77179",
  storageBucket: "hostel-allocation-77179.appspot.com",
  messagingSenderId: "86517824009",
  appId: "1:86517824009:web:54244e1a18177ca89056d8",
  measurementId: "G-R3DK54CZKD"
});

ReactDOM.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);


