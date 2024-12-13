// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
// import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBRHnqXIfnO7S-i1q7RBpXEaLP2QA26B20",
//   authDomain: "login-form-a0e9c.firebaseapp.com",
//   databaseURL: "https://login-form-a0e9c-default-rtdb.firebaseio.com",
//   projectId: "login-form-a0e9c",
//   storageBucket: "login-form-a0e9c.appspot.com",
//   messagingSenderId: "920217204446",
//   appId: "1:920217204446:web:d057645601a3c13323f44f",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// document.getElementById("user-form").addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevent default form submission

//   // Check if all required fields are filled
//   const name = document.getElementById("name").value;
//   const age = document.getElementById("age").value;
//   const phone = document.getElementById("phone").value;

//   if (name === "" || age === "" || phone === "") {
//     alert("Please fill out all fields before submitting.");
//   } else {
//     // Proceed with saving data to Firebase
//     set(ref(database, "users/" + name), {
//       name: name,
//       phone: phone,
//       age: age,
//     })
//       .then(() => {
//         alert("Saved successfully!");
//         window.location.href = "../our doctors.html";
//       })
//       .catch((error) => {
//         console.error("Error saving data: ", error);
//         alert("Failed to save data.");
//       });
//   }
// });


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRHnqXIfnO7S-i1q7RBpXEaLP2QA26B20",
  authDomain: "login-form-a0e9c.firebaseapp.com",
  databaseURL: "https://login-form-a0e9c-default-rtdb.firebaseio.com",
  projectId: "login-form-a0e9c",
  storageBucket: "login-form-a0e9c.appspot.com",
  messagingSenderId: "920217204446",
  appId: "1:920217204446:web:d057645601a3c13323f44f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

document.getElementById("user-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Fetch user input
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name || !age || !phone) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  // Save data to Firebase Realtime Database
  set(ref(database, "users/" + name), {
    name: name,
    phone: phone,
    age: age,
  })
    .then(() => {
      alert("Data saved successfully!");
      // Redirect to 'our doctors.html'
      window.location.href = "our doctors.html";
    })
    .catch((error) => {
      console.error("Error saving data: ", error);
      alert("Failed to save data. Please try again.");
    });
});
