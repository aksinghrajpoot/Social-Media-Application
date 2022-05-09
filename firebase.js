// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqHGPR3HR8CK4T2gwjSX_5OeN0ni8YPzs",
  authDomain: "nexthub-1.firebaseapp.com",
  projectId: "nexthub-1",
  storageBucket: "nexthub-1.appspot.com",
  messagingSenderId: "550187005539",
  appId: "1:550187005539:web:eace47517d0bf274df6a56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}