import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC019KOeipYexruHGPDDIZpJx0YfaVS5dI",
  authDomain: "chat-app-78024.firebaseapp.com",
  projectId: "chat-app-78024",
  storageBucket: "chat-app-78024.appspot.com",
  messagingSenderId: "585089843329",
  appId: "1:585089843329:web:675dd96e8100f7dac70d80",
  measurementId: "G-LMR8CPVJS5"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);