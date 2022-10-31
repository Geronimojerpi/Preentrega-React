import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBNUgeFKBk2iqkv1FL3GTbkIyUqWU95qIs",
  authDomain: "proyecto-final-69e92.firebaseapp.com",
  projectId: "proyecto-final-69e92",
  storageBucket: "proyecto-final-69e92.appspot.com",
  messagingSenderId: "454653535034",
  appId: "1:454653535034:web:c3dd0eaa24118b5bb2a603"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
