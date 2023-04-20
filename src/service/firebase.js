import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0TSCw0MzCLAr0Vni5Ll2Gs7B8O3pqrAM",
  authDomain: "corrente-do-bem-10dcc.firebaseapp.com",
  databaseURL: "https://corrente-do-bem-10dcc-default-rtdb.firebaseio.com",
  projectId: "corrente-do-bem-10dcc",
  storageBucket: "corrente-do-bem-10dcc.appspot.com",
  messagingSenderId: "856324046590",
  appId: "1:856324046590:web:e41b307daaa29311ceefaf",
  measurementId: "G-EWM4VP0NPC"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default firebase