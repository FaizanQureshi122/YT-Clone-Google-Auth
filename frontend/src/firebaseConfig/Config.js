import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCymf5sI4UBIw7n07yHi1p407gn6iDH4XY",
    authDomain: "video-a5910.firebaseapp.com",
    projectId: "video-a5910",
    storageBucket: "video-a5910.appspot.com",
    messagingSenderId: "979339447027",
    appId: "1:979339447027:web:c849b81f281074a0f70586"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { app, auth, provider, storage, ref, uploadBytesResumable, getDownloadURL }