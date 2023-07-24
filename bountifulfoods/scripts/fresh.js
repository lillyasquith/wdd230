const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";
async function getFruitData() {
  const response = await fetch(url);
  const data = await response.json();
  displayFruits(data);
}

getFruitData();

const displayFruits = (fruits) => {
  const cxChoice1 = document.querySelector("#option-1");
  const cxChoice2 = document.querySelector("#option-2");
  const cxChoice3 = document.querySelector("#option-3");
  fruits.forEach((fruit) => {
    // Create element for the three fruit choice labels
    let optionSelect1 = document.createElement("option");
    let optionSelect2 = document.createElement("option");
    let optionSelect3 = document.createElement("option");
    // Extract fruit's name from json file
    let fruitName = fruit.name;

    optionSelect1.innerHTML = fruitName;
    optionSelect2.innerHTML = fruitName;
    optionSelect3.innerHTML = fruitName;

    optionSelect1.setAttribute("value", fruit.name);
    optionSelect2.setAttribute("value", fruit.name);
    optionSelect3.setAttribute("value", fruit.name);

    cxChoice1.appendChild(optionSelect1);
    cxChoice2.appendChild(optionSelect2);
    cxChoice3.appendChild(optionSelect3);
  });
};

let dateNow = new Date();
let lastModified = dateNow[document.lastModified];

const btn = document.querySelector(".submit-Btn");

const firstName = document.getElementById("f-name");
const out1 = document.getElementById("nameF");

const lastName = document.getElementById("l-name");
const out2 = document.getElementById("nameL");

const phone = document.getElementById("p-num");
const out3 = document.getElementById("phone-number");

const email = document.getElementById("e-mail");
const out4 = document.getElementById("my-email");

const fruit1 = document.getElementById("option-1");
const out5 = document.getElementById("fruit1");

const fruit2 = document.getElementById("option-2");
const out6 = document.getElementById("fruit2");

const fruit3 = document.getElementById("option-3");
const out7 = document.getElementById("fruit3");

const quantity = document.getElementById("quantity");
const out8 = document.getElementById("total-drinks");

const instructions = document.getElementById("message");
const out9 = document.getElementById("text-output");

const date = document.getElementById("date-time");
const out10 = document.getElementById("time-output");

function outputs() {
  out1.innerHTML= firstName.value;
  out2.innerHTML= lastName.value;
  out3.innerHTML= phone.value;
  out4.innerHTML= email.value;
  out5.innerHTML= fruit1.value;
  out6.innerHTML= fruit2.value;
  out7.innerHTML= fruit3.value;
  out8.innerHTML= quantity.value;
  out9.innerHTML= instructions.value;
  out10.innerHTML= new Intl.DateTimeFormat("en-GB", options).format(
    lastModified
  );

  // Clear input fields after submission
  firstName.value = "";
  lastName.value = "";
  phone.value = "" ;
  email.value = "";
  fruit1.value = "";
  fruit2.value = "";
  fruit3.value = "";
  quantity.value = "";
  instructions.value = "";
  date.value = "";
  
  let numDrinks = Number(window.localStorage.getItem("numDrinks-ls")) || 0;
    // increment the number of drinks.
  numDrinks += quantityValue;
    // store the new number of drinks total into localStorage, key=numDrinks-ls
  localStorage.setItem("numDrinks-ls", `${numDrinks}`);

}
btn.addEventListener("click",outputs);
 

