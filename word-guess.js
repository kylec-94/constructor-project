//import the letter constructor and name it as "letter"
var Letter = require("./letter-guess.js");

//export this constructor as a module
module.exports = createWord;



//constructor function for a new letter guess
var createWord = function(word) {

	this.word = word;
	this.letters = [];
	this.found = false;
	this.getLetters = function(){

		//create an object for each letter in the word
			//put objects into this.letters array
		for (var i = 0; i < this.word.length; i++) {
			this.letters[i] = new letter(this.word.charAt(i));
		}
	}
} 

this.findLetter = function(guessLetter){

	this.returnThis = 0;

	for (var i = 0; i < this.letters.length; i++) {
		
		if(guessLetter == this.letters[i].charac){
			this.letters[i].shown = true;
			this.returnThis += 1;
		}

	}

	return this.returnThis;
}


this.findWord = function() {

	var result = this.letters.every(function(currentLetter){

		if(currentLetter.found === true){

			currentLetter.found = true;
			return currentLetter.found;
		}
	});
	return result;
}

this.wordDisplay = function() {

	this.word = "";
	var letterString = "";

	for (var i = 0; i < this.letters.length; i++) {
		var letterString = letterString + this.letters[i].showLetter();
		this.word = letterString;
	}
	return this.word;
}






