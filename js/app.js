/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
document.getElementById('btn__reset').addEventListener('click', function(){
	game.startGame();
});


const keys = document.getElementsByClassName('key');
	for (let key of keys){
		key.addEventListener('click', (button) => game.handleInteraction(button));
	}



		





