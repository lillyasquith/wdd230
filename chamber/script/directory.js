const url = "https://lillyasquith.github.io/wdd230/chamber/data.json";
async function getDirectoryData() {
  const response = await fetch(url);
  const data = await response.json();
  //   console.table(data.companies);
  displayDirectory(data.companies);
}
const displayDirectory = (companies) => {
  const cards = document.querySelector("div.cards"); // select the output container element

  companies.forEach((business) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    let logo = document.createElement("img");
    let name = document.createElement("h1");
    let location = document.createElement("p");
    let contact = document.createElement("p");
    let site = document.createElement("a");
    let level = document.createElement("p");

    name.textContent = business.name;
    location.textContent = business.address;
    contact.textContent = business.phone;
    level.textContent = business.memberlevel;

    site.textContent = business.website;
    site.setAttribute("href", business.website);

    logo.setAttribute("src", business.logo);
    logo.setAttribute("alt", business.name);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "200");
    logo.setAttribute("height", "100");

    // Append the section(card) with the created elements//the order from 1st to last of these Element in html start with name and end with site od each card.
    card.appendChild(name);
    card.appendChild(logo);
    card.appendChild(location);
    card.appendChild(contact);
    card.appendChild(site);
    card.appendChild(level);

    cards.appendChild(card);
  }); // end of forEach loop
}; // end of function expression

getDirectoryData();

//Displayed as cards or as a list
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList);
// example using defined function
function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}
