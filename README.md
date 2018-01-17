# constructor-project
CLI constructor game 


**INSTRUCTIONS** 

**To start the game**:
	
	Open Terminal or GitBash, and initialize the game by typing "node functions.js".
		-this will determine the word you will be trying to guess. 

**To guess a letter of the word**:

	Simply use the first two commands in the CLI that started the game, but also type "letter" and the letter of your guess. 
		-ex: if you wanted to guess the letter 'j', you would type 'node functions.js letter j'.

	-- if you have guessed a letter correctly, the correct letter will replace the '_', and your guess count will decrease by 1. 

	-- if you guess incorrectly, you will see a message that says "Incorrect guess", and your guess count will decrease by 1. 

**To guess the word or phrase as a whole**:

	Simply type "node functions.js word [your guess]". 

	--if your guess is correct, you will see a win message in the console, and the game will move on to the next word or phrase. 

	--if guessed incorrectly, you will see a message that says "incorrect guess", and your guess count will be decreased by 1.

**If you run out of guesses**:

	A message will be shown saying "You lose!", and the game will reset to a new word or phrase. 