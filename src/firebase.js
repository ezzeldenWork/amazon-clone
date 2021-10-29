// import  firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCwuOi63KXJuHwLWKirx5AswJ_wjIccfKs",
  authDomain: "clone-c09cd.firebaseapp.com",
  projectId: "clone-c09cd",
  storageBucket: "clone-c09cd.appspot.com",
  messagingSenderId: "164704816552",
  appId: "1:164704816552:web:1e68684821865f7b91619d",
  measurementId: "G-HQ56W6G3Q1" 
})
const auth = firebaseApp.auth()


export { auth }

