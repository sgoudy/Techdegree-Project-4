/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 /**
 * Handle Creation of Phrases.
 **/
 class Phrase {
 	constructor (phrase){
 		this.phrase = phrase.toLowerCase();
 	}	
/** 
* Display phrase on game board. Regex tests for a letter, if there is one,
* it returns a letter with class "letter". 
*/ 
	addPhraseToDisplay() { 
		const ulElement = document.querySelector('ul');
		const regex = /^[A-za-z]$/;
		for(let i = 0; i < this.phrase.length; i ++){
			// For letters, add the following.
			if (regex.test(this.phrase[i]) === true){
				const letterHolder = document.createElement('li');
				letterHolder.setAttribute('class', 'hide letter ');
				letterHolder.className += this.phrase[i];
				letterHolder.innerHTML = this.phrase[i];
				ulElement.appendChild(letterHolder);
			} 
			// For spaces, add the following.
			else {
				const spaceHolder = document.createElement('li');
				spaceHolder.setAttribute('class', 'hide space');
				ulElement.appendChild(spaceHolder);
			}
		} 
	}
/**
* Checks if passed letter is in phrase
* @param (string) button - Letter to check
*/
	checkLetter(button) {	 
	const phraze = game.activePhrase.phrase;
	const letter = Object.values(phraze);
	const text = button.textContent;
	// If the letter is in the phrase, do this. 
	if (letter.indexOf(text) > -1){
		button.classList.add('chosen');
		this.showMatchedLetter(text);
		game.checkForWin();
	// If the letter is not in the phrase, do this.
	} else {
		button.classList.add('wrong');
		game.removeLife();
		}
	}
/**
* Displays passed letter on screen after a match is found
* @param (string) text - Letter to display
*/
	showMatchedLetter(text) {
		const selectMatch = document.getElementsByClassName(text);
		for (let i = 0; i < selectMatch.length; i ++){
			selectMatch[i].classList.add('show');
			selectMatch[i].classList.remove('hide');
		}
	}
 };

 