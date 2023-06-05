// FOOTER
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
const currentYear = new Date();
document.getElementById("currentdate").textContent =
  new Date().toLocaleTimeString("en-US", options);
document.querySelector("#year").textContent = currentYear.getFullYear();

//MAIN
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", () => {
  const myScripture = input.value;
  //if the value is empty, we cannot add to the list.
  if (myScripture == "") {
    return;
  }
  //change the input value to nothing or the empty string to clean up the interface for the user
  input.value = "";

  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");

  listItem.appendChild(listText);
  listText.textContent = myScripture;
  listItem.appendChild(listBtn);
  listBtn.textContent = "❌";
  list.appendChild(listItem);

  listBtn.addEventListener("click", () => {
    list.removeChild(listItem);

    input.focus();
  });
});
