let nums = [2, 12, 11, 5, 10, 1, 99];

// 500
let m = nums.reduce(function (acc, ele) {
  return ele % 2 == 0 ? acc * ele: acc + ele;
}, 1)

console.log(m);