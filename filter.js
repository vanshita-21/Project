// -------------------influencer---------------------

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
  
  var filterDB = firebase.database().ref("filter");

  document.getElementById("filter").addEventListener("filter" , submitForm);

  function submitForm(e) {
    e.preventDefault();

    var Influencer_filter = getElementVal("Influencer_filter");
    var interested_location = getElementVal("interested_location");
    var price = getElementVal("price");

    saveMessages(Influencer_filter, interested_location, price);

    // enable the alert

    document.querySelector(".alert").style.display = "block";

    // Remove the alert

    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    //reset the form

    document.getElementById("filter").reset();
  }

  const saveMessages = (Influencer_filter, interested_location, price ) => {
    var newfilter = filterDB.push();

    newfilter.set({
        Influencer_filter : Influencer_filter,
        interested_location : interested_location,
        price : price,
      
    });
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

