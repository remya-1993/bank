function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



function validateLoginForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const storedUserDatas = JSON.parse(localStorage.getItem("users"));
  let loginSuccessful = false;
  

  for (userData of storedUserDatas) {
    if (email == userData[0].email && password == userData[0].password) {
      loginSuccessful = true;
      loggedInUser = userData[0];
      break;

    }

  }

  if (loginSuccessful) {
    alert("Successful");

    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    window.location.assign("dashboard.html")
  }
  else {
    alert("failed");

  }

}


