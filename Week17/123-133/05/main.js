let theName = "Elzero";

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
console.log([...theName]);
console.log(Array.from(theName));
console.log([...new Set(theName)]);
console.log(theName.split(""));
console.log(Object.assign([], theName));