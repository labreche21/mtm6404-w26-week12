import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5SDl73aoB7uyFCpwfxCtZVObmr2aADpw",
  authDomain: "m6m6404-project.firebaseapp.com",
  projectId: "m6m6404-project",
  storageBucket: "m6m6404-project.firebasestorage.app",
  messagingSenderId: "201126953415",
  appId: "1:201126953415:web:9b2652aa295aa0f44799e2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;