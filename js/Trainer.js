"use strict";
const trainerCard = document.querySelector("#trainer");
const packageCard = document.querySelector("#Package");
// const navbar = document.querySelector(".navbar");
const heading1 = document.querySelector("#h11");
const headingH2 = document.querySelector("#h2");

// navbar CSS
navbar.style.height = "70px";
navbar.style.marginLeft = "23px";
navbar.style.marginRight = "20px";
navbar.style.width = "97.5%";
a.style.color = "black";
a1.style.color = "black";
a2.style.color = "black";
a3.style.color = "black";

// Trainer Card CSS
trainerCard.style.marginTop = "50px";
trainerCard.style.marginBottom = "50px";
trainerCard.style.marginLeft = "85px";

// Packages Card CSS
// Card CSS
packageCard.style.marginTop = "50px";
packageCard.style.marginBottom = "50px";
packageCard.style.marginLeft = "85px";

// Headings CSS
heading1.style.marginLeft = "510px";
heading1.style.marginTop = "100px";
headingH2.style.marginLeft = "510px";
headingH2.style.marginTop = "100px";
headingH2.style.marginBottom = "50px";

// Storing Trainer data
const trainerData = [
  {
    img: "images/alex.png",
    name: "Alex",
    position: "Trainer",
  },
  {
    img: "images/bob.png",
    name: "Bob",
    position: "Trainer",
  },
  {
    img: "images/john.png",
    name: "John",
    position: "Trainer",
  },
];

// Appending Data
const appendData = (img, name, position) => `
<div class="card bg-info" style="width: 18rem;" id="card">
<img src="${img}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title" id="name">${name}</h5>
  <p class="card-text">${position}</p>
  <a class="btn btn-primary"><i class="fa fa-facebook"></i></a>
  <a class="btn btn-success"><i class="fa fa-whatsapp"></i></a>
  <a class="btn btn-danger"><i class="fa fa-instagram"></i></a>
</div>
</div>
`;

trainerData.forEach((e) => {
  const newChild = document.createElement("div");
  newChild.innerHTML = appendData(e.img, e.name, e.position);
  trainerCard.appendChild(newChild);
});

//   Storing Packages Data

const PackageData = [
  {
    img: "images/daily.png",
    type: "Daily Package",
    description: "You need to pay daily.",
    item1: "✅ All instruction access",
    item2: "✅ Shower Facilities",
    item3: "❌ Nutration Plan",
    item4: "❌ Personal Locker",
    item5: "❌ Personal Trainer",
    price: "₹20/day",
    text: "will be charged on daily basis",
  },
  {
    img: "images/monthly.png",
    type: "Monthly Package",
    description: "You need to pay Monthly.",
    item1: "✅ All instruction access",
    item2: "✅ Shower Facilities",
    item3: "✅ Nutration Plan",
    item4: "✅ Personal Locker",
    item5: "❌ Personal Trainer",
    price: "₹500/month",
    text: "will be charged on monthly basis",
  },
  {
    img: "images/yearly.png",
    type: "Daily Package",
    description: "You need to pay daily.",
    item1: "✅ All instruction access",
    item2: "✅ Shower Facilities",
    item3: "✅ Nutration Plan",
    item4: "✅ Personal Locker",
    item5: "✅ Personal Trainer",
    price: "₹6000/year",
    text: "will be charged on yearly basis",
  },
];

// Appending Package Data
const appendPackage = (
  img,
  type,
  description,
  item1,
  item2,
  item3,
  item4,
  item5,
  price,
  text
) => `
<div class="card bg-danger" style="width: 18rem;">
<img src="${img}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title"><b>${type}</b></h5>
  <p class="card-text">${description}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${item1}</li>
  <li class="list-group-item">${item2}</li>
  <li class="list-group-item">${item3}</li>
  <li class="list-group-item">${item4}</li>
  <li class="list-group-item">${item5}</li>
  <li class="list-group-item"><b>${price}</b></li>
  <li class="list-group-item">${text}</li>
</ul>
</div>
`;

PackageData.forEach((e) => {
  const newChild = document.createElement("div");
  newChild.innerHTML = appendPackage(
    e.img,
    e.type,
    e.description,
    e.item1,
    e.item2,
    e.item3,
    e.item4,
    e.item5,
    e.price,
    e.text
  );
  packageCard.appendChild(newChild);
});

// Active animation
a2.addEventListener("mouseover", function () {
  a2.style.color = "white";
});

a2.addEventListener("mouseout", function () {
  a2.style.color = "black";
});

// Adding Animation to Trainer Card
trainerCard.addEventListener("click", function () {
  trainerCard.style.color = "red";
});
trainerCard.addEventListener("mouseout", function () {
  trainerCard.style.color = "black";
});
