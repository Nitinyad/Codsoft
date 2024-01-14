import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA9D3aq9Y9y2RZfz-tisufSOktNOOK1k_c",
    authDomain: "blogwebsite-f9f06.firebaseapp.com",
    projectId: "blogwebsite-f9f06",
    storageBucket: "blogwebsite-f9f06.appspot.com",
    messagingSenderId: "692527121696",
    appId: "1:692527121696:web:15c7c7bbba611136398345"
  };
  
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBwKDWLu46bOnYlQpOgJt27K1n0SEG-L9w",
//   authDomain: "blogwebsite-93c41.firebaseapp.com",
//   projectId: "blogwebsite-93c41",
//   storageBucket: "blogwebsite-93c41.appspot.com",
//   messagingSenderId: "816358081032",
//   appId: "1:816358081032:web:b4c232982a18ec9f6407bd"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDB, auth, storage };