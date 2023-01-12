import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGrD-QnejJbTLImMp5qpufTYk803MOqQo",
  authDomain: "vetsnpets-52c1f.firebaseapp.com",
  projectId: "vetsnpets-52c1f",
  storageBucket: "vetsnpets-52c1f.appspot.com",
  messagingSenderId: "800037039816",
  appId: "1:800037039816:web:07111d37cc6e4c98377ffd",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export default firebaseApp;
