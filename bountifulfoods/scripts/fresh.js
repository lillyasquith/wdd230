const urlFruit = "https://brotherblazzard.github.io/canvas-content/fruit.json";

let data;

// Generate todays date and time
let dateNow = new Date();
let lastModified = dateNow[document.lastModified];

async function getFruitData() {
  const response = await fetch(urlFruit);
  data = await response.json();
  displayFruitNames(data);
}

getFruitData();

const displayFruitNames = (fruits) => {
  const choice1 = document.querySelector("#option-1");
  const choice2 = document.querySelector("#option-2");
  const choice3 = document.querySelector("#option-3");
  fruits.forEach((fruit) => {
    // Create element option for the three dropdown lists
    let optionSelect1 = document.createElement("option");
    let optionSelect2 = document.createElement("option");
    let optionSelect3 = document.createElement("option");

    // Extract fruit's name from json file
    let fruitName = `${fruit.name}`;

    // Add attribute value to the option elements
    optionSelect1.setAttribute("value", fruit.name);
    optionSelect2.setAttribute("value", fruit.name);
    optionSelect3.setAttribute("value", fruit.name);

    // Add text content to option elements
    optionSelect1.textContent = `${fruitName}`;
    optionSelect2.textContent = `${fruitName}`;
    optionSelect3.textContent = `${fruitName}`;

    // Append option element to each select dropdown list
    choice1.appendChild(optionSelect1);
    choice2.appendChild(optionSelect2);
    choice3.appendChild(optionSelect3);
  });
};

const btnEl = document.querySelector(".submitBtn");

// Add event listener to populate the Your Details content area.
btnEl.addEventListener("click", (event) => {
  event.preventDefault();

  // Remove class is-hidden to show the details card with nutritional information
  const detailsSection = document.querySelector(".output-card");
  detailsSection.classList.remove("is-hidden");

  // Remove class grid--1-cols and replace it with grid--2-cols to show both the form input and card with nutritional information on the same row.
  const inputForm = document.querySelector(".drinks-form");

  // Remove leged when the order form is submitted
  const legend = document.querySelector("top");
  legend.classList.add("is-hidden");

  const nameEl = document.querySelector('input[name="fname"]');
  const phoneEl = document.querySelector('input[name="phone"]');
  const emailEl = document.querySelector('input[name="email"]');
  const messageEl = document.querySelector('textarea[name="user-message"]');
  const selectEl1 = document.querySelector('select[name="fruit-1"]');
  const selectEl2 = document.querySelector('select[name="fruit-2"]');
  const selectEl3 = document.querySelector('select[name="fruit-3"]');
  const quantityEl = document.querySelector('input[name="quantity"]');

  // Extract values from input, textarea, select elements and date & time;
  const nameValue = nameEl.value;
  const phoneValue = phoneEl.value;
  const emailValue = emailEl.value;
  const messageValue = messageEl.value;
  const select1Value = selectEl1.value;
  const select2Value = selectEl2.value;
  const select3Value = selectEl3.value;
  const quantityValue = Number(quantityEl.value);

  // Select the elements where you want to inject data
  const fName = document.querySelector(".yourName");
  const tel = document.querySelector(".yourPhone");
  const email = document.querySelector(".yourEmail");
  const message = document.querySelector(".instructions");
  const choice1 = document.querySelector(".choice-1");
  const choice2 = document.querySelector(".choice-2");
  const choice3 = document.querySelector(".choice-3");
  const quantity = document.querySelector(".quantity");
  const dateTime = document.querySelector(".date-time-order");

  // Get the stored VALUE for the numDrinks-ls KEY in localStorage if it exists.
  // If the numDrinks - ls KEY is missing, then assign 0 to the numDrinks variable.
  let numDrinks = Number(window.localStorage.getItem("numDrinks-ls")) || 0;
  // increment the number of drinks.
  numDrinks += quantityValue;
  // store the new number of drinks total into localStorage, key=numDrinks-ls
  localStorage.setItem("numDrinks-ls", `${numDrinks}`);

  // Inject data
  fName.textContent = nameValue;
  tel.textContent = phoneValue;
  email.textContent = emailValue;
  message.textContent = messageValue;
  choice1.textContent = select1Value;
  choice2.textContent = select2Value;
  choice3.textContent = select3Value;
  quantity.textContent = quantityValue;
  dateTime.textContent = new Intl.DateTimeFormat("en-GB", options).format(
    lastModified
  );
  getNutritionData(data);

  // Clear input fields after submission
  nameEl.value = "";
  phoneEl.value = "";
  emailEl.value = "";
  messageEl.value = "";
  selectEl1.value = "";
  selectEl2.value = "";
  selectEl3.value = "";
  quantityEl.value = "";
});

const getNutritionData = (fruits) => {
  const carbs = document.querySelector(".carbs");
  const proteins = document.querySelector(".proteins");
  const fats = document.querySelector(".fats");
  const calories = document.querySelector(".calories");
  const sugars = document.querySelector(".sugars");

  const choice1 = document.querySelector('select[name="fruit-1"]');
  const choice2 = document.querySelector('select[name="fruit-2"]');
  const choice3 = document.querySelector('select[name="fruit-3"]');

  let totalCarbs = 0;
  let totalProteins = 0;
  let totalFats = 0;
  let totalCalories = 0;
  let totalSugars = 0;

  fruits.forEach((fruit) => {
    if (
      choice1.value === `${fruit.name}` ||
      choice2.value === `${fruit.name}` ||
      choice3.value === `${fruit.name}`
    ) {
      // Extract fruit carbohydrates value
      let carbs = Number(`${fruit.nutritions.carbohydrates}`);
      // Extract fruit proteins value
      let proteins = Number(`${fruit.nutritions.protein}`);
      // Extract fruit fats value
      let fats = Number(`${fruit.nutritions.fat}`);
      // Extract fruit calories value
      let calories = Number(`${fruit.nutritions.calories}`);
      // Extract fruit sugars value
      let sugars = Number(`${fruit.nutritions.sugar}`);
      // Extract fruit's name from json file
      let fruitName = `${fruit.name}`;
      totalCarbs += carbs;
      totalProteins += proteins;
      totalFats += fats;
      totalCalories += calories;
      totalSugars += sugars;
    }
  });
  carbs.textContent = totalCarbs.toFixed(0);
  proteins.textContent = totalProteins.toFixed(0);
  fats.textContent = totalFats.toFixed(1);
  calories.textContent = totalCalories.toFixed(0);
  sugars.textContent = totalSugars.toFixed(0);
};