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

    /* modal show set up in common function */ 
    document.getElementById("my-modal").showModal();

    /* decrease main balance */
    let accountBalance = getBtnValueById(balanceId);
    let accountBalanceLeft = accountBalance - inputNumber;
    document.getElementById(balanceId).innerText = accountBalanceLeft;
    
  }
  else {
    alert("invalid input number");
  }
}

/* call the common donation function // section : 1 */
document.getElementById("noakhali-donate-btn").addEventListener('click', function () {
  updateFundBalance(
    "noakhali-input-number",
    "noakhali-fund-number",
    "account-balance-number"
  );
 
  let donateMoney = getInputValueById("noakhali-input-number");

  if (donateMoney > 0 && !isNaN(donateMoney)) {
    let div = document.createElement("div");
    div.classList.add("border");
    div.classList.add("rounded-md");
    div.classList.add("mb-5");
    div.classList.add("p-5");

    div.innerHTML = `
    <p class="font-semibold text-xl mb-3">${donateMoney} Taka is Donated for Flood Relief in Noakhali,Bangladesh</p>
    <p>Date: ${Date()}</p>
  `;
   document.getElementById("show-history-section").appendChild(div);
  }
  
  
});


/* call the common donation function // section : 2*/
document.getElementById("feni-donation-btn").addEventListener('click', function () {
  updateFundBalance(
    "feni-input-number",
    "feni-fund-number",
    "account-balance-number"
  )

  let DonateMoney = getInputValueById("feni-input-number");

  if (DonateMoney > 0 && !isNaN(DonateMoney)) {
    let div = document.createElement('div');
    div.classList.add('border')
    div.classList.add('rounded-md')
    div.classList.add('mb-5')
    div.classList.add('p-5')
    div.innerHTML = `
    <p class="font-semibold text-xl mb-3">${DonateMoney} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
    <p>Date: ${Date()}</p>
  `;
  document.getElementById("show-history-section").appendChild(div);
  }


});


/* call the common donation function // section : 3 */
document.getElementById("protest-donation-btn").addEventListener('click', function () {
  updateFundBalance(
    "protest-input-number",
    "protest-fund-number",
    "account-balance-number"
  )
  let donate = getInputValueById("protest-input-number");
  if (donate > 0 && !isNaN(donate)) {
    let div = document.createElement("div");
    div.classList.add("border");
    div.classList.add("rounded-md");
    div.classList.add("mb-5");
    div.classList.add("p-5");

    div.innerHTML = `
    <p class="font-semibold text-xl mb-3">${donate} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
    <p>Date: ${Date()}</p>
  `;
    document.getElementById("show-history-section").appendChild(div);
  }
});
