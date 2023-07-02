import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAu592Vf6bHONC0xSMurMlgjBNO2TUumzU",
  authDomain: "address-clone-app.firebaseapp.com",
  projectId: "address-clone-app",
  storageBucket: "address-clone-app.appspot.com",
  messagingSenderId: "375413852451",
  appId: "1:375413852451:web:52683bb1e716703e7a6496",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
