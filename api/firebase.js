// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGUmTSi0fsRWXlT5mpcncqFpLJatXETZA",
  authDomain: "bdcsongbook-b653a.firebaseapp.com",
  projectId: "bdcsongbook-b653a",
  storageBucket: "bdcsongbook-b653a.appspot.com",
  messagingSenderId: "402592882837",
  appId: "1:402592882837:web:2bfbfc27f5ff9b9aa53b9c",
  measurementId: "G-2670TZ2NC6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export default app;
