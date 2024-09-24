document.getElementById("open-donate-section")
  .addEventListener("click", function () {
    document.getElementById("show-donate-section").classList.remove("hidden");
    document.getElementById("show-history-section").classList.add("hidden");
    document.getElementById('open-donate-section').classList.add('bg-[#B4F461]')
    document.getElementById("open-history-section").classList.remove("bg-[#B4F461]");
  });
document.getElementById("open-history-section")
  .addEventListener("click", function () {
    document.getElementById("show-donate-section").classList.add("hidden");
    document.getElementById("show-history-section").classList.remove("hidden");
    document.getElementById("open-donate-section").classList.remove("bg-[#B4F461]");
    document.getElementById("open-history-section").classList.add("bg-[#B4F461]");
  });

/* get btn value common function */
function getBtnValueById(id) {
  let btnValueNumber = parseFloat(document.getElementById(id).innerText);
  return btnValueNumber;
}

/* get input value by common function */
function getInputValueById(id) {
  let inputValueNumber = document.getElementById(id).value;
  return inputValueNumber;
}

/* common function that works every donation section*/

function updateFundBalance(inputId, fundId, balanceId) {

  let inputNumber = getInputValueById(inputId);
  let accountBalance = getBtnValueById(balanceId);
  
  if (inputNumber > 0 && !isNaN(inputNumber) && inputNumber < accountBalance) {
    let addNumber = parseFloat(getInputValueById(inputId));
    let currentFund = getBtnValueById(fundId);
    let total = currentFund + addNumber;
    document.getElementById(fundId).innerText = total;

    /* modal show set up in common function */ 
    document.getElementById("my-modal").showModal();

    /* decrease main balance */
    let accountBalance = getBtnValueById(balanceId);
    let accountBalanceLeft = accountBalance - addNumber;
    document.getElementById(balanceId).innerText = accountBalanceLeft;

  }
  else {
    alert("Invalid Donation Amount");
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
  let balanceMain1 = getBtnValueById("account-balance-number");

  if (donateMoney > 0 && !isNaN(donateMoney) && balanceMain1 > donateMoney) {
    let div = document.createElement("div");
    div.classList.add("border");
    div.classList.add("rounded-md");
    div.classList.add("mb-5");
    div.classList.add("p-5");

    div.innerHTML = `
    <p class="font-semibold text-xl mb-3">${donateMoney} Taka is Donated for Flood Relief at Noakhali,Bangladesh</p>
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
  let balanceMain2 = getBtnValueById("account-balance-number");
  let DonateMoney = getInputValueById("feni-input-number");

  if (DonateMoney > 0 && !isNaN(DonateMoney) && balanceMain2 > DonateMoney) {
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
  let balanceMain3 = getBtnValueById("account-balance-number");
  if (donate > 0 && !isNaN(donate) && balanceMain3 > donate) {
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

/* went to blog section function */
document.getElementById("blog-btn-inside-main").addEventListener('click', function () {
  window.location.href="./blog.html"
});

