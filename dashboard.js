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

document.getElementById("balance_amount").innerHTML =  `$ ${userData.balance}`;
document.getElementById("withdrawal-amount1").innerHTML =  `$ ${userData.withdrawal}`;
document.getElementById("deposit_money").innerHTML =  `$ ${userData.deposit}`;
document.getElementById("firstName").innerHTML = `Welcome, ${userData.firstName}!`;
document.getElementById("account-number").innerHTML = `Your Account Number: ${userData.accountNumber}`;

// profile picture

function profileMenu() {
  let subMenu = document.getElementById("subMenu");
  subMenu.classList.toggle("open-menu");
}

// hamburger Menu

function toggleMenu() {
  var x = document.getElementById("myTopnav");
  x.classList.toggle("responsive");
}

// dashboard redirection

function dashboard() {
  window.location.assign("dashboard.html")
}

// redirection - logout in profile picture

function logout() {
  window.location.assign("login.html")
  alert("Logged out successfully");
  localStorage.removeItem("loggedInUser");
}

// Money transfer popup

let transfer_popup = document.getElementById("transfer_popup");
function transfer() {
  transfer_popup.classList.add("transferOpen-popup");
}
function closed() {
  transfer_popup.classList.remove("transferOpen-popup");
}

// money transfer

document.getElementById("transfer-money-btn").addEventListener("click", (event) => {
  event.preventDefault();

  const transferAmount = parseFloat(document.getElementById('transfer-amount').value);
  const enteraccountNumber = parseInt(document.getElementById('enter-account-number').value);
  const confirmaccountNumber = parseInt(document.getElementById('confirm-account-number').value);
  const remarks = document.getElementById('remarks').value;

  let users = JSON.parse(localStorage.getItem("users"));
  userEmail = localStorage.getItem("loggedInUser");

  const sender = users.find(user => user.email === userEmail);
  const recipient = users.find(user => user.accountNumber === enteraccountNumber);

  if (enteraccountNumber !== confirmaccountNumber) {
    alert("Account numbers do not match!");
    return;
  }

  if (!recipient) {
    alert("Account number not found!");
    return;
  }

  if (transferAmount > sender.balance) {
    alert("Insufficient balance!");
    return;
  }

  sender.balance -= transferAmount;
  recipient.balance += transferAmount;
  localStorage.setItem("users", JSON.stringify(users));
  document.getElementById("balance_amount").innerHTML = `$ ${sender.balance}`;

  alert("Money transferred successfully!");
  return;
});

// withdraw money with MPIN

let withdrawalAmount;

function openMpinPopup(amount) {
  withdrawalAmount = amount;
  popup1.classList.add("open-popup1");
}

function verifyMpin() {
  const mpin1 = document.getElementById("mpin1").value;
  const mpin2 = document.getElementById("mpin2").value;
  const mpin3 = document.getElementById("mpin3").value;
  const mpin4 = document.getElementById("mpin4").value;
  const enteredMpin = mpin1 + mpin2 + mpin3 + mpin4;

  userEmail = localStorage.getItem("loggedInUser");
  const users = JSON.parse(localStorage.getItem("users"));
  const user = users.find(user => user.email === userEmail);

  if (!user) {
    alert("User not found");
    return;
  }

  const storedMpin = user.mpin;
  let storedBalance = user.balance;
  let totalWithdrawal = user.withdrawal || 0;
  const withdrawAmount = parseFloat(document.getElementById("withdraw-amount").value);

  if (enteredMpin === storedMpin.toString()) {
    if (withdrawAmount > 0 && withdrawAmount <= storedBalance) {
      storedBalance -= withdrawAmount;
      totalWithdrawal += withdrawAmount;
      user.balance = storedBalance;
      user.withdrawal = totalWithdrawal;
      localStorage.setItem("users", JSON.stringify(users));
      document.getElementById("balance_amount").innerHTML = `$ ${storedBalance}`;
      document.getElementById("withdrawal-amount1").innerHTML = `$ ${totalWithdrawal}`;

      alert("Amount withdrawal successfully done ");
    } else {
      alert("Insufficient balance or invalid withdrawal amount.");
    }
  } else {
    alert("Invalid MPIN");
  }
}

// money deposit

let totalDeposit = 0;
let totalWithdrawal = 0;
let totalBalance = 0;

function deposit() {
  const depositAmount = parseFloat(document.getElementById("deposit-amount").value);
  if (isNaN(depositAmount) || depositAmount <= 0) {
    alert("Invalid Deposit Amount");
    return;
  } else {
    alert("Amount deposit successfully done")
  }
  userEmail = localStorage.getItem("loggedInUser");
  const users = JSON.parse(localStorage.getItem("users"));
  const user = users.find(user => user.email === userEmail);
  if (!user) {
    alert("User not found");
    return;
  }
  let storedBalance = user.balance || 0;
  let storedDeposit = user.deposit || 0;
  storedBalance += depositAmount;
  storedDeposit += depositAmount;
  user.balance = storedBalance;
  user.deposit = storedDeposit;
  localStorage.setItem("users", JSON.stringify(users));
  document.getElementById("deposit_money").innerHTML = `$ ${storedDeposit}`;
  document.getElementById("balance_amount").innerHTML = `$ ${storedBalance}`;
  document.getElementById("deposit-amount").value = "";
}

// atmCard name changing

function updateAtmCardName() {

  const firstNameElement = document.getElementById("firstName");
  const atmCardNameElement = document.querySelector(".a1");
  atmCardNameElement.textContent = firstNameElement.textContent.replace("Welcome, ", "").replace("!", "");
}
updateAtmCardName();



