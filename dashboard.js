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

// Set MPIN POPUP

let popup = document.getElementById("popup");
function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
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

    document.querySelector(".withdraw .withdraw_card h2").innerHTML = `$ ${totalWithdrawal}`;
    document.querySelector(".balance .balance_card h2").innerHTML = ` $ ${totalBalance}`;


    document.getElementById("withdraw-amount").value = "";

}

document.getElementById("deposit-btn").addEventListener("click", depositMoney);
document.getElementById("withdraw-btn").addEventListener("click", withdrawMoney);

