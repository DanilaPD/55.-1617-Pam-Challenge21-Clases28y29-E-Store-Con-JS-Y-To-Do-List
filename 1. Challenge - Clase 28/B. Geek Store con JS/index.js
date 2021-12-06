//* Capturing the elements I need/want to use in JS:
const menuDropdown = document.getElementById("menuDropdown");

const heart = document.getElementsByClassName("heart");

const total = document.getElementById("total");

const buyBtn = document.getElementsByClassName("buyBtn");
console.log(buyBtn);

//* Create a "constant" to create a shorter and efficient code:
const HasDropAClass = menuDropdown.classList;

//* Longer form: function + capture of the element in the same place
// Do not use this form:
const changeTheColour = () => {
  document.getElementById("menu").style.color = "orange";
};

changeTheColour();

//* NavBar: Showing it Vs. Hiding it with JS
const dropdown = () => {
  if (HasDropAClass.contains("hide")) {
    HasDropAClass.remove("hide");
  } else {
    HasDropAClass.add("hide");
  }
};

//* For Loop for the hearts + AddEventListener + Toggle:
for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    heart[i].classList.toggle("clicked");
  });
}

//* Adding the total value of your purchase:
// IIFE Function + For Loop Within:
(function () {
  total.innerHTML = 0;
  let acumulador = +total.innerHTML;
  console.log(typeof acumulador);

  for (let j = 0; j < buyBtn.length; j++) {
    buyBtn[j].addEventListener("click", function () {
      let newProd = +buyBtn[j].innerHTML;
      acumulador = acumulador + newProd;
      console.log(acumulador);
      total.innerHTML = acumulador;
    });
  }
})();
