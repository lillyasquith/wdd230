const spUrl = "https://lillyasquith.github.io/wdd230/chamber/data.json";
async function getDirectoryData() {
  const response = await fetch(spUrl);
  const data = await response.json();
  //   console.table(jsondata.companies);
  displayDirectory(data.companies);
}
getDirectoryData();

//Randomly select which companies are displayed from those members, src:https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

const displayDirectory = (companies) => {
  const units = document.querySelector("#spotlight"); // select the output container element

  let filteredComp = companies.filter(
    (business) =>
      business.memberlevel === "Gold Membership" ||
      business.memberlevel === "Silver Membership"
  );

  filteredComp = shuffleArray(filteredComp);
  filteredComp = filteredComp.slice(0, 3);

  filteredComp.forEach((business) => {
    // Create elements to add to the div.units element
    let unit = document.createElement("section");
    let logo = document.createElement("img");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let contact = document.createElement("p");
    let site = document.createElement("a");
    let level = document.createElement("p");

    unit.setAttribute("class", "sp");

    name.textContent = business.name;
    name.setAttribute("class", "title1");

    location.textContent = business.address;
    location.setAttribute("class", "sp-text");

    contact.textContent = business.phone;
    contact.setAttribute("class", "sp-contact");

    level.textContent = business.memberlevel;
    level.setAttribute("class", "sp-level");

    site.textContent = business.website;
    site.setAttribute("href", business.website);
    site.setAttribute("class", "sp-site");

    logo.setAttribute("src", business.logo);
    logo.setAttribute("alt", business.name);
    logo.setAttribute("class", "sp-img");
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "50%");
    logo.setAttribute("height", "100");

    // Append the section(unit) with the created elements//the order from 1st to last of these Element in html start with name and end with site od each unit.
    unit.appendChild(name);
    unit.appendChild(logo);
    unit.appendChild(location);
    unit.appendChild(contact);
    unit.appendChild(site);
    unit.appendChild(level);

    units.appendChild(unit);
  }); // end of forEach loop
}; // end of function expression
