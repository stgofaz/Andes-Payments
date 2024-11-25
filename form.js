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

// Attach event listener to the <a> tag
document.getElementById("sendMessageButton").addEventListener("click", async (e) => {
    e.preventDefault(); // Prevent default behavior of <a> tag

    // Get values from form fields
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate inputs
    if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    try {
        // Save data to Firestore
        await db.collection("Contact Andes Payments").add({
            name: name,
            email: email,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        // Show success message and reset the form
        alert("Your message was sent successfully!");
        document.getElementById("contactForm").reset();
    } catch (error) {
        console.error("Error sending the message:", error);
        alert("There was an error submitting your message. Please try again.");
    }
});
