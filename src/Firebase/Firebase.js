// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAropxVw7NO1dVu4SR2hQ4jRlykWgxglMY",
  authDomain: "newsgram-de051.firebaseapp.com",
  projectId: "newsgram-de051",
  storageBucket: "newsgram-de051.appspot.com",
  messagingSenderId: "1073911282224",
  appId: "1:1073911282224:web:a1a820de12b20a140f4bf5",
  measurementId: "G-KF9HK27B5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage  = getStorage(app);

export {auth, app,firestore,storage, analytics}