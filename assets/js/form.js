// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmEntYzTjTJ_UpsQhu-DtMxTGcNDDsj0M",
  authDomain: "form-webpage-b9551.firebaseapp.com",
  projectId: "form-webpage-b9551",
  storageBucket: "form-webpage-b9551.appspot.com",
  messagingSenderId: "746995513724",
  appId: "1:746995513724:web:dacc59687cbe4e3fcf8cf9",
  measurementId: "G-L7CSHZE0CH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add an event listener to the "Send Message" button
document.getElementById("sendMessageButton").addEventListener("click", async function (event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get the form input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate form inputs
  if (!name || !email || !message) {
    alert("All fields are required!");
    return;
  }

  try {
    // Add data to Firestore
    await addDoc(collection(db, "ContactAndesPayments"), {
      name,
      email,
      message,
      timestamp: serverTimestamp()
    });

    // Success message and reset form
    alert("Message sent successfully!");
    document.getElementById("contactForm").reset(); // Clear the form inputs
  } catch (error) {
    // Handle errors
    console.error("Error sending message:", error);
    alert("An error occurred. Please try again.");
  }
});

