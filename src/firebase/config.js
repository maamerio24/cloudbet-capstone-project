import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDT1EtRIdFA910IBKQEJaodFKtVxdle-wI",
    authDomain: "cloudbet-react-project.firebaseapp.com",
    projectId: "cloudbet-react-project",
    storageBucket: "cloudbet-react-project.appspot.com",
    messagingSenderId: "4051195981",
    appId: "1:4051195981:web:52d871eaa1d244e29ae404"
};



export const firebaseApp = initializeApp(firebaseConfig);