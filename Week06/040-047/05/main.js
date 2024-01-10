let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("Found");
}

if (needle == haystack[+true]) {
  console.log("Found");
}

if (needle == haystack.slice(+true, +true + true)) {
  console.log("Found");
}