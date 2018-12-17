const b1 = document.getElementById("btn1");
const b2 = document.getElementById("btn2");
const b3 = document.getElementById("btn3");
const b4 = document.getElementById("btn4");

b1.onclick = clickedB1 =>
  setTimeout(function() {
    location = location;
    console.log("5 segundos");
  }, 5000);
b2.onclick = clickedB2 =>
  setTimeout(function() {
    location = location;
    console.log("10 segundos");
  }, 10000);
b3.onclick = clickedB3 =>
  setTimeout(function() {
    location = location;
    console.log("15 segundos");
  }, 15000);
b4.onclick = clickedB4 =>
  setTimeout(function() {
    location = location;
    console.log("20 segundos");
  }, 20000);
