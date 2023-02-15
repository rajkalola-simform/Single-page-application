"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const aboutusHeading = document.querySelector("#aboutusheading");
  const gymContent = document.querySelector("#aboutus-content");
  const chart = document.querySelector("#doughnutChart");
  const image = document.querySelector("#slider img");

  // Image CSS
  image.style.marginTop = "50px";

  // Heading CSS
  aboutusHeading.style.marginLeft = "550px";
  aboutusHeading.style.fontStyle = "bold";

  // Content CSS
  gymContent.style.marginTop = "50px";

  // Chart CSS
  chart.style.display = "block";
  chart.style.margin = "0 auto";
  chart.style.marginTop = "50px";

  // Active animation
  a3.addEventListener("mouseover", function () {
    a3.style.color = "white";
  });

  a3.addEventListener("mouseout", function () {
    a3.style.color = "black";
  });

  // //doughnut
  var can = document.getElementById("doughnutChart").getContext("2d");
  var myLineChart = new Chart(can, {
    type: "doughnut",
    data: {
      labels: ["Total Member", "Male", "Female", "Total Staff", "Trainers"],
      datasets: [
        {
          data: [250, 150, 100, 60, 45],
          backgroundColor: ["red", "blue", "orange", "grey", "yellow"],
          hoverBackgroundColor: ["aqua", "aqua", "aqua", "aqua", "aqua"],
        },
      ],
    },
  });

  var images = ["images/img1.jpeg", "images/img2.jpeg", "images/img3.jpeg"];
  var i = 0;
  function slides() {
    document.getElementById("slideimage").src = images[i];
    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }
  }
  setInterval(slides, 2500);
});
