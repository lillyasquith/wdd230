//get the stored value in localStorage
const lastVisit = localStorage.getItem("lastvisit");
// console.log(lastVisit);

const currentDate = new Date();
const previousVisit = new Date(lastVisit);
const timeDiff = Math.abs(currentDate.getTime() - previousVisit.getTime());
// console.log(timeDiff);
const daysSinceVisit = Math.round(timeDiff / (60 * 60 * 24 * 1000));
console.log(daysSinceVisit);

document.querySelector("#dayspass").innerHTML = daysSinceVisit;

localStorage.setItem("lastvisit", currentDate);
