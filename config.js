import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyB4ONeiiSLCaqeNgpCMnNDewXXHE4FTIHA",
    authDomain: "teamvoting-7995d.firebaseapp.com",
    projectId: "teamvoting-7995d",
    storageBucket: "teamvoting-7995d.appspot.com",
    messagingSenderId: "118609931187",
    appId: "1:118609931187:web:9ffa44c82602c0a632f9c6",
    measurementId: "G-YP2EKXS2F0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();