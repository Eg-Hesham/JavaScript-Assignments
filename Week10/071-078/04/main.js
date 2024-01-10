let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

let m = numsAndStrings.map(function (ele) {
  return typeof ele === "string" ? "" : ele; 
}).filter(function (ele) {
  return -ele;
});

console.log(m);