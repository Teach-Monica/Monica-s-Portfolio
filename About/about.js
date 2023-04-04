


var menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", myFunction);



function myFunction() {
  menuButton.classList.toggle("active");
  document.getElementById("line-1").classList.toggle("active");
  document.getElementById("line-2").classList.toggle("active");
  document.getElementById("line-3").classList.toggle("active");
  document.getElementById("menu").classList.toggle("active");
};

