function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let i = 0, s = ""; n = "";
    while (zName[i] != " ") {
      s+= zName[i];
      i++;
    }
    n+= zName[i + 1];
    return `Hello ${s} ${n.toUpperCase()}.,`;
  }
  function ageWithMessage(zAge) {
    return `Your Age is ${parseInt(zAge)}`
  }
  function countryTwoLetters(zCountry) {
    return zCountry[0] === "E" ? "You Live In EG" : "You Live In SY";
  }
  function fullDetails() {
    return `${namePattern(zName)} ${ageWithMessage(zAge)} ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY