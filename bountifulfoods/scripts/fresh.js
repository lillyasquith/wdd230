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

const copyInputToOutput = () => {
  const nameInput = document.querySelector("#cxnamef"); 
  const nameOutput = document.querySelector("#name-output");
  nameInput.addEventListener('change', () => {
    nameOutput.innerHtml = nameInput.getAttribute("value");
  })
}

copyInputToOutput();

const submitForm = (e) => {
  e.preventDefault();
  debugger;
}
