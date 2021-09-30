import firebase from 'firebase'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCJZ15SpjcR3aQEC8vh5j1WFT5-DC2y_SI",
    authDomain: "linkedin-clone-ca119.firebaseapp.com",
    projectId: "linkedin-clone-ca119",
    storageBucket: "linkedin-clone-ca119.appspot.com",
    messagingSenderId: "110398473202",
    appId: "1:110398473202:web:5c83f256f2718ab83fa16b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};
