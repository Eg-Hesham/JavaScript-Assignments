let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let infos = new Map(Object.entries(myInfo));
console.log(infos);
console.log(infos.size);
console.log(infos.has("role"));



// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true