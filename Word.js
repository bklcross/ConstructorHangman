var Letter = require('./letter.js');

//letterObjArr will hold the current word where it will then get sent through a function that
//creates letter objects out of the word

module.exports = function Word(word)
{
    this.word = word;
    this.returnArr = function(word)
    {
        //returns the letters as a string with '-' instead
        var str = word.toString();
        var arr = str.split("");
        var arrWord = [];
        //for each statement of the specific string within wordsArr
        arr.forEach(character =>
        {
            //creates a newLetter object from the Letter constructor and passes it the
            //current character from the word that needs to be guessed.
            var newLetter = new Letter(character);
            arrWord.push(newLetter);
        });
        console.log(arrWord.toString());
        return arrWord; 
    }
    this.returnBlank = function(str)
    {
        var blankWord = [];
        var n = str.toString().length;
        for (i = 0; i < n; i++) 
        {
            blankWord.push("-");
        }
        console.log(blankWord.toString());
        return blankWord;
    }
    this.guess = function (character, arrWord, blankWord)
    {
        //returns is guessed, updated string, etc...
        var newLetter = new Letter(character);
        //boolean check to see if the letter has been guessed or not...
        var n = 0;
        if (newLetter.bool)
        {
            newLetter.hasBeenGuessed();
            n = arrWord.indexOf(newLetter);
            console.log(n);
            blankWord[n] = character;
            //prints out the new blankWord with updated letter...
            console.log(blankWord.toString());
        }
        else
        {
            newLetter.hasBeenGuessed();
            n = arrWord.indexOf(newLetter);
            blankWord[n] = arrWord[0].char;
            //prints out the new blankWord with updated letter...
            console.log(blankWord.toString());
        }
    }
};

var 