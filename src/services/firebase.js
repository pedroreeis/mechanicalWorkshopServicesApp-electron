import { initializeApp } from "firebase/app";

const firebaseConfig = {
  databaseURL: "your-url-paunocu"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }
