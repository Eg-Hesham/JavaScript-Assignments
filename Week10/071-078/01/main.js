let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero

let m = mix.map(function (ele) {
  return isNaN(parseInt(ele)) ? ele : "";
}).reduce(function (acc, ele) {
  return `${acc}${ele}`;
})

console.log(m);