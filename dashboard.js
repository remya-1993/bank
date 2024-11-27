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

// redirection - logout in profile picture

function logout() {
  window.location.assign("login.html")
  alert("Logged out successfully");
}

// firstname changing

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
document.getElementById("firstName").textContent = `Welcome, ${loggedInUser.firstName}!`;

// Money transfer

let transfer_popup = document.getElementById("transfer_popup");
function transfer() {
  transfer_popup.classList.add("transferOpen-popup");
}
function closed() {
  transfer_popup.classList.remove("transferOpen-popup");
}

function moneyTransfer() {
  const acnumberInput = document.getElementById("acNumber");
  const amountInput = document.querySelector('input[name="number"]');
  const remarksInput = document.querySelector('input[name="text"]');

  const accountNumber = acnumberInput.value;
  const amount = parseFloat(amountInput.value);
  const remarks = remarksInput.value;

  if (accountNumber === "" || amount === "" || remarks === "") {
    alert("Please fill in all fields.");
    return;
  }
  alert("Money successfully transferred.");

  // totalBalance -= amount;
  document.querySelector(".balance .balance_card h2").innerHTML = ` $ ${totalBalance}`;

  closed();

  const transaction = {
    accountNumber,
    amount,
    remarks
  };
  localStorage.setItem("transaction", JSON.stringify(transaction));
}



// Set MPIN POPUP

let popup = document.getElementById("popup");
function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}



function setMPIN() {
  const mpinInputs = document.querySelectorAll(".buttonNumber");
  const confirmMpinInputs = document.querySelectorAll(".confirm_button_number");

  const mpin = [];
  const confirmMpin = [];

  mpinInputs.forEach((input) => {
    mpin.push(input.value);
  });

  confirmMpinInputs.forEach((input) => {
    confirmMpin.push(input.value);
  });

  if (mpin.join("") === confirmMpin.join("")) {
    alert("MPIN set successfully!");
    closePopup();

    localStorage.setItem("mpin", mpin.join(""));
  }

  else {
    alert("MPIN and Confirm MPIN do not match. Please try again.");
  }
}

// withdraw money with MPIN

let popup1 = document.getElementById("popup1");
let storedMpin = localStorage.getItem("mpin");

function openPopup1() {
  popup1.classList.add("open-popup1");
}

function closePopup1() {
  popup1.classList.remove("open-popup1");
}

function verifyMpin() {
  const mpinInputs = document.querySelectorAll(".buttonNumber");
  const enteredMpin = [];

  mpinInputs.forEach((input) => {
    enteredMpin.push(input.value);
  });



  if (enteredMpin.join("") === storedMpin) {
    alert("MPIN is correct. Withdrawal processing...");

    document.querySelector(".withdraw .withdraw_card h2").innerHTML = `$ ${totalWithdrawal}`;
    document.querySelector(".balance .balance_card h2").innerHTML = ` $ ${totalBalance}`;


    closePopup1();
  }
  else {
    alert("Invalid MPIN. Please try again.");
  }
}




// deposit and withdrawal

let totalDeposit = 0;
let totalWithdrawal = 0;
let totalBalance = 0;

document.querySelector(".deposit .dep_card h2").innerHTML = `$ ${totalDeposit}`
document.querySelector(".withdraw .withdraw_card h2").innerHTML = ` $ ${totalWithdrawal}`;
document.querySelector(".balance .balance_card h2").innerHTML = ` $ ${totalBalance}`;

function depositMoney() {
  const depositAmount = parseFloat(document.getElementById("deposit-amount").value);

  if (isNaN(depositAmount) || depositAmount <= 0) {
    alert("Invalid Deposit Amount")
    return;
  }

  totalDeposit += depositAmount;
  totalBalance += depositAmount;

  document.querySelector(".deposit .dep_card h2").innerHTML = `$ ${totalDeposit}`;
  document.querySelector(".balance .balance_card h2").innerHTML = ` $ ${totalBalance}`;


  document.getElementById("deposit-amount").value = "";
}

function withdrawMoney() {
  const withdrawAmount = parseFloat(document.getElementById("withdraw-amount").value);

  if (isNaN(withdrawAmount) || withdrawAmount <= 0 || withdrawAmount > totalBalance) {
    alert("Invalid Withdraw Amount")
    return;
  }

  totalWithdrawal += withdrawAmount;
  totalBalance -= withdrawAmount;


  document.getElementById("withdraw-amount").value = "";

}



document.getElementById("deposit-btn").addEventListener("click", depositMoney);
document.getElementById("withdraw-btn").addEventListener("click", withdrawMoney);



// atmCard name changing

function updateAtmCardName() {
  const firstNameElement = document.getElementById("firstName");

  const atmCardNameElement = document.querySelector(".atmCard .a1");

  atmCardNameElement.textContent = firstNameElement.textContent.replace("Welcome, ", "").replace("!", "");
}

updateAtmCardName();
