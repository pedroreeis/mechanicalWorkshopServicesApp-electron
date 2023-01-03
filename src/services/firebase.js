import { initializeApp } from "firebase/app";

const firebaseConfig = {
  /*apiKey: "AIzaSyBoCCslyNaSQPuR16NOqoxktxtIgQE411E",
  authDomain: "mechanic-workshop-service.firebaseapp.com",
  projectId: "mechanic-workshop-service",
  storageBucket: "mechanic-workshop-service.appspot.com",
  messagingSenderId: "807101110177",
  appId: "1:807101110177:web:39c46e9641c5c6653c5de0",*/
  databaseURL: "https://mechanic-workshop-service-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }