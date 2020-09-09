import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDwoluY3-YdJmcEZc-FE-DYuaCahMjaZJs",
    authDomain: "todolist-632ca.firebaseapp.com",
    databaseURL: "https://todolist-632ca.firebaseio.com",
    projectId: "todolist-632ca",
    storageBucket: "todolist-632ca.appspot.com",
    messagingSenderId: "519951978461",
    appId: "1:519951978461:web:c121a3f1c31b734856b034",
    measurementId: "G-LE9YX9C8XH"
};

//firebase.initializeApp(firebaseConfig);
const fb = firebase.initializeApp(firebaseConfig);
export { fb };
//export const auth = firebase.auth();