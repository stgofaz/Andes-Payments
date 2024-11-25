// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjcbaj_6oGJUzVXUUqNH2FuJ1YYwPic9s",
    authDomain: "andes-payments.firebaseapp.com",
    projectId: "andes-payments",
    storageBucket: "andes-payments.appspot.com",
    messagingSenderId: "60674487113",
    appId: "1:60674487113:web:b30b11f9abf19071526098",
    measurementId: "G-4VSW41KXE9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Attach click event listener to the <a> tag
document.getElementById("sendMessageButton").addEventListener("click", async (e) => {
    e.preventDefault(); // Prevent the default anchor behavior (navigating to #)

    // Get form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate input fields
    if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    try {
        // Save data to Firestore
        await db.collection("ContactMessages").add({
            name: name,
            email: email,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        // Success message
        alert("Your message has been sent successfully!");
        document.getElementById("contactForm").reset(); // Clear the form
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("There was an error submitting your message. Please try again.");
    }
});
