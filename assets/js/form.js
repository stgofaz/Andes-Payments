// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, setDoc, doc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6ytoo25Uq7ps5FmL1JAhrh6AmQ1EWpKc",
  authDomain: "consulting-66910.firebaseapp.com",
  projectId: "consulting-66910",
  storageBucket: "consulting-66910.firebasestorage.app",
  messagingSenderId: "1012615419683",
  appId: "1:1012615419683:web:16dee841f02db45f889e96",
  measurementId: "G-845S76R3CW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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

  console.log("Form data:", { name, email, message });

  try {
    const docRef = await setDoc(doc(collection(db, "Contactoform")), {
      name,
      email,
      message,
      timestamp: serverTimestamp(),
    });
    console.log("Document written with ID:", docRef.id);
    alert("Message sent successfully!");
    document.getElementById("contact_form").reset();
  } catch (error) {
    console.error("Error adding document:", error.message);
    console.error("Error code:", error.code);
    console.error("Error stack:", error.stack);
    alert(`An error occurred: ${error.message}`);
  }
});
