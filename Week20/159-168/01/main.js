let myBirth = new Date("1997-06-11");
let dateNow = new Date();
let diff = dateNow - myBirth;

console.log(parseInt(diff / 1000));
console.log(parseInt(diff / 60));
console.log(parseInt(diff / 1000 / 60 / 60));
console.log(parseInt(diff / 1000 / 60 / 60 / 24));
console.log(parseInt(diff / 1000 / 60 / 60 / 24 / 12));
console.log(parseInt(diff / 1000 / 60 / 60 / 24 / 365));

// Needed Output
// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"