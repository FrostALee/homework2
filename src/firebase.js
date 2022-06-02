// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTDGkaSUoVxIWWKxbrA-fzFAj26mmGZEg",
    authDomain: "sparte-react-basic.firebaseapp.com",
    projectId: "sparte-react-basic",
    storageBucket: "sparte-react-basic.appspot.com",
    messagingSenderId: "647568880141",
    appId: "1:647568880141:web:4fd798cd3a4d164d435b44",
    measurementId: "G-BQP7VSX3GJ"
};

// Initialize Firebase
initializeApp(firebaseConfig)
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore();

export { db }