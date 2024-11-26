// Add an event listener to the Send Message button
document.getElementById("sendMessageButton").addEventListener("click", function () {
    // Get the form input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate the inputs
    if (!name || !email || !message) {
        alert("All fields are required!");
        return;
    }

    // Access the Firestore database (db must be defined in the Firebase script in your HTML)
    const db = firebase.firestore();

    // Add the form data to the "messages" collection
    db.collection("messages")
        .add({
            name: name,
            email: email,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
            // Success message and reset the form
            alert("Message sent successfully!");
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        .catch((error) => {
            // Log the error and show an alert
            console.error("Error sending message: ", error);
            alert("An error occurred. Please try again.");
        });
});

