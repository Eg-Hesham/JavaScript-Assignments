function sayHello(theName, theGender) {
  if (theGender === undefined) {
    console.log(`Hello ${theName}`);
  } else if (theGender === "Male") {
    console.log(`Hell Mr ${theName}`);
  } else {
    console.log(`Hell Miss ${theName}`)
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"