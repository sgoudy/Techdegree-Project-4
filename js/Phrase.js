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
			if (regex.test(this.phrase[i]) === true){
				const letterHolder = document.createElement('li');
				letterHolder.setAttribute('class', 'hide letter ');
				letterHolder.className += this.phrase[i];
				letterHolder.innerHTML = this.phrase[i];
				ulElement.appendChild(letterHolder);
			} 
			else {
				const spaceHolder = document.createElement('li');
				spaceHolder.setAttribute('class', 'hide space');
				ulElement.appendChild(spaceHolder);
			}
		} 
	}
/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
	checkLetter(letter) {
		//const keys = document.getElementsByClassName('qwerty');
		//const topRow = keys[0]; // textContent (qwertyuiop)
		//const middleRow = keys[1]; // textContent (asdfghjkl)
		//const bottomRow = keys[2]; // textContent (zxcvbnm)
	 	if (this.phrase.includes(letter)){
	 			console.log('true');
	 	} else {
	 			console.log('false');
	 	}
	 }
/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
	showMatchedLetter(letter) {
		const selectMatch = document.getElementsByClassName(letter);
		for (let i = 0; i < selectMatch.length; i ++){
			selectMatch[i].classList.add('show');
			selectMatch[i].classList.remove('hide');
		}
	}
	

 };

 