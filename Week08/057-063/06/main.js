function multiply(...arg) {
  let m = 1;
  for (let i = 0; i <= arg.length; i++) {
    if (typeof arg[i] === "number") {
      m *=  Math.trunc(arg[i]);
    }
  }
  console.log(m);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000