// Check if user is logged in
// if (isLoggedIn()) {
//     // Redirect to home page
//     window.location.href = "http://index.html";
//   } else {
//     // Show error message or redirect to login page
//     window.location.href = "http://login.html";
//   }
  

const firebaseConfig = {
    apiKey: "AIzaSyDjaUr-cEtTf0unhIDTO4gmoG350v_bjFY",
    authDomain: "loginform-745df.firebaseapp.com",
    databaseURL: "https://loginform-745df-default-rtdb.firebaseio.com",
    projectId: "loginform-745df",
    storageBucket: "loginform-745df.appspot.com",
    messagingSenderId: "129672860453",
    appId: "1:129672860453:web:17b13749c7ec023880c0cc"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   var db = firebase.firestore();

//   // Fetch data from a collection
// db.collection("clientForm").get().then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//         // doc.data() contains the data of the document
//         // You can access the data and manipulate it as needed
//         console.log(doc.id, " => ", doc.data());
//         // Display the data in your website section
//         // For example, append it to an HTML element
//         var element = document.getElementById("your_element_id");
//         element.innerHTML += "<p>" + doc.data().field1 + "</p>"; // Example field1 from the fetched data
//     });
// }).catch(function(error) {
//     console.log("Error getting documents: ", error);
// });

// Fetch data from Firebase and display in a list



// Get form element by ID
const form = document.getElementById('clientForm');

// Add form submit event listener
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission

  // Get form data
  const name = document.getElementById('inlineFormInput').value;
  const platform = document.getElementById('platform').value;
  const id = document.getElementById('id').value;
  const category = document.getElementById('Category').value;
  const priceRange = document.getElementById('price-range').value;
  const location = document.getElementById('location').value;

  // Create a new data object to be stored in Firebase
  const formData = {
    name: name,
    platform: platform,
    id: id,
    category: category,
    priceRange: priceRange,
    location: location
  };

  // Store form data in Firebase
  firebase.database().ref('clientForm').push(formData)
    .then(() => {
      console.log('Form data stored in Firebase successfully');
      // Reset form fields after successful submission
      form.reset();
    })
    .catch((error) => {
      console.error('Error storing form data in Firebase: ', error);
    });
});