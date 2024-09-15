// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY1AWTwb3zFzZdwgFjTqFMzsmSfgnJDUI",
  authDomain: "news-app-3fb13.firebaseapp.com",
  projectId: "news-app-3fb13",
  storageBucket: "news-app-3fb13.appspot.com",
  messagingSenderId: "226033437055",
  appId: "1:226033437055:web:214ccfaa79b37b04d3b24a",
  measurementId: "G-4RSX8X0XKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);