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
  
  var ApplyFormDB = firebase.database().ref("ApplyForm");

  document.getElementById("ApplyForm").addEventListener("submit" , submitForm);

  function submitForm(e) {
    e.preventDefault();

    var name2 = getElementVal("name2");
    var Category2 = getElementVal("Category2");
    var upload_file = getElementVal("upload_file");
    var Budget = getElementVal("Budget");
    var text_area = getElementVal("text_area");

    saveMessages(name2, Category2, upload_file, Budget, text_area);

    // enable the alert

    document.querySelector(".alert").style.display = "block";

    // Remove the alert

    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    //reset the form

    document.getElementById("ApplyForm").reset();
  }

  const saveMessages = (name2, Category2, upload_file, Budget, text_area) => {
    var newApplyForm = ApplyFormDB.push();

    newApplyForm.set({
      name2 : name2,
      Category2 : Category2,
      upload_file : upload_file,
      Budget : Budget,
      text_area : text_area,
      
    });
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };

