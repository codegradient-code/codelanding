
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDMdqJ_hVH4MlOsrUAeso-QEm5X12o2Jh8",
  authDomain: "multiquizchecker.firebaseapp.com",
  projectId: "multiquizchecker",
  storageBucket: "multiquizchecker.firebasestorage.app",
  messagingSenderId: "927666487250",
  appId: "1:927666487250:web:4e727683799fd7acfd120b",
  measurementId: "G-67745QGMPP"
};

const analytics = getAnalytics(app);
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore(); 
const auth = app.auth(); 

// Export Firebase services
export { db, auth };