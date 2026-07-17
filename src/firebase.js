// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSb5vknkS0bS4B6fGOHtlnnXqv-V00vXI",
  authDomain: "portfolio-24da0.firebaseapp.com",
  projectId: "portfolio-24da0",
  storageBucket: "portfolio-24da0.firebasestorage.app",
  messagingSenderId: "1037981808110",
  appId: "1:1037981808110:web:304e851d35685416190aff",
  measurementId: "G-MCGQQ6KCYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
