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

  // reference your database
  
  var clientFormDB = firebase.database().ref("clientForm");

  document.getElementById("clientForm").addEventListener("submit" , submitForm);

  function submitForm(e) {
    e.preventDefault();

    var name1 = getElementVal("name1");
    var platform1 = getElementVal("platform1");
    var socialmediaid1 = getElementVal("socialmediaid1");
    var Category1 = getElementVal("Category1");
    var price_range1 = getElementVal("price-range1");
    var location1 = getElementVal("location1");
    

    saveMessages(name1, platform1, socialmediaid1, Category1, price_range1, location1);

    // enable the alert

    document.querySelector(".alert").style.display = "block";

    // Remove the alert

    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    //reset the form

    document.getElementById("clientForm").reset();
  }

  const saveMessages = (name1, platform1, socialmediaid1, Category1, price_range1, location1) => {
    var newclientForm = clientFormDB.push();

    newclientForm.set({
      name1 : name1,
      platform1 : platform1,
      socialmediaid1 : socialmediaid1, 
      Category1 : Category1,
      price_range1 : price_range1,
      location1 : location1,
      
    });
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

