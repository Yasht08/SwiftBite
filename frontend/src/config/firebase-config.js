import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBufNbLcCqttNi7XBh8c9UCkqw9CXw9wIU",
  authDomain: "swiftbite-131f8.firebaseapp.com",
  projectId: "swiftbite-131f8",
  storageBucket: "swiftbite-131f8.appspot.com",
  messagingSenderId: "994960913394",
  appId: "1:994960913394:web:6058531733e4ab82df316b",
  measurementId: "G-G5HSQ0CBM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
