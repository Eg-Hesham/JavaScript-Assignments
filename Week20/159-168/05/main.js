let start = performance.now();
for (let i = 1; i <= 99999; i++) {
  document.write(`<div>${i}</div>`);
}
let end = performance.now();
console.log(`Loop Took ${parseInt(end - start)} Milliseconds.`);
// Needed Output

// "Loop Took 1921 Milliseconds."