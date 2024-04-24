// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnkvRTbhpAZNECbP2rImUfwEy84Yq277s",
  authDomain: "internarea-a7844.firebaseapp.com",
  projectId: "internarea-a7844",
  storageBucket: "internarea-a7844.appspot.com",
  messagingSenderId: "404465007879",
  appId: "1:404465007879:web:523fea0c140dec254759a2",
  measurementId: "G-GWRESRV14Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider};