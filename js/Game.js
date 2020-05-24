/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /**
 * Starting and Ending the Game, 
 * Handling Interactions,
 * Getting a Random Phrase,
 * Checking for a Win,
 * Removing a Life from Scoreboard.
 **/

 class Game {
 	constructor (){
 		this.missed = 0; // initial value
 		this.phrases = this.createPhrases(); 
 		this.activePhrase = null; // initial value
 	}
/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
 	createPhrases(){
 		const phrases = [];
 		const phrase1 = new Phrase("You dont always get what you want");
 		const phrase2 = new Phrase("Dont go to bed angry");
 		const phrase3 = new Phrase("Stupid is as stupid does");
 		const phrase4 = new Phrase("Kill two birds with one stone");
 		const phrase5 = new Phrase("The squeaky wheel gets the grease");
 	    phrases.push(phrase1, phrase2, phrase3, phrase4, phrase5);
 		return phrases;
 	}
/** 
* Selects random phrase from phrases property 
* @return {Object} Phrase object chosen to be used 
*/
	getRandomPhrase(){
		const randomNum = Math.floor(Math.random()*5);
		return this.phrases[randomNum];
	};
/**
* Begins game by selecting a random phrase and displaying it to user 
*/
	startGame() {
		const overlayDiv = document.getElementById('overlay');
		overlayDiv.style.display = 'none';
		this.activePhrase = this.getRandomPhrase();
		return this.activePhrase.addPhraseToDisplay();
	}
	
/***
	handleInteraction(){

	}
***/

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
	checkForWin() {
		const hiddenLetter = document.getElementsByClassName('hide letter');
			if (hiddenLetter.length > 0) return false;
			else {return true;}
			};
 /**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out

removeLife() {};
*/
}
