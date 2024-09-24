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

/* get btn value common : 1 function */
function getBtnValueById(id) {
  let btnValueNumber = parseFloat(document.getElementById(id).innerText);
  return btnValueNumber;
}

/* get input value by common : 2 function */
function getInputValueById(id) {
  let inputValueNumber = document.getElementById(id).value;
  return inputValueNumber;
}


/* went to blog section function */
document.getElementById("blog-btn-inside-main").addEventListener('click', function () {
  window.location.href="./blog.html"
});

