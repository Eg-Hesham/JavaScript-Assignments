function ageInTime(theAge) {
  theAge < 100 && theAge > 0 ? console.log(theAge * 12 +" Months\n") : console.log(`Age Out Of Range`);
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months