/*
  Destructuring
  - Challenge
*/

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

friends(chosen);



function friends(chosen) {
  if (chosen == 1) {
    var [{title: t, age: a, available: v, skills: [ ,two]}] = myFriends;
    if (v == true) {
      console.log(t);
      console.log(a);
      console.log("Available");
      console.log(two);
    }
  }
  if (chosen == 2) {
    var [ , {title: t, age: a, available: v, skills: [ ,two]}] = myFriends;
    if (v == false) {
      console.log(t);
      console.log(a);
      console.log("Not Available");
      console.log(two);
    }
  }
  if (chosen == 3) {
    var [ , , {title: t, age: a, available: v, skills: [ ,two]}] = myFriends;
    if (v == true) {
      console.log(t);
      console.log(a);
      console.log("Available");
      console.log(two);
    }
  }
}