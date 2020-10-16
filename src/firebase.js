import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAcMJbFOqcesYDuH9rWr6Ho1qb3VjcQNww",
  authDomain: "discord-clone-64761.firebaseapp.com",
  databaseURL: "https://discord-clone-64761.firebaseio.com",
  projectId: "discord-clone-64761",
  storageBucket: "discord-clone-64761.appspot.com",
  messagingSenderId: "1000083704640",
  appId: "1:1000083704640:web:ec14bbdfe0d36dfe5808a5",
  measurementId: "G-YSH09L6P6J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
