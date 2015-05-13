var colorBackground = function(flag) {
	var backgroundColorBody = document.querySelector("body");
	var backgroundColorMain = document.querySelector("main");
	var backgroundColorNav = document.querySelector("nav");
	if(flag){
		backgroundColorBody.style.backgroundColor = "green";
		backgroundColorMain.style.backgroundColor = "green";
		backgroundColorNav.style.backgroundColor = "green";
	} else {
		backgroundColorBody.style.backgroundColor = "red";
		backgroundColorMain.style.backgroundColor = "red";
		backgroundColorNav.style.backgroundColor = "red";
	}
}
var resetBackground = function() {
	var backgroundColorBody = document.querySelector("body");
	var backgroundColorMain = document.querySelector("main");
	var backgroundColorNav = document.querySelector("nav");

		backgroundColorBody.style.backgroundColor = "#3B3F45";
		backgroundColorMain.style.backgroundColor = "#3B3F45";
		backgroundColorNav.style.backgroundColor = "#3B3F45";
}

function* guessingGame() {

	do {
		resetBackground();
		var flag = false;
		var playAgain = "yes";
		var number = Math.floor(Math.random()*100 + 1);
		console.log(number);
		var myGuess = yield game.ask("I'm thinking of a number 1 through 100... What is it?");
		while(isNaN(myGuess/2)){
			myGuess = yield game.ask("You need to put in an actual number.. Guess again...");
			colorBackground(flag);
		}
		while (myGuess != number){
			if (myGuess < number){
				colorBackground(flag);
				myGuess = yield game.ask("Your guess was too low! Guess again...");
				while(isNaN(myGuess/2)){
					myGuess = yield game.ask("You need to put in an actual number.. Guess again...");
					colorBackground(flag);
				}
			} else {
				colorBackground(flag);
				myGuess = yield game.ask(" Your guess was too high! Guess again..");
				while(isNaN(myGuess/2)){
					myGuess = yield game.ask("You need to put in an actual number.. Guess again...");
					colorBackground(flag);
				}
			}
		}
		flag = true;
		colorBackground(flag);
		playAgain = yield game.choose("Amazing guess! You Win! Do you wish to play again?","yes","no");


	} while (playAgain === "yes");
	resetBackground();
	yield game.say("Hope you enjoyed this guessing game!");
}