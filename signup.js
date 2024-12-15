function loginpage(){
  window.location.assign("login.html")
}




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
  const phoneNumber = document.getElementById("phoneNumber").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const accountNumber = Math.floor(10000000 + Math.random() * 90000000);
  const mpin = Math.floor(1000 + Math.random() * 9000);
  const balance = 0;
  const deposit = 0;
  const withdraw = 0;
  const loanamount = 0;
  const pendingloanAmount = 0;
  

  let users = JSON.parse(localStorage.getItem("users"));

  if (!users) {
    users = [];
  }

  if (firstName === "" || phoneNumber === "" || email === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }


  const newUser = {
    firstName: firstName,
    phoneNumber: phoneNumber,
    email: email,
    password: password,
    accountNumber: accountNumber,
    mpin: mpin,
    balance: balance,
    deposit: deposit,
    withdraw: withdraw,
    loanamount: loanamount,
    pendingloanAmount: pendingloanAmount,
   
  }


  localStorage.setItem(email, JSON.stringify(newUser));
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("balance", JSON.stringify(balance));
  localStorage.setItem("deposit", JSON.stringify(deposit));
  localStorage.setItem("withdraw", JSON.stringify(withdraw));
  localStorage.setItem("loanAmount", JSON.stringify(loanamount));
  localStorage.setItem("pendingloanAmount", JSON.stringify(pendingloanAmount));
  

  console.log(users);

  alert("Sign Up successfully done.");
  alert(`Your Account Number: ${accountNumber}`)
  alert(`Your MPIN:${mpin}`)

  window.location.assign("login.html")
})



