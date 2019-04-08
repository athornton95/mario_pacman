let seconds = 0;



//KeyCodes
$('body').keydown((e) => {
	if(e.keyCode === 37){
		pacman.direction ='left';
	} else if(e.keyCode === 39){
		pacman.direction ='right';
	} else if(e.keyCode === 38){
		pacman.direction = 'up';
	} else if(e.keyCode === 40){
		pacman.direction ='down';
	}
	})

const playGame = () => {
	timePassing = setInterval(secondsGoUp, 1000);
	};

const secondsGoUp = () => {
    seconds++;
    console.log(seconds);
    if(pacman.lives <= 0){
    	gameOver();
    }
    if(seconds === 5){
    	addGhostTwo();
    }
    if(seconds === 12){
    	addGhostThree();
    }
    if(seconds === 20){
    	addGhostFour();
    }
   	if(seconds === 30){
   		addBowser();
   	}
 }

//GAME OVER
 const gameOver = () => {
 		$('.pacman').removeClass('pacman');
 		clearInterval(timePassing);
 		$('body').append('<div class = gameOver>GAME OVER</div>');
		}


// PACMAN CHARACTER
const pacman = {
	x : 0,
	y : 0,
	direction : 'left',
	points: 0,
	lives: 2,
	move(){
		$('.pacman').removeClass('pacman');

		//LEFT
		if(this.direction === 'left' && this.x > 0 && $(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).hasClass('wall')){
			console.log('pacman hit wall');
		} else if(this.direction === 'left' && this.x > 0 && $(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).hasClass('dot')){
			$(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).removeClass('dot');
			this.x--;
			this.points++;
			checkPoints();
		} else if(this.direction === 'left' && this.x > 0 && $(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).hasClass('fruit')){
			$(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).removeClass('fruit');
			this.x--;
			this.lives ++;
			checkLives();
		} else if(this.direction === 'left' && this.x > 0 && $(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).hasClass('ghost')){
			this.x = 0;
			this.y = 0;
			this.lives--;
			checkLives();
		} else if(this.direction === 'left' && this.x > 0){
			this.x--;



		//RIGHT
		} else if(this.direction === 'right' && this.x < 25 && $(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).hasClass('wall')){
			console.log('pacman hit wall');
		} else if(this.direction === 'right' && this.x < 25 && $(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).hasClass('dot')){
			$(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).removeClass('dot');
			this.x++;
			this.points++;
			checkPoints();
		} else if(this.direction === 'right' && this.x < 25 && $(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).hasClass('fruit')){
			$(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).removeClass('fruit');
			this.x++;
			this.lives++;
			checkLives();
		} else if(this.direction === 'right' && this.x < 25 && $(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).hasClass('ghost')){
			this.x = 0;
			this.y = 0;
			this.lives--;
			checkLives();
		} else if(this.direction === 'right' && this.x < 25){
			this.x++;


		//UP
		} else if(this.direction === 'up' && this.y < 14 && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('wall')){
			console.log('pacman hit wall');
		} else if(this.direction === 'up' && this.y < 14 && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('dot')){
			$(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).removeClass('dot');
			this.y++;
			this.points++;
			checkPoints();
		} else if(this.direction === 'up' && this.y < 14 && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('fruit')){
			$(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).removeClass('fruit');
			this.y++;
			this.lives++;
			checkLives();
		} else if(this.direction === 'up' && this.y < 14 && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('ghost')){
			this.x = 0
			this.y = 0;
			this.lives--;
			checkLives();
		} else if(this.direction === 'up' && this.y < 14){
			this.y++;


		//DOWN
		} else if(this.direction === 'down' && this.y > 0 && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('wall')){
			console.log('pacman hit wall');
		} else if(this.direction === 'down' && this.y > 0 && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('dot')){
			$(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).removeClass('dot');
			this.y--;
			this.points++;
			checkPoints();
		} else if(this.direction === 'down' && this.y > 0 && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('fruit')){
			$(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).removeClass('fruit');
			this.y--;
			this.lives++;
			checkLives();
		} else if(this.direction === 'down' && this.y > 0 && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('ghost')){
			this.y = 0;
			this.x = 0;
			this.lives--;
			checkLives();
		} else if(this.direction === 'down' && this.y > 0){
			this.y--;
		}
		$(`.gameSquare[x="${this.x}"][y="${this.y}"]`).addClass('pacman');
	}
}

const checkLives = () => {
	$('.lives').text(`${pacman.lives}`);
}

const checkPoints = () => {
	$('.points').text(`${pacman.points}`);
	// if(`${pacman.points}` === 507){
	// 	$('body').append('<div class = winner>YOU WON</div>');
	// }
}
//SCORE ELEMENTS
$('body').append(`<div>Points: <span class = "points">${pacman.points}</span></div>`);
$('body').append(`<div>Lives: <span class = "lives">${pacman.lives}</span></div>`);


//GHOSTS
class Ghost {
	constructor(x, y, direction){
	this.x = x;
	this.y = y;
	this.direction = direction;
	}
	move() {
		$(`.gameSquare[x="${this.x}"][y="${this.y}"]`).removeClass('ghost');


		// UP
		if(this.direction === 'ghostUp' && this.y < 14 && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('wall')){	
			this.changeDirection();
		} else if(this.direction === 'ghostUp' && this.y < 14 && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('ghost')){	
			this.changeDirection();
		} else if(this.direction === 'ghostUp' && this.y === 14){	
			this.changeDirection();
		} else if(this.direction === 'ghostUp' && this.y < 14 && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('pacman')){
			$(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).removeClass('pacman');
			this.y++;
			pacman.lives -= 1;
			checkLives();
			pacman.x = 0;
			pacman.y = 0;
		} else if(this.direction === 'ghostUp' && this.y < 14){
			this.y++;



		// DOWN
		} else if(this.direction === 'ghostDown' && this.y > 0 && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('wall')){	
			this.changeDirection();
		} else if(this.direction === 'ghostDown' && this.y > 0 && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('ghost')){	
			this.changeDirection();
		} else if(this.direction === 'ghostDown' && this.y === 0){	
			this.changeDirection();
		} else if(this.direction === 'ghostDown' && this.y > 0 && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('pacman')){
			$(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).removeClass('pacman');
			this.y--;
			pacman.lives -= 1;
			checkLives();
			pacman.x = 0;
			pacman.y = 0;
		} else if(this.direction === 'ghostDown' && this.y > 0){
			this.y--;



		// LEFT
		} else if(this.direction === 'ghostLeft' && this.x > 0 && $(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).hasClass('wall')){	
			this.changeDirection();
		} else if(this.direction === 'ghostLeft' && this.x > 0 && $(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).hasClass('ghost')){	
			this.changeDirection();
		} else if(this.direction === 'ghostLeft' && this.x === 0){	
			this.changeDirection();
			console.log('ghost hit a wall');
		} else if(this.direction === 'ghostLeft' && this.x > 0 && $(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).hasClass('pacman')){
			$(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).removeClass('pacman');
			this.x--;
			pacman.lives -= 1;
			checkLives();
			pacman.x = 0;
			pacman.y = 0;
		} else if(this.direction === 'ghostLeft' && this.x > 0){
			this.x--;



		// RIGHT
		} else if(this.direction === 'ghostRight' && this.x < 25 && $(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).hasClass('wall')){	
			this.changeDirection();
		} else if(this.direction === 'ghostRight' && this.x < 25 && $(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).hasClass('ghost')){	
			this.changeDirection();
		} else if(this.direction === 'ghostRight' && this.x === 25){	
			this.changeDirection();
		} else if(this.direction === 'ghostRight' && this.x < 25 && $(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).hasClass('pacman')){
			$(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).removeClass('pacman');
			this.x++;
			pacman.lives -= 1;
			checkLives();
			pacman.x = 0;
			pacman.y = 0;
		} else if(this.direction === 'ghostRight' && this.x < 25){
			this.x++;

		}
		$(`.gameSquare[x="${this.x}"][y="${this.y}"]`).addClass('ghost');
	}
	changeDirection() {
		// $('.ghost').removeClass('ghost');
		if(this.direction === 'ghostUp' && this.y < 14 && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('wall')){
			if(Math.random() > .33){
				this.direction = 'ghostLeft';
				// this.x--;
			} else if(Math.random() > .69){
				this.direction = 'ghostRight';
				// this.x++
			} else {
				this.direction = 'ghostDown';
				// this.y--
			}
		} else if(this.direction === 'ghostUp' && this.y < 14 && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('ghost')){
			if(Math.random() > .33){
				this.direction = 'ghostLeft';
				// this.x--;
			} else if(Math.random() > .69){
				this.direction = 'ghostRight';
				// this.x++
			} else {
				this.direction = 'ghostDown';
				// this.y--
			}
		} else if(this.direction === 'ghostUp' && this.y === 14){
			if(Math.random() > .33){
				this.direction = 'ghostLeft';
				// this.x--;
			} else if(Math.random() > .69){
				this.direction = 'ghostRight';
				// this.x++
			} else {
				this.direction = 'ghostDown';
				// this.y--
			}

		} else if(this.direction === 'ghostDown' && this.y > 0 && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('wall')){
			if(Math.random() > .33){
				this.direction = 'ghostLeft';
				// this.x--;
			} else if(Math.random() > .69){
				this.direction = 'ghostRight';
				// this.x++
			} else {
				this.direction = 'ghostUp';
				// this.y++
			}
		} else if(this.direction === 'ghostDown' && this.y > 0 && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('ghost')){
			if(Math.random() > .33){
				this.direction = 'ghostLeft';
				// this.x--;
			} else if(Math.random() > .69){
				this.direction = 'ghostRight';
				// this.x++
			} else {
				this.direction = 'ghostUp';
				// this.y++
			}
		} else if(this.direction === 'ghostDown' && this.y === 0){
			if(Math.random() > .33){
				this.direction = 'ghostLeft';
				// this.x--;
			} else if(Math.random() > .69){
				this.direction = 'ghostRight';
				// this.x++
			} else {
				this.direction = 'ghostUp';
				// this.y++
			}
			
		} else if(this.direction === 'ghostLeft' && this.x > 0 && $(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).hasClass('wall')){
			if(Math.random() > .33){
				this.direction = 'ghostDown';
				// this.y--;
			} else if(Math.random() > .69){
				this.direction = 'ghostRight';
				// this.x++
			} else {
				this.direction = 'ghostUp';
				// this.y++
			}
		} else if(this.direction === 'ghostLeft' && this.x > 0 && $(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).hasClass('ghost')){
			if(Math.random() > .33){
				this.direction = 'ghostDown';
				// this.y--;
			} else if(Math.random() > .69){
				this.direction = 'ghostRight';
				// this.x++
			} else {
				this.direction = 'ghostUp';
				// this.y++
			}
		} else if(this.direction === 'ghostLeft' && this.x === 0){
			if(Math.random() > .33){
				this.direction = 'ghostDown';
				// this.y--;
			} else if(Math.random() > .69){
				this.direction = 'ghostRight';
				// this.x++
			} else {
				this.direction = 'ghostUp';
				// this.y++
			}
		} else if(this.direction === 'ghostRight' && this.x < 25 && $(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).hasClass('wall')){
			if(Math.random() > .33){
				this.direction = 'ghostDown';
				// this.y--;
			} else if(Math.random () > .69){
				this.direction = 'ghostLeft';
				// this.x--
			} else {
				this.direction = 'ghostUp';
				// this.y++
			}
		} else if(this.direction === 'ghostRight' && this.x < 25 && $(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).hasClass('ghost')){
			if(Math.random() > .33){
				this.direction = 'ghostDown';
				// this.y--;
			} else if(Math.random () > .69){
				this.direction = 'ghostLeft';
				// this.x--
			} else {
				this.direction = 'ghostUp';
				// this.y++
			}
		} else if(this.direction === 'ghostRight' && this.x === 25){
			if(Math.random() > .33){
				this.direction = 'ghostDown';
				// this.y--;
			} else if(Math.random () > .69){
				this.direction = 'ghostLeft';
				// this.x--
			} else {
				this.direction = 'ghostUp';
				// this.y++
			}

			}
	}
	}

const addGhostOne = () => {
	const ghostOne = new Ghost(13, 7, "ghostUp");
	setInterval(() => {ghostOne.move()},
	200);
	}

const addGhostTwo = () => {
	// $('.gameSquare[x="12"][y="7"]').addClass('ghost');
    const ghostTwo = new Ghost (12, 7, "ghostUp");
    setInterval(() => {ghostTwo.move()},
	300);
	}

const addGhostThree = () => {
	const ghostThree = new Ghost (13, 7, "ghostUp");
    setInterval(() => {ghostThree.move()},
	250);
	}

const addGhostFour = () => {
	const ghostFour = new Ghost (12, 7, "ghostUp");
	setInterval(() => {ghostFour.move()},
	150);
	}

const addBowser = () => {
	const bowser = new Ghost (12, 7, "ghostUp");
	setInterval(() => {bowser.move()},
	50);
	}


// GENERATE GAME BOARD
$('body').append('<div class="gameBoard"></div>');
for(let y = 14; y > -1; y--){
	$('.gameBoard').append(`<div class="row" id = "row_${y}"></div>`);
	for(let x = 0; x < 26; x++){
		$(`#row_${y}`).append(`<div class = "gameSquare" y = "${y}" x = "${x}"></div>`);
	}
}


// BUILD GAME

const buildMaze = () => {
	$('.gameSquare[x="0"][y="1"]').addClass('wall');
	$('.gameSquare[x="0"][y="3"]').addClass('wall');
	$('.gameSquare[x="0"][y="4"]').addClass('wall');
	$('.gameSquare[x="0"][y="8"]').addClass('wall');
	$('.gameSquare[x="0"][y="9"]').addClass('wall');
	$('.gameSquare[x="0"][y="11"]').addClass('wall');

	$('.gameSquare[x="1"][y="3"]').addClass('wall');
	$('.gameSquare[x="1"][y="4"]').addClass('wall');
	$('.gameSquare[x="1"][y="6"]').addClass('wall');
	$('.gameSquare[x="1"][y="11"]').addClass('wall');
	$('.gameSquare[x="1"][y="13"]').addClass('wall');
	$('.gameSquare[x="1"][y="14"]').addClass('wall');

	$('.gameSquare[x="2"][y="0"]').addClass('wall');
	$('.gameSquare[x="2"][y="1"]').addClass('wall');
	$('.gameSquare[x="2"][y="6"]').addClass('wall');
	$('.gameSquare[x="2"][y="7"]').addClass('wall');
	$('.gameSquare[x="2"][y="8"]').addClass('wall');
	$('.gameSquare[x="2"][y="9"]').addClass('wall');

	$('.gameSquare[x="3"][y="1"]').addClass('wall');
	$('.gameSquare[x="3"][y="3"]').addClass('wall');
	$('.gameSquare[x="3"][y="11"]').addClass('wall');
	$('.gameSquare[x="3"][y="12"]').addClass('wall');
	$('.gameSquare[x="3"][y="13"]').addClass('wall');

	$('.gameSquare[x="4"][y="1"]').addClass('wall');
	$('.gameSquare[x="4"][y="3"]').addClass('wall');
	$('.gameSquare[x="4"][y="5"]').addClass('wall');
	$('.gameSquare[x="4"][y="6"]').addClass('wall');
	$('.gameSquare[x="4"][y="7"]').addClass('wall');
	$('.gameSquare[x="4"][y="8"]').addClass('wall');
	$('.gameSquare[x="4"][y="9"]').addClass('wall');
	$('.gameSquare[x="4"][y="11"]').addClass('wall');
	$('.gameSquare[x="4"][y="13"]').addClass('wall');

	$('.gameSquare[x="5"][y="3"]').addClass('wall');
	$('.gameSquare[x="5"][y="5"]').addClass('wall');
	$('.gameSquare[x="5"][y="9"]').addClass('wall');
	$('.gameSquare[x="5"][y="11"]').addClass('wall');
	$('.gameSquare[x="5"][y="13"]').addClass('wall');

	$('.gameSquare[x="6"][y="0"]').addClass('wall');
	$('.gameSquare[x="6"][y="3"]').addClass('wall');
	$('.gameSquare[x="6"][y="5"]').addClass('wall');
	$('.gameSquare[x="6"][y="7"]').addClass('wall');
	$('.gameSquare[x="6"][y="9"]').addClass('wall');
	$('.gameSquare[x="6"][y="11"]').addClass('wall');
	$('.gameSquare[x="6"][y="12"]').addClass('wall');
	$('.gameSquare[x="6"][y="13"]').addClass('wall');

	$('.gameSquare[x="7"][y="0"]').addClass('wall');
	$('.gameSquare[x="7"][y="7"]').addClass('wall');
	$('.gameSquare[x="7"][y="8"]').addClass('wall');
	$('.gameSquare[x="7"][y="9"]').addClass('wall');

	$('.gameSquare[x="8"][y="0"]').addClass('wall');
	$('.gameSquare[x="8"][y="1"]').addClass('wall');
	$('.gameSquare[x="8"][y="2"]').addClass('wall');
	$('.gameSquare[x="8"][y="4"]').addClass('wall');
	$('.gameSquare[x="8"][y="12"]').addClass('wall');
	$('.gameSquare[x="8"][y="13"]').addClass('wall');
	$('.gameSquare[x="8"][y="14"]').addClass('wall');

	$('.gameSquare[x="9"][y="0"]').addClass('wall');
	$('.gameSquare[x="9"][y="4"]').addClass('wall');
	$('.gameSquare[x="9"][y="6"]').addClass('wall');
	$('.gameSquare[x="9"][y="7"]').addClass('wall');
	$('.gameSquare[x="9"][y="8"]').addClass('wall');
	$('.gameSquare[x="9"][y="10"]').addClass('wall');
	$('.gameSquare[x="9"][y="14"]').addClass('wall');

	$('.gameSquare[x="10"][y="0"]').addClass('wall');
	$('.gameSquare[x="10"][y="2"]').addClass('wall');
	$('.gameSquare[x="10"][y="4"]').addClass('wall');
	$('.gameSquare[x="10"][y="10"]').addClass('wall');
	$('.gameSquare[x="10"][y="12"]').addClass('wall');
	$('.gameSquare[x="10"][y="14"]').addClass('wall');

	$('.gameSquare[x="11"][y="2"]').addClass('wall');
	$('.gameSquare[x="11"][y="6"]').addClass('wall');
	$('.gameSquare[x="11"][y="7"]').addClass('wall');
	$('.gameSquare[x="11"][y="8"]').addClass('wall');
	$('.gameSquare[x="11"][y="12"]').addClass('wall');

	$('.gameSquare[x="12"][y="1"]').addClass('wall');
	$('.gameSquare[x="12"][y="2"]').addClass('wall');
	$('.gameSquare[x="12"][y="3"]').addClass('wall');
	$('.gameSquare[x="12"][y="4"]').addClass('wall');
	$('.gameSquare[x="12"][y="6"]').addClass('wall');
	// $('.gameSquare[x="12"][y="8"]').addClass('wall');
	$('.gameSquare[x="12"][y="10"]').addClass('wall');
	$('.gameSquare[x="12"][y="11"]').addClass('wall');
	$('.gameSquare[x="12"][y="12"]').addClass('wall');
	$('.gameSquare[x="12"][y="13"]').addClass('wall');

	$('.gameSquare[x="13"][y="1"]').addClass('wall');
	$('.gameSquare[x="13"][y="2"]').addClass('wall');
	$('.gameSquare[x="13"][y="3"]').addClass('wall');
	$('.gameSquare[x="13"][y="4"]').addClass('wall');
	$('.gameSquare[x="13"][y="6"]').addClass('wall');
	// $('.gameSquare[x="13"][y="8"]').addClass('wall');
	$('.gameSquare[x="13"][y="10"]').addClass('wall');
	$('.gameSquare[x="13"][y="11"]').addClass('wall');
	$('.gameSquare[x="13"][y="12"]').addClass('wall');
	$('.gameSquare[x="13"][y="13"]').addClass('wall');

	$('.gameSquare[x="14"][y="2"]').addClass('wall');
	$('.gameSquare[x="14"][y="6"]').addClass('wall');
	$('.gameSquare[x="14"][y="7"]').addClass('wall');
	$('.gameSquare[x="14"][y="8"]').addClass('wall');
	$('.gameSquare[x="14"][y="12"]').addClass('wall');

	$('.gameSquare[x="15"][y="0"]').addClass('wall');
	$('.gameSquare[x="15"][y="2"]').addClass('wall');
	$('.gameSquare[x="15"][y="4"]').addClass('wall');
	$('.gameSquare[x="15"][y="10"]').addClass('wall');
	$('.gameSquare[x="15"][y="12"]').addClass('wall');
	$('.gameSquare[x="15"][y="14"]').addClass('wall');

	$('.gameSquare[x="16"][y="0"]').addClass('wall');
	$('.gameSquare[x="16"][y="4"]').addClass('wall');
	$('.gameSquare[x="16"][y="6"]').addClass('wall');
	$('.gameSquare[x="16"][y="7"]').addClass('wall');
	$('.gameSquare[x="16"][y="8"]').addClass('wall');
	$('.gameSquare[x="16"][y="10"]').addClass('wall');
	$('.gameSquare[x="16"][y="14"]').addClass('wall');

	$('.gameSquare[x="17"][y="0"]').addClass('wall');
	$('.gameSquare[x="17"][y="1"]').addClass('wall');
	$('.gameSquare[x="17"][y="2"]').addClass('wall');
	$('.gameSquare[x="17"][y="4"]').addClass('wall');
	$('.gameSquare[x="17"][y="12"]').addClass('wall');
	$('.gameSquare[x="17"][y="13"]').addClass('wall');
	$('.gameSquare[x="17"][y="14"]').addClass('wall');

	$('.gameSquare[x="18"][y="0"]').addClass('wall');
	$('.gameSquare[x="18"][y="7"]').addClass('wall');
	$('.gameSquare[x="18"][y="8"]').addClass('wall');
	$('.gameSquare[x="18"][y="9"]').addClass('wall');

	$('.gameSquare[x="19"][y="0"]').addClass('wall');
	$('.gameSquare[x="19"][y="3"]').addClass('wall');
	$('.gameSquare[x="19"][y="5"]').addClass('wall');
	$('.gameSquare[x="19"][y="7"]').addClass('wall');
	$('.gameSquare[x="19"][y="9"]').addClass('wall');
	$('.gameSquare[x="19"][y="11"]').addClass('wall');
	$('.gameSquare[x="19"][y="12"]').addClass('wall');
	$('.gameSquare[x="19"][y="13"]').addClass('wall');

	$('.gameSquare[x="20"][y="3"]').addClass('wall');
	$('.gameSquare[x="20"][y="5"]').addClass('wall');
	$('.gameSquare[x="20"][y="9"]').addClass('wall');
	$('.gameSquare[x="20"][y="11"]').addClass('wall');
	$('.gameSquare[x="20"][y="13"]').addClass('wall');

	$('.gameSquare[x="21"][y="1"]').addClass('wall');
	$('.gameSquare[x="21"][y="3"]').addClass('wall');
	$('.gameSquare[x="21"][y="5"]').addClass('wall');
	$('.gameSquare[x="21"][y="6"]').addClass('wall');
	$('.gameSquare[x="21"][y="7"]').addClass('wall');
	$('.gameSquare[x="21"][y="8"]').addClass('wall');
	$('.gameSquare[x="21"][y="9"]').addClass('wall');
	$('.gameSquare[x="21"][y="11"]').addClass('wall');
	$('.gameSquare[x="21"][y="13"]').addClass('wall');

	$('.gameSquare[x="22"][y="1"]').addClass('wall');
	$('.gameSquare[x="22"][y="3"]').addClass('wall');
	$('.gameSquare[x="22"][y="11"]').addClass('wall');
	$('.gameSquare[x="22"][y="12"]').addClass('wall');
	$('.gameSquare[x="22"][y="13"]').addClass('wall');

	$('.gameSquare[x="23"][y="0"]').addClass('wall');
	$('.gameSquare[x="23"][y="1"]').addClass('wall');
	$('.gameSquare[x="23"][y="6"]').addClass('wall');
	$('.gameSquare[x="23"][y="7"]').addClass('wall');
	$('.gameSquare[x="23"][y="8"]').addClass('wall');
	$('.gameSquare[x="23"][y="9"]').addClass('wall');

	$('.gameSquare[x="24"][y="3"]').addClass('wall');
	$('.gameSquare[x="24"][y="4"]').addClass('wall');
	$('.gameSquare[x="24"][y="6"]').addClass('wall');
	$('.gameSquare[x="24"][y="11"]').addClass('wall');
	$('.gameSquare[x="24"][y="13"]').addClass('wall');
	$('.gameSquare[x="24"][y="14"]').addClass('wall');

	$('.gameSquare[x="25"][y="1"]').addClass('wall');
	$('.gameSquare[x="25"][y="3"]').addClass('wall');
	$('.gameSquare[x="25"][y="4"]').addClass('wall');
	$('.gameSquare[x="25"][y="8"]').addClass('wall');
	$('.gameSquare[x="25"][y="9"]').addClass('wall');
	$('.gameSquare[x="25"][y="11"]').addClass('wall');

	}

const buildDots = () => {
	$('.gameSquare[x="0"][y="2"]').addClass('dot');
	$('.gameSquare[x="0"][y="5"]').addClass('dot');
	$('.gameSquare[x="0"][y="6"]').addClass('dot');
	$('.gameSquare[x="0"][y="7"]').addClass('dot');
	$('.gameSquare[x="0"][y="10"]').addClass('dot');
	$('.gameSquare[x="0"][y="12"]').addClass('dot');
	$('.gameSquare[x="0"][y="13"]').addClass('dot');
	$('.gameSquare[x="0"][y="14"]').addClass('dot');

	$('.gameSquare[x="1"][y="0"]').addClass('dot');
	$('.gameSquare[x="1"][y="1"]').addClass('dot');
	$('.gameSquare[x="1"][y="2"]').addClass('dot');
	$('.gameSquare[x="1"][y="5"]').addClass('dot');
	$('.gameSquare[x="1"][y="7"]').addClass('dot');
	$('.gameSquare[x="1"][y="8"]').addClass('dot');
	$('.gameSquare[x="1"][y="9"]').addClass('dot');
	$('.gameSquare[x="1"][y="10"]').addClass('dot');
	$('.gameSquare[x="1"][y="12"]').addClass('dot');

	$('.gameSquare[x="2"][y="2"]').addClass('dot');
	$('.gameSquare[x="2"][y="3"]').addClass('dot');
	$('.gameSquare[x="2"][y="4"]').addClass('dot');
	$('.gameSquare[x="2"][y="5"]').addClass('dot');
	$('.gameSquare[x="2"][y="10"]').addClass('dot');
	$('.gameSquare[x="2"][y="11"]').addClass('dot');
	$('.gameSquare[x="2"][y="12"]').addClass('dot');
	$('.gameSquare[x="2"][y="13"]').addClass('dot');
	$('.gameSquare[x="2"][y="14"]').addClass('dot');

	$('.gameSquare[x="3"][y="0"]').addClass('dot');
	$('.gameSquare[x="3"][y="2"]').addClass('dot');
	$('.gameSquare[x="3"][y="4"]').addClass('dot');
	$('.gameSquare[x="3"][y="6"]').addClass('dot');
	$('.gameSquare[x="3"][y="7"]').addClass('dot');
	$('.gameSquare[x="3"][y="8"]').addClass('dot');
	$('.gameSquare[x="3"][y="9"]').addClass('dot');
	$('.gameSquare[x="3"][y="10"]').addClass('dot');
	$('.gameSquare[x="3"][y="14"]').addClass('dot');

	$('.gameSquare[x="4"][y="0"]').addClass('dot');
	$('.gameSquare[x="4"][y="2"]').addClass('dot');
	$('.gameSquare[x="4"][y="4"]').addClass('dot');
	$('.gameSquare[x="4"][y="10"]').addClass('dot');
	$('.gameSquare[x="4"][y="14"]').addClass('dot');

	$('.gameSquare[x="5"][y="0"]').addClass('dot');
	$('.gameSquare[x="5"][y="1"]').addClass('dot');
	$('.gameSquare[x="5"][y="2"]').addClass('dot');
	$('.gameSquare[x="5"][y="4"]').addClass('dot');
	$('.gameSquare[x="5"][y="6"]').addClass('dot');
	$('.gameSquare[x="5"][y="7"]').addClass('dot');
	$('.gameSquare[x="5"][y="8"]').addClass('dot');
	$('.gameSquare[x="5"][y="10"]').addClass('dot');
	$('.gameSquare[x="5"][y="14"]').addClass('dot');

	$('.gameSquare[x="6"][y="1"]').addClass('dot');
	$('.gameSquare[x="6"][y="2"]').addClass('dot');
	$('.gameSquare[x="6"][y="4"]').addClass('dot');
	$('.gameSquare[x="6"][y="6"]').addClass('dot');
	$('.gameSquare[x="6"][y="8"]').addClass('dot');
	$('.gameSquare[x="6"][y="10"]').addClass('dot');
	$('.gameSquare[x="6"][y="14"]').addClass('dot');

	$('.gameSquare[x="7"][y="1"]').addClass('dot');
	$('.gameSquare[x="7"][y="2"]').addClass('dot');
	$('.gameSquare[x="7"][y="3"]').addClass('dot');
	$('.gameSquare[x="7"][y="4"]').addClass('dot');
	$('.gameSquare[x="7"][y="5"]').addClass('dot');
	$('.gameSquare[x="7"][y="6"]').addClass('dot');
	$('.gameSquare[x="7"][y="10"]').addClass('dot');
	$('.gameSquare[x="7"][y="11"]').addClass('dot');
	$('.gameSquare[x="7"][y="12"]').addClass('dot');
	$('.gameSquare[x="7"][y="13"]').addClass('dot');
	$('.gameSquare[x="7"][y="14"]').addClass('dot');

	$('.gameSquare[x="8"][y="3"]').addClass('dot');
	$('.gameSquare[x="8"][y="5"]').addClass('dot');
	$('.gameSquare[x="8"][y="6"]').addClass('dot');
	$('.gameSquare[x="8"][y="7"]').addClass('dot');
	$('.gameSquare[x="8"][y="8"]').addClass('dot');
	$('.gameSquare[x="8"][y="9"]').addClass('dot');
	$('.gameSquare[x="8"][y="10"]').addClass('dot');
	$('.gameSquare[x="8"][y="11"]').addClass('dot');

	$('.gameSquare[x="9"][y="1"]').addClass('dot');
	$('.gameSquare[x="9"][y="2"]').addClass('dot');
	$('.gameSquare[x="9"][y="3"]').addClass('dot');
	$('.gameSquare[x="9"][y="5"]').addClass('dot');
	$('.gameSquare[x="9"][y="9"]').addClass('dot');
	$('.gameSquare[x="9"][y="11"]').addClass('dot');
	$('.gameSquare[x="9"][y="12"]').addClass('dot');
	$('.gameSquare[x="9"][y="13"]').addClass('dot');

	$('.gameSquare[x="10"][y="1"]').addClass('dot');
	$('.gameSquare[x="10"][y="3"]').addClass('dot');
	$('.gameSquare[x="10"][y="5"]').addClass('dot');
	$('.gameSquare[x="10"][y="6"]').addClass('dot');
	$('.gameSquare[x="10"][y="7"]').addClass('dot');
	$('.gameSquare[x="10"][y="8"]').addClass('dot');
	$('.gameSquare[x="10"][y="9"]').addClass('dot');
	$('.gameSquare[x="10"][y="11"]').addClass('dot');
	$('.gameSquare[x="10"][y="13"]').addClass('dot');

	$('.gameSquare[x="11"][y="0"]').addClass('dot');
	$('.gameSquare[x="11"][y="1"]').addClass('dot');
	$('.gameSquare[x="11"][y="3"]').addClass('dot');
	$('.gameSquare[x="11"][y="4"]').addClass('dot');
	$('.gameSquare[x="11"][y="5"]').addClass('dot');
	$('.gameSquare[x="11"][y="9"]').addClass('dot');
	$('.gameSquare[x="11"][y="10"]').addClass('dot');
	$('.gameSquare[x="11"][y="13"]').addClass('dot');
	$('.gameSquare[x="11"][y="14"]').addClass('dot');

	$('.gameSquare[x="12"][y="0"]').addClass('dot');
	$('.gameSquare[x="12"][y="5"]').addClass('dot');
	$('.gameSquare[x="12"][y="9"]').addClass('dot');
	$('.gameSquare[x="12"][y="14"]').addClass('dot');

	$('.gameSquare[x="13"][y="0"]').addClass('dot');
	$('.gameSquare[x="13"][y="5"]').addClass('dot');
	$('.gameSquare[x="13"][y="9"]').addClass('dot');
	$('.gameSquare[x="13"][y="14"]').addClass('dot');

	$('.gameSquare[x="14"][y="0"]').addClass('dot');
	$('.gameSquare[x="14"][y="1"]').addClass('dot');
	$('.gameSquare[x="14"][y="3"]').addClass('dot');
	$('.gameSquare[x="14"][y="4"]').addClass('dot');
	$('.gameSquare[x="14"][y="5"]').addClass('dot');
	$('.gameSquare[x="14"][y="9"]').addClass('dot');
	$('.gameSquare[x="14"][y="10"]').addClass('dot');
	$('.gameSquare[x="14"][y="11"]').addClass('dot');
	$('.gameSquare[x="14"][y="13"]').addClass('dot');
	$('.gameSquare[x="14"][y="14"]').addClass('dot');

	$('.gameSquare[x="15"][y="1"]').addClass('dot');
	$('.gameSquare[x="15"][y="3"]').addClass('dot');
	$('.gameSquare[x="15"][y="5"]').addClass('dot');
	$('.gameSquare[x="15"][y="6"]').addClass('dot');
	$('.gameSquare[x="15"][y="7"]').addClass('dot');
	$('.gameSquare[x="15"][y="8"]').addClass('dot');
	$('.gameSquare[x="15"][y="9"]').addClass('dot');
	$('.gameSquare[x="15"][y="11"]').addClass('dot');
	$('.gameSquare[x="15"][y="13"]').addClass('dot');

	$('.gameSquare[x="16"][y="1"]').addClass('dot');
	$('.gameSquare[x="16"][y="2"]').addClass('dot');
	$('.gameSquare[x="16"][y="3"]').addClass('dot');
	$('.gameSquare[x="16"][y="5"]').addClass('dot');
	$('.gameSquare[x="16"][y="9"]').addClass('dot');
	$('.gameSquare[x="16"][y="11"]').addClass('dot');
	$('.gameSquare[x="16"][y="12"]').addClass('dot');
	$('.gameSquare[x="16"][y="13"]').addClass('dot');

	$('.gameSquare[x="17"][y="3"]').addClass('dot');
	$('.gameSquare[x="17"][y="5"]').addClass('dot');
	$('.gameSquare[x="17"][y="6"]').addClass('dot');
	$('.gameSquare[x="17"][y="7"]').addClass('dot');
	$('.gameSquare[x="17"][y="8"]').addClass('dot');
	$('.gameSquare[x="17"][y="9"]').addClass('dot');
	$('.gameSquare[x="17"][y="10"]').addClass('dot');
	$('.gameSquare[x="17"][y="11"]').addClass('dot');

	$('.gameSquare[x="18"][y="1"]').addClass('dot');
	$('.gameSquare[x="18"][y="2"]').addClass('dot');
	$('.gameSquare[x="18"][y="3"]').addClass('dot');
	$('.gameSquare[x="18"][y="4"]').addClass('dot');
	$('.gameSquare[x="18"][y="5"]').addClass('dot');
	$('.gameSquare[x="18"][y="6"]').addClass('dot');
	$('.gameSquare[x="18"][y="10"]').addClass('dot');
	$('.gameSquare[x="18"][y="11"]').addClass('dot');
	$('.gameSquare[x="18"][y="12"]').addClass('dot');
	$('.gameSquare[x="18"][y="13"]').addClass('dot');
	$('.gameSquare[x="18"][y="14"]').addClass('dot');

	$('.gameSquare[x="19"][y="1"]').addClass('dot');
	$('.gameSquare[x="19"][y="2"]').addClass('dot');
	$('.gameSquare[x="19"][y="4"]').addClass('dot');
	$('.gameSquare[x="19"][y="6"]').addClass('dot');
	$('.gameSquare[x="19"][y="8"]').addClass('dot');
	$('.gameSquare[x="19"][y="10"]').addClass('dot');
	$('.gameSquare[x="19"][y="14"]').addClass('dot');

	$('.gameSquare[x="20"][y="0"]').addClass('dot');
	$('.gameSquare[x="20"][y="1"]').addClass('dot');
	$('.gameSquare[x="20"][y="2"]').addClass('dot');
	$('.gameSquare[x="20"][y="4"]').addClass('dot');
	$('.gameSquare[x="20"][y="6"]').addClass('dot');
	$('.gameSquare[x="20"][y="7"]').addClass('dot');
	$('.gameSquare[x="20"][y="8"]').addClass('dot');
	$('.gameSquare[x="20"][y="10"]').addClass('dot');
	$('.gameSquare[x="20"][y="14"]').addClass('dot');

	$('.gameSquare[x="21"][y="0"]').addClass('dot');
	$('.gameSquare[x="21"][y="2"]').addClass('dot');
	$('.gameSquare[x="21"][y="4"]').addClass('dot');
	$('.gameSquare[x="21"][y="10"]').addClass('dot');
	$('.gameSquare[x="21"][y="14"]').addClass('dot');

	$('.gameSquare[x="22"][y="0"]').addClass('dot');
	$('.gameSquare[x="22"][y="2"]').addClass('dot');
	$('.gameSquare[x="22"][y="4"]').addClass('dot');
	$('.gameSquare[x="22"][y="5"]').addClass('dot');
	$('.gameSquare[x="22"][y="6"]').addClass('dot');
	$('.gameSquare[x="22"][y="7"]').addClass('dot');
	$('.gameSquare[x="22"][y="8"]').addClass('dot');
	$('.gameSquare[x="22"][y="9"]').addClass('dot');
	$('.gameSquare[x="22"][y="10"]').addClass('dot');
	$('.gameSquare[x="22"][y="14"]').addClass('dot');

	$('.gameSquare[x="23"][y="2"]').addClass('dot');
	$('.gameSquare[x="23"][y="3"]').addClass('dot');
	$('.gameSquare[x="23"][y="4"]').addClass('dot');
	$('.gameSquare[x="23"][y="5"]').addClass('dot');
	$('.gameSquare[x="23"][y="10"]').addClass('dot');
	$('.gameSquare[x="23"][y="11"]').addClass('dot');
	$('.gameSquare[x="23"][y="13"]').addClass('dot');
	$('.gameSquare[x="23"][y="14"]').addClass('dot');

	$('.gameSquare[x="24"][y="0"]').addClass('dot');
	$('.gameSquare[x="24"][y="1"]').addClass('dot');
	$('.gameSquare[x="24"][y="2"]').addClass('dot');
	$('.gameSquare[x="24"][y="5"]').addClass('dot');
	$('.gameSquare[x="24"][y="7"]').addClass('dot');
	$('.gameSquare[x="24"][y="8"]').addClass('dot');
	$('.gameSquare[x="24"][y="9"]').addClass('dot');
	$('.gameSquare[x="24"][y="10"]').addClass('dot');
	$('.gameSquare[x="24"][y="12"]').addClass('dot');

	$('.gameSquare[x="25"][y="0"]').addClass('dot');
	$('.gameSquare[x="25"][y="2"]').addClass('dot');
	$('.gameSquare[x="25"][y="5"]').addClass('dot');
	$('.gameSquare[x="25"][y="6"]').addClass('dot');
	$('.gameSquare[x="25"][y="7"]').addClass('dot');
	$('.gameSquare[x="25"][y="10"]').addClass('dot');
	$('.gameSquare[x="25"][y="12"]').addClass('dot');
	$('.gameSquare[x="25"][y="13"]').addClass('dot');
	$('.gameSquare[x="25"][y="14"]').addClass('dot');
	}

const buildFruit = () => {
	$('.gameSquare[x="3"][y="5"]').addClass('fruit');
	$('.gameSquare[x="11"][y="11"]').addClass('fruit');
	$('.gameSquare[x="23"][y="12"]').addClass('fruit');
	}

// START

const start = () => {
	$('.gameSquare[x="0"][y="0"]').addClass('pacman');
	playGame();

	buildDots();
	buildFruit();
	buildMaze();
	addGhostOne();

	setInterval(() => {pacman.move()},
		300);
	}


