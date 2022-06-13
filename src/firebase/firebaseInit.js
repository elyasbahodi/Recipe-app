import  firebase  from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBmHqCrXcYxNdt8BJCHHtwhEUDnXsiz0Kc",
    authDomain: "recipe-app-b76cd.firebaseapp.com",
    projectId: "recipe-app-b76cd",
    storageBucket: "recipe-app-b76cd.appspot.com",
    messagingSenderId: "188861888084",
    appId: "1:188861888084:web:d05b9deef2c68d9c005fc1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();