// alert
alert("Hello World");

// confirm
var answer = confirm("Are you sure?");
if (answer) {
  alert("You said yes");
} else {
  alert("You said no");

  // prompt
  var userName = prompt("What is your name?");
  alert("Hello " + userName);
}
