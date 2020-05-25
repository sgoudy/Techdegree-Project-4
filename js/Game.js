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
/**
* Handles onscreen keyboard button clicks
* @param (button) button - The clicked button element
*/	
	handleInteraction(button){
		button.target.disabled = true;
		//console.log(button.target.textContent);
		button.target.style.backgroundColor = 'navy';
		button.target.style.color = 'white';
		this.activePhrase.checkLetter(button.target);
	}


/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
	checkForWin() {
		const hiddenLetter = document.getElementsByClassName('hide letter');
		if (hiddenLetter.length === 0){
			return this.gameOver(true);
		}
	};
/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
	removeLife() {
		const hearts = document.querySelectorAll('img');
		const heartArr = [...hearts];
		this.missed += 1;
		heartArr[this.missed-1].src = "file:///Users/shelbygoudy/Documents/(2)%20CODE/Techdegree-Project-4/images/lostHeart.png";
		if (this.missed === 5) {
			return this.gameOver(false);
		} 
	};
/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
	gameOver(gameWon){
		if (gameWon === true){
			const overlayDiv = document.getElementById('overlay');
			overlayDiv.style.display = '';
			overlayDiv.style.backgroundColor = 'green';
			const h1 = document.getElementById('game-over-message');
			h1.style.display = '';
			h1.textContent = "You're a WINNER!";
		} else if (gameWon === false){
			const overlayDiv = document.getElementById('overlay');
			overlayDiv.style.display = '';
			overlayDiv.style.backgroundColor = 'red';
			const h1 = document.querySelector('h1');
			h1.style.display = '';
			h1.textContent = 'Sorry, better luck next time!!';
		}
	};

}
