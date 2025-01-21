import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { initializeApp } from "firebase/app";
import App from './App.jsx'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "ecommerce-react-6b6a1.firebaseapp.com",
  projectId: "ecommerce-react-6b6a1",
  storageBucket: "ecommerce-react-6b6a1.firebasestorage.app",
  messagingSenderId: "298682218497",
  appId: "1:298682218497:web:8ad9c6119c2981d02a2800"
};

initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
