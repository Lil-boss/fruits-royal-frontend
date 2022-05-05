
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBuNuxL-9tnoBvaLufD6-cxsRSIXJX4Q-c",
    authDomain: "fruits-royal.firebaseapp.com",
    projectId: "fruits-royal",
    storageBucket: "fruits-royal.appspot.com",
    messagingSenderId: "918230410292",
    appId: "1:918230410292:web:3d8b65035d796ccff91661"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;