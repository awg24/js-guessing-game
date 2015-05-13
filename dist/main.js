function* guessingGame() {
	//console.log(yield game.say('Hey there!'));
	//console.log(yield game.say('Woah', 'This is cool'));
	//console.log(yield game.ask('Woah', 'This is cool'));
	//console.log(yield game.choose('Woah', 'This is cool', 'Hello world'));
	//console.log(yield game.say('That\'s all folks!', 'THE END'));
	do {
		var playAgain = "yes";
		var number = Math.floor(Math.random()*100 + 1);
		console.log(number);
		yield game.say("I'm thinking of a number 1 through 100...");
		var myGuess = yield game.ask("What is it?");
		while (myGuess != number){
			if (myGuess < number){
				myGuess = yield game.ask("Your guess was too low! Guess again...");
			} else {
				myGuess = yield game.ask(" Your guess was too high! Guess again..");
			}
		}
		if(myGuess == number){
			yield game.say("Amazing guess! You Win!");
			playAgain = yield game.choose("Do you wish to play again?","yes","no");
		} 
	} while (playAgain === "yes");

	yield game.say("Hope you enjoyed this guessing game!");
}