import firebase from 'firebase'

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyAS8SItx4g-LTf0s27kTWP5GQAaJ1Mof10",
    authDomain: "clone-cc6d4.firebaseapp.com",
    projectId: "clone-cc6d4",
    storageBucket: "clone-cc6d4.appspot.com",
    messagingSenderId: "725015281010",
    appId: "1:725015281010:web:5e3bfea927f41fad3431eb",
    measurementId: "G-0Q4Y3RCXTP"
  });

  const db = firebase.firestore();

  export { db } 