// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAY8zRsYv1MIcmJBe9msQJxEZMDVeerUI",
  authDomain: "smart-street-light-e3189.firebaseapp.com",
  projectId: "smart-street-light-e3189",
  storageBucket: "smart-street-light-e3189.appspot.com",
  messagingSenderId: "159380072477",
  appId: "1:159380072477:web:2db98f014cb150ac60bef4",
  measurementId: "G-5S97XC97GS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default app