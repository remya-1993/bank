



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



function validateLoginForm() {
  const email = document.getElementById("email").value.trim().toLowerCase();;
  const password = document.getElementById("password").value.trim().toLowerCase();;
  const storedUserDatas = JSON.parse(localStorage.getItem("users"));

 
  let loginSuccessful = false;  
  let loggedInUser;

  for (userData of storedUserDatas) {
    if (email === userData.email.toLowerCase() && password === userData.password.toLowerCase()) {
      loginSuccessful = true;
      loggedInUser = userData;
      break;
    } 

  }

  if (loginSuccessful) {
    alert("Login Successfully");

    localStorage.setItem("loggedInUser", email);

    window.location.assign("dashboard.html")
  }
  else {
    alert("failed");

  }

}


