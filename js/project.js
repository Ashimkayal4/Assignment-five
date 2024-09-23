document
  .getElementById("open-donate-section")
  .addEventListener("click", function () {
    document.getElementById("show-donate-section").classList.remove("hidden");
    document.getElementById("show-history-section").classList.add("hidden");
  });
document
  .getElementById("open-history-section")
  .addEventListener("click", function () {
    document.getElementById("show-donate-section").classList.add("hidden");
    document.getElementById("show-history-section").classList.remove("hidden");
  });

/* get btn value common function */
function getBtnValueById(id) {
  let btnValueNumber = parseFloat(document.getElementById(id).innerText);
  return btnValueNumber;
}

/* get input value by common function */
function getInputValueById(id) {
  let inputValueNumber = parseFloat(document.getElementById(id).value);
  return inputValueNumber;
}

/* common function that works donation section*/
function updateFundBalance(inputId, fundId, balanceId) {
  let inputNumber = getInputValueById(inputId);

  if (inputNumber > 0 && !isNaN(inputNumber)) {
    let currentFund = getBtnValueById(fundId);
    let total = currentFund + inputNumber;
    document.getElementById(fundId).innerText = total;

    /* decrease main balance */

    let accountBalance = getBtnValueById(balanceId);
    let accountBalanceLeft = accountBalance - inputNumber;
    document.getElementById(balanceId).innerText = accountBalanceLeft;
  }
  else {
    alert("invalid input number");
  }
}

/* call the common donation function*/
document.getElementById("noakhali-donate-btn").addEventListener('click', function () {
  updateFundBalance(
    "noakhali-input-number",
    "noakhali-fund-number",
    "account-balance-number"
  );
});

document.getElementById("feni-donation-btn").addEventListener('click', function () {
  updateFundBalance(
    "feni-input-number",
    "feni-fund-number",
    "account-balance-number"
  )
});

document.getElementById("protest-donation-btn").addEventListener('click', function () {
  updateFundBalance(
    "protest-input-number",
    "protest-fund-number",
    "account-balance-number"
  )
});
