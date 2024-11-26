import { addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Add an event listener to the Send Message button
document.getElementById("sendMessageButton").addEventListener("click", async function () {
    // Get the form input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate the inputs
    if (!name || !email || !message) {
        alert("All fields are required!");
        return;
    }

    try {
        // Add the form data to the "messages" collection
        await addDoc(collection(window.db, "messages"), {
            name: name,
            email: email,
            message: message,
            timestamp: serverTimestamp(),
        });
        // Success message and reset the form
        alert("Message sent successfully!");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    } catch (error) {
        // Log the error and show an alert
        console.error("Error sending message: ", error);
        alert("An error occurred. Please try again.");
    }
});