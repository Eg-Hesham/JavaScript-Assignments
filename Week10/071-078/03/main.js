let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero

let m = myArray.reduce(function (acc, ele) {
  return acc + ele;
}).split("").filter(function (ele) {
  return ele === "," ? "" : ele; 
}).join("");

console.log(m);