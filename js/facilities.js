"use strict";
const cards = document.querySelector("#facilities");
const img = document.getElementsByTagName("div");
const heading = document.querySelector("#h1");

// Heading CSS
heading.style.marginLeft = "515px";
heading.style.marginTop = "10px";

// Navbar CSS
navbar.style.height = "70px";
navbar.style.marginLeft = "23px";
navbar.style.marginRight = "20px";
navbar.style.width = "97.5%";
a.style.color = "black";
a1.style.color = "black";
a2.style.color = "black";
a3.style.color = "black";

// Card Data
const cardData = [
  {
    imgUrl: "images/0_trainer.jpg",
    cardHeader: "1-1 Trainer",
    cardContent:
      "A personal trainer is an individual who creates and delivers safe and effective exercise programs for apparently healthy individuals and groups, or those with medical clearance to exercise.",
  },
  {
    imgUrl: "images/nutration.jpeg",
    cardHeader: "Nutration Plan",
    cardContent:
      "A balanced diet is a diet that contains differing kinds of foods in certain quantities and proportions so that the requirement for calories, proteins. which bring nutrients and oxygen to your muscles.",
  },
  {
    imgUrl: "images/instruction.jpg",
    cardHeader: "Exlcusive Instruction",
    cardContent:
      "Fitness training balances five elements of good health. Make sure your routine includes aerobic fitness, strength training, core exercises, balance training, and flexibility and stretching.",
  },
  {
    imgUrl: "images/shower.jpg",
    cardHeader: "Shower Facility",
    cardContent:
      "Most men who exercise at the gym look forward to a shower after a hard workout. Leaving the gym sweaty is never very appealing.",
  },
  {
    imgUrl: "images/personal locker.jpg",
    cardHeader: "Personal Locker",
    cardContent:
      "A Personal Locker to store your wallets, car keys, purses, clothing, shoes, and other valuable personal items while they're exercising, showering, or enjoying the sauna.",
  },
  {
    imgUrl: "images/fitness comunity.jpg",
    cardHeader: "Fitness Community",
    cardContent:
      "In a strong community culture the owner and the instructors having an invested interest in the success of their members. And this means regular communication",
  },
];

const appendStr = (imgUrl, cardHeader, cardContent) => `
<div class="col" style='padding:20px' id="card">
<div class="card">
  <img src="${imgUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${cardHeader}</h5>
    <p class="card-text">${cardContent}</p>
  </div>
</div>
</div>
`;

cardData.forEach((el) => {
  const newChild = document.createElement("div");
  newChild.innerHTML = appendStr(el.imgUrl, el.cardHeader, el.cardContent);
  cards.appendChild(newChild);
});

// // Active animation
a1.addEventListener("mouseover", function () {
  a1.style.color = "white";
});

a1.addEventListener("mouseout", function () {
  a1.style.color = "black";
});

// Adding Animation in cards
cards.addEventListener("mouseover", function () {
  cards.style.color = "red";
});
cards.addEventListener("mouseout", function () {
  cards.style.color = "black";
});
