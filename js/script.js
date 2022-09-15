let currentDate = new Date().getHours();
console.log(currentDate);

let container = document.querySelector(".container");

if (currentDate >= 12 && currentDate < 17) {
  container.style.backgroundColor = "rgba(196, 135, 56, 0.4)";
} else if (currentDate >= 17) {
  container.style.backgroundColor = "rgba(196, 135, 56, 0.8)";
} else if (currentDate < 12 && currentDate > 1) {
  container.style.backgroundColor = "rgba(196, 135, 56, 0.2)";
}
