//A hidden field that contains the current date and time that the form was loaded by the user

var d = new Date();
// Set the value of the "date" field
document.getElementById("datenow").value = d.toDateString();

// Set the value of the "time" field
var hours = d.getHours();
var mins = d.getMinutes();
var seconds = d.getSeconds();
document.getElementById("timenow").value = hours + ":" + mins + ":" + seconds;
