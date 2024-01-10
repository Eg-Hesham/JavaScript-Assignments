let start = 0;
let swappedName = "elZerO";
let str = "";
for (start; start < swappedName.length; start++) {
 if (swappedName[start] == swappedName[start].toLowerCase()) 
  str += swappedName[start].toUpperCase();
else 
  str += swappedName[start].toLowerCase();
}
console.log(str);

// Output
// "ELzERo"