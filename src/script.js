document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("buttomMenu").addEventListener("click", openMenu);
});

function openMenu() {
  let navMobile = document.getElementById("navMobile");
  navMobile.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("buttomClose").addEventListener("click", closeMenu);
  });
  
  function closeMenu() {
    let navMobile = document.getElementById("navMobile");
    navMobile.classList.add("hidden");
  }
