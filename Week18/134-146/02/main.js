let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let reg = /os\d+o/ig;

console.log(specialNames.match(reg));
// Output
// ['Os10O', 'OsO', 'Os100O']