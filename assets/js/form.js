// Firebase configuration
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
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Add an event listener for the "Send Message" button
document.getElementById("sendMessageButton").addEventListener("click", function () {
    // Get form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate form fields
    if (!name || !email || !message) {
        alert("All fields are required. Please fill out the form.");
        return;
    }

    // Store the form data in Firestore
    db.collection("messages")
        .add({
            name: name,
            email: email,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
            alert("Message sent successfully!");
            // Clear form fields
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            alert("There was an error sending your message. Please try again.");
        });
});









