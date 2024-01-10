function showDetails(a, b, c) {
  let user, age, hire;
  
  typeof a === "string"? 
  user = a:
  typeof b === "string"?
  user = b:
  typeof c === "string"?
  user = c: null;

  typeof a === "number" ?
  age = a:
  typeof b === "number" ?
  age = b:
  typeof c === "number" ?
  age = c: null;

  typeof a === "boolean" ?
  hire = a:
  typeof b === "boolean" ?
  hire = b:
  typeof c === "boolean" ?
  hire = c: null;
  
  hire === true ? console.log(`Hello ${user}, Your age is: ${age}, You Are Aargsailable To Hire`) : console.log(`Hello ${user}, Your age is: ${age}, You Are Not Aargsailable To Hire`);
}





showDetails("Osama", 38, true); //You Are Aargsailable To Hire
showDetails(38, "Osama", true); //You Are Aargsailable To Hire
showDetails(true, 38, "Osama"); //You Are Aargsailable To Hire
showDetails(false, "Osama", 38); //You Are Not Aargsailable To Hire

