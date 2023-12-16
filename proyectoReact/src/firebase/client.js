import { initializeApp } from "firebase/app"

import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyATJdromZ8Jh9jSEFGjnIaOf-6LYia87PM",
    authDomain: "ecommerce-lamda.firebaseapp.com",
    projectId: "ecommerce-lamda",
    storageBucket: "ecommerce-lamda.appspot.com",
    messagingSenderId: "254023121196",
    appId: "1:254023121196:web:6cc1bde4ea550ad91c1489"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);