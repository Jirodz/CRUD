import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyCrcTlgviBYUi3z60xKkGlpjXI59AlDo",

    authDomain: "room-e36e3.firebaseapp.com",
  
    projectId: "room-e36e3",
  
    storageBucket: "room-e36e3.appspot.com",
  
    messagingSenderId: "870382287853",
  
    appId: "1:870382287853:web:036fe29c35d8d4333bc5e4",
  
    measurementId: "G-2WD1CZCE08"
  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };