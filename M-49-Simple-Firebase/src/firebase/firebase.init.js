// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCv-RxR5ZqELbcS08_N9tzjrKI3WUu6uPs",
  authDomain: "simple-firebase-234fe.firebaseapp.com",
  projectId: "simple-firebase-234fe",
  storageBucket: "simple-firebase-234fe.appspot.com",
  messagingSenderId: "1017376833199",
  appId: "1:1017376833199:web:de9c5f4377b60c4a8ede5a",
  measurementId: "G-R9G8XXPPQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app