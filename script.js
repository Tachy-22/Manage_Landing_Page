var hamBurger = document.getElementById("hamburger");
var mobileNav = document.getElementById("mobileNav");
hamBurger.addEventListener("click", function () {
  mobileNav.style.display = "flex";
  hamBurger.style.display = "none";
  closeUp.style.display = "flex";
});
var closeUp = document.getElementById("closeUp");
closeUp.addEventListener("click", function () {
  closeUp.style.display = "none";
  mobileNav.style.display = "none";
  hamBurger.style.display = "flex";
});
var anisha = document.getElementById("anisha");
var ali = document.getElementById("ali");
var shanai = document.getElementById("shanai");
var richard = document.getElementById("richard");
var ranisha = document.getElementById("rAnisha");
var rali = document.getElementById("rAli");
var rshanai = document.getElementById("rShanai");
var rrichard = document.getElementById("rRichard");
ranisha.addEventListener("click", function () {
  anisha.style.display = "flex";
  ali.style.display = "none";
  shanai.style.display = "none";
  richard.style.display = "none";
});

rali.addEventListener("click", function () {
  ali.style.display = "flex";
  anisha.style.display = "none";
  shanai.style.display = "none";
  richard.style.display = "none";
});
rshanai.addEventListener("click", function () {
  shanai.style.display = "flex";
  ali.style.display = "none";
  anisha.style.display = "none";
  richard.style.display = "none";
});
rrichard.addEventListener("click", function () {
  richard.style.display = "flex";
  ali.style.display = "none";
  shanai.style.display = "none";
  anisha.style.display = "none";
});

function checkWindowWidth() {
  var windowWidth = window.innerWidth;
  var fullWidth = window.screen.width;
  if (windowWidth >= 768 && windowWidth <= 850) {
    refreshPage();
  }
}

function refreshPage() {
  window.location.reload();
}

window.addEventListener("resize", checkWindowWidth);
window.addEventListener("load", checkWindowWidth);

window.addEventListener("resize", function () {
  if (window.innerWidth == window.screen.width) {
    // Run refresh code here
    window.location.reload();
    window.removeEventListener("resize", this); // Remove the event listener to prevent it from being triggered again
  }
});
