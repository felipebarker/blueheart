// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMJOMej5k9DPji5VxilFdmOCx8S5S6i5s",
  authDomain: "nfticket-707f3.firebaseapp.com",
  projectId: "nfticket-707f3",
  storageBucket: "nfticket-707f3.appspot.com",
  messagingSenderId: "911755171509",
  appId: "1:911755171509:web:977e7da416753c860310fc"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDb = getFirestore(firebaseApp);