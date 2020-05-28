/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
document.getElementById('btn__reset').addEventListener('click', function(){
	game.startGame();
});
// User interface with on-screen keyboard.
document.getElementById('qwerty').addEventListener('click', (event) => {
	keyBtn = event.target;
	if (keyBtn.tagName === 'BUTTON'){
	game.handleInteraction(keyBtn);
	} 
});








