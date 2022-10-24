// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBCpCiLztzVG7KahA_T7QRTV72QrclcjU",
  authDomain: "learnin-course.firebaseapp.com",
  projectId: "learnin-course",
  storageBucket: "learnin-course.appspot.com",
  messagingSenderId: "846103566840",
  appId: "1:846103566840:web:5328091585064c746c1e0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;