import firebase from "firebase/compat/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQPmvKU3-qjvTbc8NQSRTXZw8JAC2X5c8",
  authDomain: "ecommerce-f7b93.firebaseapp.com",
  projectId: "ecommerce-f7b93",
  storageBucket: "ecommerce-f7b93.appspot.com",
  messagingSenderId: "42249012283",
  appId: "1:42249012283:web:b4cc7f9a6d753e0142881e",
  measurementId: "G-X37Z1XBGER",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
