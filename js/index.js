"use strict";

const navbar = document.querySelector(".navbar");
const img1 = document.getElementById("src");
const idh1 = document.getElementById("idh1");
const idh2 = document.getElementById("idh2");
const idh3 = document.getElementById("idh3");
const idh4 = document.getElementById("h4");
const a = document.getElementById("a1");
const a1 = document.getElementById("a2");
const a2 = document.getElementById("a3");
const a3 = document.getElementById("a4");

// Navbar CSS
navbar.style.height = "70px";
navbar.style.marginLeft = "23px";
navbar.style.marginRight = "20px";
navbar.style.width = "97.5%";
a.style.color = "black";
a1.style.color = "black";
a2.style.color = "black";
a3.style.color = "black";

// Image CSS
img1.style.height = "75%";
img1.style.width = "90%";
img1.style.marginLeft = "90px";

// h1 CSS
idh1.style.color = "black";
idh1.style.fontSize = "100px";

idh2.style.marginLeft = "200px";
idh2.style.color = "white";
idh2.style.backgroundColor = " rgba(0, 0, 0, 0.5";
idh2.style.display = "inline-block";
idh2.style.padding = "10px";
idh2.style.fontSize = "100px";

idh3.style.marginLeft = "400px";
idh3.style.fontSize = "100px";

// h4 CSS
idh4.style.marginTop = "200px";

// img Animation
img1.addEventListener("mouseover", function zoomin() {
  var currWidth = img1.clientWidth;
  img1.style.width = currWidth + 100 + "px";
  img1.style.transitionDuration = "2s";
});

img1.addEventListener("mouseout", function zoomout() {
  img1.style.height = "75%";
  img1.style.width = "90%";
  img1.style.marginLeft = "90px";
});

// Active animation
a.addEventListener("mouseover", function () {
  a.style.color = "white";
});

a.addEventListener("mouseout", function () {
  a.style.color = "black";
});
