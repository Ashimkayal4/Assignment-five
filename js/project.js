document.getElementById("open-donate-section").addEventListener('click', function () {
    document.getElementById("show-donate-section").classList.remove('hidden');
    document.getElementById('show-history-section').classList.add('hidden');
});
document
  .getElementById("open-history-section").addEventListener("click", function () {
    document.getElementById("show-donate-section").classList.add("hidden");
    document.getElementById("show-history-section").classList.remove("hidden");
  });