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

	checkLetter(){

	}

	showMatchedLetter(){

	}



 };

 