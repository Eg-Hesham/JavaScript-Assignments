let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let friends = new Set(myFriends.sort());

console.log(friends);

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']