let loop = prompt("Print Number From – To “Example: 5-20”");
let values = loop.split("-");
let temp = values[0];

if (values[0] > values[1]) {
  values[0] = values[1];
  values[1] = temp;
}

for (let i = values[0]; i <= values[1]; i++) {
  console.log(i);
}