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
    let picture = document.createElement("img");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let contact = document.createElement("p");
    let site = document.createElement("a");

    name.textContent = business.name;
    location.textContent = business.address;
    contact.textContent = business.phone;
    site.textContent = business.website;
    site.setAttribute("href", business.website);

    picture.setAttribute("src", business.logo);
    picture.setAttribute("loading", "lazy");
    picture.setAttribute("width", "200");
    picture.setAttribute("height", "100");
    picture.style.objectFit = "cover";
    // Append the section(card) with the created elements//the order from 1st to last of these Element in html start with name and end with site od each card.
    card.appendChild(name);
    card.appendChild(picture);
    card.appendChild(location);
    card.appendChild(contact);
    card.appendChild(site);

    cards.appendChild(card);
  }); // end of forEach loop
}; // end of function expression

getDirectoryData();
