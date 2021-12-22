const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyBPC5Vp2OSoQGUaZl8kiAE0EDmY-WBsvfc",
    authDomain: "we-sopt-29-46fb9.firebaseapp.com",
    databaseURL: "https://we-sopt-29-46fb9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "we-sopt-29-46fb9",
    storageBucket: "we-sopt-29-46fb9.appspot.com",
    messagingSenderId: "408559139415",
    appId: "1:408559139415:web:6487bf11eec340f210c112",
    measurementId: "G-WBG72Z2HPJ"
};


const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

module.exports = { firebaseApp, firebaseAuth, firebaseConfig };