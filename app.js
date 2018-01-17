
var createWord = require("./word-guess.js");
var inquirer = require('inquirer');


var startGame = function() {

	console.log(showLetter);

	this.answers = ["Bitcoin", "Nuclear", "Twitter"];
	this.guesses = 10;
	
	this.start = function() {

		var pickWord = this.answers[Math.floor(Math.random() * this.answers.length)];
		this.currentWord = new createWord(pickWord);
		this.currentWord.getLetters();
		this.askUser();

	}

	this.askUser = function() {


		inquirer.prompt([{
  		type: "input",
  		name: "userInput",
  		message: 'Choose a letter:' 

	}]).then(function(err, result){

		console.log("You guessed: " + result.userInput);

			var userLetterCount = this.currentWord.findLetter(result.userInput);
			if (userLetterCount === 0){

				console.log("Incorrect guess!");
				this.guesses -= 1;

			} else {
				console.log("Correct guess!");
			}

	});


	}

	console.log("You have " + this.guesses + " left.");
	console.log(this.currentWord);

		if(this.guesses > 0 || self.currentWord === false){
			this.askUser();
		} else if (this.guesses === 0){

			console.log("Game over!");
		} else {
			console.log(this.currentWord.wordDisplay());
		}

}//end constructor

//variables for starting new game

var gameStart = new startGame();

gameStart.startGame();






