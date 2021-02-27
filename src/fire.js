import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBqO1wN3xGMboTR1p11KCAUhYcGq1QodLY",
  authDomain: "login-aa2aa.firebaseapp.com",
  projectId: "login-aa2aa",
  storageBucket: "login-aa2aa.appspot.com",
  messagingSenderId: "1030305707779",
  appId: "1:1030305707779:web:8cb218a49f7bfa5381db36",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
