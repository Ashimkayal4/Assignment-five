document.getElementById("noakhali-donate-btn")
    .addEventListener("click", function () {
      
    let inputNumber = getInputValueById("noakhali-input-number");
    console.log(inputNumber);
        
    if (inputNumber > 0 && !isNaN(inputNumber)) {
      let firstFund = getBtnValueById("noakhali-fund-number");
      let total = firstFund + inputNumber;
      document.getElementById("noakhali-fund-number").innerText = total;
      /* decrease main balance */
      let accountBalance = getBtnValueById("account-balance-number");
      let accountBalanceLeft = accountBalance - inputNumber;
      document.getElementById("account-balance-number").innerText = accountBalanceLeft;
    }
    else {
        alert('invalid input')
    }
  });
