// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4s0f64FfFGViYTiNKV5yCpLu0ZcprFr0",
    authDomain: "ema-john-simple-b1a91.firebaseapp.com",
    projectId: "ema-john-simple-b1a91",
    storageBucket: "ema-john-simple-b1a91.appspot.com",
    messagingSenderId: "300024179226",
    appId: "1:300024179226:web:f735424b1a56e3cbfb3fa3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;