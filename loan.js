let userEmail = localStorage.getItem("loggedInUser");
if (userEmail === null || userEmail === "") {
  window.location.assign("login.html");
}

userEmail = localStorage.getItem("loggedInUser");
let users = JSON.parse(localStorage.getItem("users"));
let userData;
for (var i = 0; i < users.length; i++) {
  console.log(users[i].email)
  if (userEmail == users[i].email) {
    userData = users[i]
  }
}

document.getElementById("loanAmount").innerHTML = `$ ${userData.loanamount}`;
document.getElementById("pendingAmount").innerHTML = `$ ${userData.loanamount}`;

function profileMenu() {
  let subMenu = document.getElementById("subMenu");
  subMenu.classList.toggle("open-menu");
}

function dashboard() {
  window.location.assign("dashboard.html")
}

function logout() {
  window.location.assign("login.html")
  alert("Logged out successfully");
}

function request() {
  const amount = document.getElementById("amountLoan").value;
  const enteredEmail = document.getElementById("email").value;
  const enteredPhoneumber = document.getElementById("phonenumber").value;
  const enteredMPIN = document.getElementById("mpin").value;
  let loanamount = amount;
  if (isNaN(loanamount) || loanamount <= 0) {
    alert('Invalid amount');
    return;
  }
  let users = JSON.parse(localStorage.getItem("users"));
  let moneyRequestSuccessful = false;
  if (enteredEmail == userData.email && enteredPhoneumber == userData.phoneNumber && enteredMPIN == userData.mpin) {
    moneyRequestSuccessful = true;
    loanamount = amount;
  }
  if (moneyRequestSuccessful) {
    alert("Money Credited Successfully");
    userData.balance = parseFloat(userData.balance) + parseFloat(loanamount);
    userData.loanamount = amount;
    userData.pendingloanAmount = amount;
    for (var i = 0; i < users.length; i++) {
      if (userData.email == users[i].email) {
        users[i] = userData
      }
    }
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    alert("Please fill all field!");
  }
}

function proceed() {
  const amountLoan = parseFloat(document.getElementById("loanAmount").innerHTML.replace('$ ', ''));
  const payloanAmount = parseFloat(document.getElementById("payloanAmount").value);
  let pendingAmount = parseFloat(document.getElementById("pendingAmount").innerHTML.replace('$ ', ''));
  if (isNaN(payloanAmount) || payloanAmount <= 0) {
    alert('Please enter a valid payment amount.');
    return;
  }
  if (payloanAmount > pendingAmount) {
    alert('Pay loan amount cannot be more than pending loan amount.');
    return;
  }
  pendingAmount -= payloanAmount;
  document.getElementById("pendingAmount").innerHTML = `$ ${pendingAmount}`;
  if (pendingAmount === 0) {
    alert("Payment successfully done");
    alert("Congratulations! Your loan amount is fully repaid.");
  } else {
    alert("Payment successfully done");
    alert(`Your remaining loan amount is $${pendingAmount}.`);
  }
  userData.balance = parseFloat(userData.balance) - payloanAmount;
  userData.pendingloanAmount = pendingAmount;
  localStorage.setItem("users", JSON.stringify(users));
}
document.getElementById("pendingAmount").innerHTML = `$ ${userData.pendingloanAmount}`;




