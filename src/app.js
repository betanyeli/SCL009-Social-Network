import { initRouter } from './route.js';
//import { observer } from './assets/js/firebaseAuth.js';
import { readNameDB } from './assets/js/firebasePost.js';
export const firebaseInit = () => {
  // Initialize Firebase
  // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyA7ctYRP7x6WBe_PwZCUnYYe2ahkL7b6l4",
    authDomain: "nomorecommunity-2cfdd.firebaseapp.com",
    databaseURL: "https://nomorecommunity-2cfdd.firebaseio.com",
    projectId: "nomorecommunity-2cfdd",
    storageBucket: "nomorecommunity-2cfdd.appspot.com",
    messagingSenderId: "108376578479",
    appId: "1:108376578479:web:da6682d105a33503"
  };
  firebase.initializeApp(firebaseConfig);
 
  
// Initialize Cloud Firestore through Firebase
//let db = firebase.firestore();
}

 //Initialize Cloud Firestore through Firebase
//let db = firebase.firestore();

const init = () => {
 
  firebaseInit();
  
  //observer();
  initRouter();
  
}

 window.addEventListener('load', init);

// let db = firebase.firestore();

// db.collection("users").add({
//   first: "Ada",
//   last: "Lovelace",
//   born: 1815
// })
// .then(function(docRef) {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//   console.error("Error adding document: ", error);
// });