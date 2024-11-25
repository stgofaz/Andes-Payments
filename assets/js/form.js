// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjcbaj_6oGJUzVXUUqNH2FuJ1YYwPic9s",
  authDomain: "andes-payments.firebaseapp.com",
  projectId: "andes-payments",
  storageBucket: "andes-payments.firebasestorage.app",
  messagingSenderId: "60674487113",
  appId: "1:60674487113:web:b30b11f9abf19071526098",
  measurementId: "G-4VSW41KXE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Add an event listener for the "Send Message" button
document.getElementById("sendMessageButton").addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("All fields are required!");
        return;
    }

    db.collection("messages").add({
        name: name,
        email: email,
        message: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        alert("Message sent successfully!");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    })
    .catch((error) => {
        console.error("Error adding document:", error);
        alert("There was an error sending your message. Please try again.");
    });
});