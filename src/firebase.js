import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA498SubYTBCF5gW1d75QAKYi9jZZfeFMU",
    authDomain: "clone-3458d.firebaseapp.com",
    projectId: "clone-3458d",
    storageBucket: "clone-3458d.appspot.com",
    messagingSenderId: "99811353631",
    appId: "1:99811353631:web:b3be2cb777bed0530a212a"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };