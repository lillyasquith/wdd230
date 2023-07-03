const spUrl = "https://lillyasquith.github.io/wdd230/chamber/data.json";
async function getDirectoryData() {
  const response = await fetch(spUrl);
  const data = await response.json();
  //   console.table(jsondata.companies);
  displayDirectory(data.companies);
}
getDirectoryData();

const displayDirectory = (companies) => {
  const units = document.querySelector("#spotlight"); // select the output container element

  let filteredComp = companies.filter(
    (business) =>
      business.memberlevel === "Gold Membership" ||
      business.memberlevel === "Silver Membership"
  );

  filteredComp = filteredComp.slice(0, 3);

  filteredComp.forEach((business) => {
    // Create elements to add to the div.units element
    let unit = document.createElement("section");
    let line = document.createElement("hr");
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
    level.setAttribute("class", "sp-text");

    site.textContent = business.website;
    site.setAttribute("href", business.website);
    site.setAttribute("class", "sp-contact");

    logo.setAttribute("src", business.logo);
    logo.setAttribute("alt", business.name);
    logo.setAttribute("class", "sp-img");
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "200");
    logo.setAttribute("height", "50");

    // Append the section(unit) with the created elements//the order from 1st to last of these Element in html start with name and end with site od each unit.
    unit.appendChild(name);
    unit.appendChild(logo);
    unit.appendChild(location);
    unit.appendChild(contact);
    unit.appendChild(site);
    unit.appendChild(line);
    unit.appendChild(level);

    units.appendChild(unit);
  }); // end of forEach loop
}; // end of function expression
