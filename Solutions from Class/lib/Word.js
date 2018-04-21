// ************************ From the solutions ***********************************

// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

var Letter = require("./Letter");

// The Word constructor is responsible for creating an array of Letter objects and determining if the user guessed every Letter correctly
function Word(word) {
  // word.split - splits word into array of letters
  //     .map - instantiate a new `Letter` for each character and return an array
  //            referred to with the instance variable, `letters`
  this.letters = word.split("").map(function(char) {
    return new Letter(char);
    //
  });
}

// prototypes are optional, but will take up less memory than if we defined
//   each method in the constructor as an instance method

// setting the method on the prototype means all instances of Word share this code
//    but when it is called, `this` refers to that particular instance
Word.prototype.getSolution = function()
{
  return this.letters.map(function(letter)
  { // iterate over each letter
    return letter.getSolution(); // return the solution for each to form an array of solved letters
  }).join(""); // create a string from the array of solved letters
};

// setting `toString()` as a method lets us concatenate it like we would a string!
Word.prototype.toString = function() {
  return this.letters.join(" "); // see Letter.prototype.toString in Letter.js
};

Word.prototype.guessLetter = function(char) {
  // Checks to see if any of the letters in the array match the user's guess and updates `foundLetter`
  var foundLetter = false;
  this.letters.forEach(function(letter) {
    if (letter.guess(char)) {
      foundLetter = true;
    }
  });

  // Print the word guessed so far--because we set the method for toString,
  //  JavaScript will automatically concatenate this even if we don't call toString
  console.log("\n" + this + "\n");
  // return whether we found a letter
  return foundLetter;
};

// Returns true if all letters in the word have been guessed
Word.prototype.guessedCorrectly = function() {
  // The `every` method returns true if the callback function returns true for every element in the array
  return this.letters.every(function(letter) {
    return letter.visible;
  });
};

module.exports = Word;