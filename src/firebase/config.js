import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBYZAJ15B_d73tLQ27kr5GdEJgnR86Dxm0",
    authDomain: "the-recipe-app-ff005.firebaseapp.com",
    projectId: "the-recipe-app-ff005",
    storageBucket: "the-recipe-app-ff005.firebasestorage.app",
    messagingSenderId: "933800893855",
    appId: "1:933800893855:web:ed998fe56ec0f15c5b71aa"
};

// initialize Firebase
firebase.initializeApp(firebaseConfig)

// initial services
const appFirestore = firebase.firestore()

export { appFirestore }