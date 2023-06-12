//A hidden field that contains the current date and time that the form was loaded by the user
var d = new Date();
// Set the value of the "date" field
document.getElementById("datenow").value = d.toDateString();

// Set the value of the "time" field
var hours = d.getHours();
var mins = d.getMinutes();
var seconds = d.getSeconds();
document.getElementById("timenow").value = hours + ":" + mins + ":" + seconds;

//A hidden Membership Level Benefits
const npB = document.querySelector(".hidden-np");
const bronzeB = document.querySelector(".hidden-bronze");
const silverB = document.querySelector(".hidden-silver");
const goldB = document.querySelector(".hidden-gold");

const radioBt = document.querySelectorAll("[name='option']");
const membershipLevel = document.querySelector(".level");
const mediaQuery = window.matchMedia("(min-width: 768px)");

function displayMembershipBenefits(e) {
  if (mediaQuery.matches) {
    let clicked = e.target.value;
    if (clicked === "nonprofit") {
      npB.classList.remove("is-hidden");
    } else {
      npB.classList.add("is-hidden");
    }
    if (clicked === "bronze") {
      bronzeB.classList.remove("is-hidden");
    } else {
      bronzeB.classList.add("is-hidden");
    }
    if (clicked === "silver") {
      silverB.classList.remove("is-hidden");
    } else {
      silverB.classList.add("is-hidden");
    }
    if (clicked === "gold") {
      goldB.classList.remove("is-hidden");
    } else {
      goldB.classList.add("is-hidden");
    }
  }
}

membershipLevel.addEventListener("click", displayMembershipBenefits);
