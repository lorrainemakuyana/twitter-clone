import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSuo6ciTpcF8iGzrexSsXe28qODtQhIlI",
    authDomain: "twitter-clone-26c11.firebaseapp.com",
    databaseURL: "https://twitter-clone-26c11-default-rtdb.firebaseio.com",
    projectId: "twitter-clone-26c11",
    storageBucket: "twitter-clone-26c11.appspot.com",
    messagingSenderId: "922838100393",
    appId: "1:922838100393:web:1764804a67790ef69a3cb8",
    measurementId: "G-8M7PBD5DTM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 

const db = firebaseApp.firestore(); 

export default db; 