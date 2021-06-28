import firebase from  "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

const FbApp = firebase.initializeApp({    
  apiKey: "AIzaSyBWL_MUDvwDQjrHCQUzhpnQcYEPKP-3wZs",
  authDomain: "hexagon-clone-bdb6d.firebaseapp.com",
  projectId: "hexagon-clone-bdb6d",
  storageBucket: "hexagon-clone-bdb6d.appspot.com",
  messagingSenderId: "352019911536",
  appId: "1:352019911536:web:f4f1573727193c65a7f5b5"
  });

export default FbApp
