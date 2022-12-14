import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/Style/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAMdElk9Qg3V5RapBZKTIbyugQdmCu1hLg",
  authDomain: "hcdeveloppement.firebaseapp.com",
  databaseURL: "https://hcdeveloppement-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hcdeveloppement",
  storageBucket: "hcdeveloppement.appspot.com",
  messagingSenderId: "860342177686",
  appId: "1:860342177686:web:46127e94e6ede9e27d17b7",
  measurementId: "G-EX01CLJFXT"
};

const db = getDatabase(initializeApp(firebaseConfig))

const dbRef = ref(db);
const root = ReactDOM.createRoot(document.getElementById('root'));

get(child(dbRef, `Textes`)).then(snapshot => {
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App database={db} data={snapshot.val()}/>
    </BrowserRouter>
  </React.StrictMode>
  );
})



