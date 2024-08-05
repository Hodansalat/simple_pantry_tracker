// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5ed4cozo4VXTNWXazHmB6WmtUTeWkPx0",
  authDomain: "inventory-managment-bf8da.firebaseapp.com",
  projectId: "inventory-managment-bf8da",
  storageBucket: "inventory-managment-bf8da.appspot.com",
  messagingSenderId: "775121291531",
  appId: "1:775121291531:web:8ec5766aeef8cd85213a0e",
  measurementId: "G-0SHMXWJ7RE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore=getFirestore(app);

export {firestore}
