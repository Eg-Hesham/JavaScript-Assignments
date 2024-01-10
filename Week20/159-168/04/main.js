let dateOne = new Date("1997/06/11");
console.log(dateOne);
let dateTwo = new Date();
dateTwo.setFullYear(1997,6,11);
dateTwo.setHours(0);
dateTwo.setHours(0);
dateTwo.setMonth(5);
dateTwo.setMinutes(0);
dateTwo.setSeconds(0);
console.log(dateTwo);
let dateThree = new Date("Jun 11, 97");
console.log(dateThree);
let dateFour = new Date("1997-06-11T00:00:00Z");
console.log(dateFour);

// Needed Output

// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"