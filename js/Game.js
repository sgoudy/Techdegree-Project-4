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
 		this.phrases = [
 			{phrase: 'you get out of it what you put into it'},
 			{phrase: 'dont lose sleep over it'},
 			{phrase: 'you can lead a horse to water but you cant make him drink'},
 			{phrase: 'kill two birds with one stone'},
 			{phrase: 'the squeaky wheel gets the grease'}
 			]; 
 		this.activePhrase = null; // intial value
 		}

/** 
* Selects random phrase from phrases property 
* @return {Object} Phrase object chosen to be used 
*/ 
	getRandomPhrase(){
		const randomNum = Math.floor(Math.random()*5);
		return this.phrases[randomNum];
	}

 

 };

