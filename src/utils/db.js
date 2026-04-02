import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBB--zvtMYjaSyN0g02UzQofOFrcWs7Zk",
  authDomain: "mtm6404-claist-2396d.firebaseapp.com",
  projectId: "mtm6404-claist-2396d",
  storageBucket: "mtm6404-claist-2396d.firebasestorage.app",
  messagingSenderId: "999889307452",
  appId: "1:999889307452:web:505a9e1d82163b69304039"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;