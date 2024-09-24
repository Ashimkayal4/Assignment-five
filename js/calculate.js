
/*Noakhali button function*/

document.getElementById("noakhali-donate-btn").addEventListener("click", function () {
  
  let accountBtn = getBtnValueById("account-balance-number");
  let fundBtn = getBtnValueById("noakhali-fund-number");
    let inputValue = getInputValueById("noakhali-input-number");
    
    if (inputValue > 0 && !isNaN(inputValue) && inputValue <= accountBtn) {

        let inputNumber = parseFloat(getInputValueById("noakhali-input-number"));

       let fundTotal = inputNumber + fundBtn;
       document.getElementById("noakhali-fund-number").innerText = fundTotal;
       let remainBalance = accountBtn - inputNumber;
        document.getElementById("account-balance-number").innerText = remainBalance;
        
        document.getElementById("my-modal").showModal();

       let div = document.createElement("div");
       div.classList.add("border");
       div.classList.add("rounded-md");
       div.classList.add("mb-5");
       div.classList.add("p-5");
       div.innerHTML = `
      <p class="font-semibold text-xl mb-3">${inputNumber} Taka is Donated for Flood Relief at Noakhali,Bangladesh</p>
      <p>Date: ${Date()}</p>
      `;
       document.getElementById("show-history-section").appendChild(div); 
    }

    else {
        alert("Invalid Input Number");
    }
});


/* Feni button section */

document.getElementById("feni-donation-btn").addEventListener("click", function () {
    let accountBtn = getBtnValueById("account-balance-number");
    let fundBtn = getBtnValueById("feni-fund-number");
    let inputValue = getInputValueById("feni-input-number");

    if (inputValue > 0 && !isNaN(inputValue) && inputValue <= accountBtn) {
      let inputNumber = parseFloat(getInputValueById("feni-input-number"));

      let fundTotal = inputNumber + fundBtn;
      document.getElementById("feni-fund-number").innerText = fundTotal;
      let remainBalance = accountBtn - inputNumber;
      document.getElementById("account-balance-number").innerText =
        remainBalance;

      document.getElementById("my-modal").showModal();

      let div = document.createElement("div");
      div.classList.add("border");
      div.classList.add("rounded-md");
      div.classList.add("mb-5");
      div.classList.add("p-5");
      div.innerHTML = `
      <p class="font-semibold text-xl mb-3">${inputNumber} Taka is Donated for Flood Relief in feni,Bangladesh</p>
      <p>Date: ${Date()}</p>
      `;
      document.getElementById("show-history-section").appendChild(div);
    } else {
      alert("Invalid Input Number");
    }
});

/* Protest button section */

document.getElementById("protest-donation-btn").addEventListener("click", function () {
    let accountBtn = getBtnValueById("account-balance-number");
    let fundBtn = getBtnValueById("protest-fund-number");
    let inputValue = getInputValueById("protest-input-number");

    if (inputValue > 0 && !isNaN(inputValue) && inputValue <= accountBtn) {
      let inputNumber = parseFloat(getInputValueById("protest-input-number"));

      let fundTotal = inputNumber + fundBtn;
      document.getElementById("protest-fund-number").innerText = fundTotal;
      let remainBalance = accountBtn - inputNumber;
      document.getElementById("account-balance-number").innerText =
        remainBalance;

      document.getElementById("my-modal").showModal();

      let div = document.createElement("div");
      div.classList.add("border");
      div.classList.add("rounded-md");
      div.classList.add("mb-5");
      div.classList.add("p-5");
      div.innerHTML = `
      <p class="font-semibold text-xl mb-3">${inputNumber} Taka is Aid for Injured in the Quota Movement,Bangladesh</p>
      <p>Date: ${Date()}</p>
      `;
      document.getElementById("show-history-section").appendChild(div);
    }
    else {
      alert("Invalid Input Number");
    }
});