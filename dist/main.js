function* guessingGame() {

	do {
		var playAgain = "yes";
		var number = Math.floor(Math.random()*100 + 1);
		var myGuess = yield game.ask("I'm thinking of a number 1 through 100... What is it?");

		while (myGuess != number){
			if (myGuess < number){
				myGuess = yield game.ask("Your guess was too low! Guess again...");
			} else {
				myGuess = yield game.ask(" Your guess was too high! Guess again..");
			}
		}

		playAgain = yield game.choose("Amazing guess! You Win! Do you wish to play again?","yes","no");

	} while (playAgain === "yes");

	yield game.say("Hope you enjoyed this guessing game!");
}