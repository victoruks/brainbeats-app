import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage"; // still ok


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARAtY4uxL2sBmc5g2pDuHYwRr8alCwbYY",
  authDomain: "brain-beats-2e4e9.firebaseapp.com",
  projectId: "brain-beats-2e4e9",
  storageBucket: "brain-beats-2e4e9.firebasestorage.app",
  messagingSenderId: "713952134954",
  appId: "1:713952134954:web:2389670c413c3dc0378053",
  measurementId: "G-M0QXKF9M1N"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);