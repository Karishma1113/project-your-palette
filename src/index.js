import { initializeApp } from "firebase/app";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUsA6MI14sx7yw-RlE3tR9-c6E2PwM9PU",
  authDomain: "your-pal-ette.firebaseapp.com",
  databaseURL: "https://your-pal-ette-default-rtdb.firebaseio.com",
  projectId: "your-pal-ette",
  storageBucket: "your-pal-ette.appspot.com",
  messagingSenderId: "87341555622",
  appId: "1:87341555622:web:716b234337b59e222cb967"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);