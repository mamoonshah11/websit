import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACP-ZSZNneEvTAh0QWd_svM_ZKb5yPuxk",
  authDomain: "hackathon-2233.firebaseapp.com",
  projectId: "hackathon-2233",
  storageBucket: "hackathon-2233.appspot.com",
  messagingSenderId: "70563358817",
  appId: "1:70563358817:web:a0d6cb2664f073bb7ea220"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
