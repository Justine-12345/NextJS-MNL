
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC0jJIEZYvrUnD4fErzlRxJsxDCXH6IeX4",
  authDomain: "nextjs-mnl.firebaseapp.com",
  projectId: "nextjs-mnl",
  storageBucket: "nextjs-mnl.appspot.com",
  messagingSenderId: "976370466968",
  appId: "1:976370466968:web:74bfb7ab8aadd74a7390ed",
  measurementId: "G-MDPFDSNB17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)