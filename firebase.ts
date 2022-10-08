// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB6IzIBnqJ1SgvMpVfUDawgtkkb6nBSq8",
  authDomain: "netflix-clone-prac.firebaseapp.com",
  projectId: "netflix-clone-prac",
  storageBucket: "netflix-clone-prac.appspot.com",
  messagingSenderId: "259167605003",
  appId: "1:259167605003:web:1a29a00dc06519bd78920e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }