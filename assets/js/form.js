// Get references to your form elements
const sendMessageButton = document.getElementById("sendMessageButton");

// Add a click event listener to the button
sendMessageButton.addEventListener("click", function () {
    // Get form field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate the input
    if (!name || !email || !message) {
        alert("All fields are required!");
        return;
    }

    // Send data to Firestore
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
            alert("Error sending message. Please try again.");
        });
});
