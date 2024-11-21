function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}


document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users"));

  const newUser = [{
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  }]

  users.push(newUser);
  
  localStorage.setItem("users", JSON.stringify(users));

  console.log(users);
})


