import { initializeApp } from 'firebase/app';
import { getFirestore, query, getDocs, collection } from 'firebase/firestore';

// Firebase setup
const firebaseConfig = {
    apiKey: "AIzaSyAgYSR6_kHqhDULMKUeBGihCa3rXVuaNLE",
    authDomain: "portfolio-c5062.firebaseapp.com",
    projectId: "portfolio-c5062",
    storageBucket: "portfolio-c5062.appspot.com",
    messagingSenderId: "311956775353",
    appId: "1:311956775353:web:324ba1da40cc9712961668"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

//   Firestore 

export const projectsRef = collection(db, "projects");