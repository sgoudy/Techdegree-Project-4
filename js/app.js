/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
document.getElementById('btn__reset').addEventListener('click', function(){
	game.startGame();
});
// User interface with on-screen keyboard.
// 
const onscreenKeyboard = document.getElementById('qwerty');
onscreenKeyboard.addEventListener('click', (event) => {
	if (event.target.tagName === 'BUTTON'){
	game.handleInteraction(event.target);
	}
});

//document.addEventListener('keydown', (e) => game.handleInteraction(e)); 












