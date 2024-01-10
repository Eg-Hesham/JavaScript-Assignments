let myString = "EElllzzzzzzzeroo";

// Elzero
let m = myString.split("").filter(function (ele, index, array) {
  return ele !== array[index - 1];
})

console.log(m);