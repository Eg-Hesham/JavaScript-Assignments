function specialMix(...data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    if (Number.isNaN(parseInt(data[i]))) {
      data[i] = 0;
    }
    sum += parseInt(data[i]);
  }
  
  return sum != 0 ?  sum : "All Are Strings";
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Are Strings