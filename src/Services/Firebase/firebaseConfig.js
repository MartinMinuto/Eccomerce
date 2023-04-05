import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBErkMJt4jT6g7vRYq0f4R9QD0vjOBGXyQ",
  authDomain: "backendecommerce01.firebaseapp.com",
  projectId: "backendecommerce01",
  storageBucket: "backendecommerce01.appspot.com",
  messagingSenderId: "436932899267",
  appId: "1:436932899267:web:067b38289457decaa50d76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Db = getFirestore(app)