import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBIA4WMVZVbqciR6bB4GwwPVyQetjnBSf0",
  authDomain: "livecount-62626.firebaseapp.com",
  projectId: "livecount-62626",
  storageBucket: "livecount-62626.firebasestorage.app",
  messagingSenderId: "458073687884",
  appId: "1:458073687884:web:f6b3352d3466923e95f1e9"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
