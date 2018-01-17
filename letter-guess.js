

var Letter = function(letter){

	this.letter = process.argv[3];
	this.shown = false;
	this.showLetter = function(){

		if(this.shown === false){

			return "_";

		}else {

			return this.letter;

		}

		
	}
}


module.exports = Letter;