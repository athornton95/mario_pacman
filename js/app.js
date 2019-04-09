let seconds = 0;

let ghostOneInterval;
let ghostTwoInterval;
let ghostThreeInterval;
let ghostFourInterval;
let bowserInterval;
let bonesOneInterval;
let bonesTwoInterval;
let pacmanInterval;



//KeyCodes
$('body').keydown((e) => {
	if(e.keyCode === 37){
		pacman.direction ='left';
		// $('.pacman').removeClass('pacman');
		// $(`gameSquare[x="${pacman.x}"][y="${pacman.y}"]`).addClass('pacmanTwo');
	} else if(e.keyCode === 39){
		pacman.direction ='right';
		// $('.pacmanTwo').removeClass('pacmanTwo');
		// $(`gameSquare[x="${pacman.x}"][y="${pacman.y}"]`).addClass('pacman');
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
    if(seconds === 8){
    	addGhostOne();
    }
    if(seconds === 18){
    	addGhostTwo();
    }
    if(seconds === 28){
    	addGhostThree();
    }
    if(seconds === 38){
    	addGhostFour();
    }
 }

//GAME OVER
const gameOver = () => {

 		clearInterval(timePassing);
 		$(`.gameSquare[x="13"][y="8"]`).addClass('fire');
		clearInterval(bowserInterval);
		$('.pacman').removeClass('pacman');
		clearInterval(pacmanInterval);
		clearInterval(ghostOneInterval);
		clearInterval(ghostTwoInterval);
		clearInterval(ghostThreeInterval);
		clearInterval(ghostFourInterval);
		clearInterval(bonesOneInterval);
		clearInterval(bonesTwoInterval);
		if($('.gameSquare').hasClass('dot')){
			$('.gameSquare').removeClass('dot');
		}
		if($('.gameSquare').hasClass('fruit')){
			$('.gameSquare').removeClass('fruit');
		}
 		$('body').append('<div class = gameOver>GAME OVER</div>');
		}


//buttons 

$('#playGame').on('click', () => {
	console.log('this clicks');
	$('.title').empty();
	$('.buttons').empty();
	start();
})


//WINNER
const winner = () => {
	clearInterval(timePassing);
	clearInterval(ghostOneInterval);
	$('.ghost').removeClass('ghost');
	clearInterval(ghostTwoInterval);
	clearInterval(ghostThreeInterval);
	clearInterval(ghostFourInterval);
	clearInterval(bowserInterval);
	clearInterval(bonesOneInterval);
	$('.bones').removeClass('bones');
	clearInterval(bonesTwoInterval);
	$('.bowser').removeClass('bowser');
	$('.fire').removeClass('fire');

	//stop bowser, ghosts, & bones & clears their divs
	//clear divs below mario & peach
	//append text to divs : YOU WON
	//new button appends below...play again?
	//start game;
}


// PACMAN CHARACTER
const pacman = {
	x : 0,
	y : 0,
	direction : 'left',
	points: 124,
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
		} else if(this.direction === 'left' && this.x > 0 && $(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).hasClass('bones')){
			this.x = 0;
			this.y = 0;
			this.lives--;
			checkLives();
		} else if(this.direction === 'left' && this.x > 0 && $(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).hasClass('bowser')){
			this.lives = 0;
			checkLives();
		} else if(this.direction === 'left' && this.x > 0 && $(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).hasClass('fire')){
			this.lives--;
			checkLives();
		} else if(this.direction === 'left' && this.x > 0 && $(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).hasClass('peach')){
			winner();
		} else if(this.direction === 'left' & this.x === 0 && this.y === 10){
			if(Math.random() > .33){
				this.x = 25;
				this.y = 10;
			} else if(Math.random() > .69){
				this.x = 25;
				this.y = 2;
			} else {
				this.x = 0;
				this.y = 2;
			}
		} else if(this.direction === 'left' & this.x === 0 && this.y === 2){
			if(Math.random() > .33){
				this.x = 25;
				this.y = 10;
			} else if(Math.random() > .69) {
				this.x = 0;
				this.y = 10;
			} else {
				this.x = 25;
				this.y = 2;
			}
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
		} else if(this.direction === 'right' && this.x < 25 && $(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).hasClass('bones')){
			this.x = 0;
			this.y = 0;
			this.lives--;
			checkLives();
		} else if(this.direction === 'right' && this.x < 25 && $(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).hasClass('bowser')){
			this.lives = 0;
			checkLives();
		} else if(this.direction === 'right' && this.x < 25 && $(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).hasClass('fire')){
			this.lives--;
			checkLives();
		} else if(this.direction === 'right' & this.x === 25 && this.y === 10){
			if(Math.random() > .33){
				this.x = 0;
				this.y = 10;
			} else if(Math.random() > .69){
				this.x = 25;
				this.y = 2;
			} else {
				this.x = 0;
				this.y = 2;
			}
		} else if(this.direction === 'right' & this.x === 25 && this.y === 2){
			if(Math.random() > .33){
				this.x = 25;
				this.y = 10;
			} else if(Math.random() > .69){
				this.x = 0;
				this.y = 10;
			} else {
				this.x = 0;
				this.y = 2;
			}
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
		} else if(this.direction === 'up' && this.y < 14 && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('bones')){
			this.x = 0
			this.y = 0;
			this.lives--;
			checkLives();
		} else if(this.direction === 'up' && this.y < 14 && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('bowser')){
			this.lives = 0;
			checkLives();
		} else if(this.direction === 'up' && this.y < 14 && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('fire')){
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
		} else if(this.direction === 'down' && this.y > 0 && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('bones')){
			this.y = 0;
			this.x = 0;
			this.lives--;
			checkLives();
		} else if(this.direction === 'down' && this.y > 0 && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('bowser')){
			this.lives = 0;
			checkLives();
		} else if(this.direction === 'down' && this.y > 0 && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('fire')){
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
	if(pacman.lives <= 0){
		gameOver();
	}
}

const checkPoints = () => {
	$('.points').text(`${pacman.points}`);
	if(pacman.points === 100){
   		pacman.lives++;
   		checkLives();
   		console.log(pacman.points);
   	}
	if(pacman.points === 125){
   		addBowser();
   		addPrincess();
   		addFire();

   	}
	// if(`${pacman.points}` === 507){
	// 	$('body').append('<div class = winner>YOU WON</div>');
	// }
}


//GHOSTS
class Ghost {
	constructor(x, y, direction, maxX, minX, maxY, minY){
	this.x = x;
	this.y = y;
	this.maxX = maxX;
	this.minX = minX;
	this.maxY = maxY;
	this.minY = minY;
	this.direction = direction;
	// this.maxX = maxX;
	// this.maxY = maxY;
	}
	move() {
		$(`.gameSquare[x="${this.x}"][y="${this.y}"]`).removeClass('ghost');


		// UP
		if(this.direction === 'ghostUp' && this.y < this.maxY && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('wall')){	
			this.changeDirection();
		} else if(this.direction === 'ghostUp' && this.y < this.maxY && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('ghost')){	
			this.changeDirection();
		} else if(this.direction === 'ghostUp' && this.y === this.maxY) {	
			this.changeDirection();
		} else if(this.direction === 'ghostUp' && this.y < this.maxY && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('pacman')){
			$(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).removeClass('pacman');
			this.y++;
			pacman.lives -= 1;
			checkLives();
			pacman.x = 0;
			pacman.y = 0;
		} else if(this.direction === 'ghostUp' && this.y < this.maxY){
			this.y++;



		// DOWN
		} else if(this.direction === 'ghostDown' && this.y > this.minY && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('wall')){	
			this.changeDirection();
		} else if(this.direction === 'ghostDown' && this.y > this.minY && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('ghost')){	
			this.changeDirection();
		} else if(this.direction === 'ghostDown' && this.y === this.minY){	
			this.changeDirection();
		} else if(this.direction === 'ghostDown' && this.y > this.minY && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('pacman')){
			$(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).removeClass('pacman');
			this.y--;
			pacman.lives -= 1;
			checkLives();
			pacman.x = 0;
			pacman.y = 0;
		} else if(this.direction === 'ghostDown' && this.y > this.minY){
			this.y--;



		// LEFT
		} else if(this.direction === 'ghostLeft' && this.x > this.minX && $(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).hasClass('wall')){	
			this.changeDirection();
		} else if(this.direction === 'ghostLeft' && this.x > this.minX && $(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).hasClass('ghost')){	
			this.changeDirection();
		} else if(this.direction === 'ghostLeft' && this.x === this.minX){	
			this.changeDirection();
			console.log('ghost hit a wall');
		} else if(this.direction === 'ghostLeft' && this.x > this.minX && $(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).hasClass('pacman')){
			$(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).removeClass('pacman');
			this.x--;
			pacman.lives -= 1;
			checkLives();
			pacman.x = 0;
			pacman.y = 0;
		} else if(this.direction === 'ghostLeft' && this.x > this.minX){
			this.x--;



		// RIGHT
		} else if(this.direction === 'ghostRight' && this.x < this.maxX && $(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).hasClass('wall')){	
			this.changeDirection();
		} else if(this.direction === 'ghostRight' && this.x < this.maxX && $(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).hasClass('ghost')){	
			this.changeDirection();
		} else if(this.direction === 'ghostRight' && this.x === this.maxX){	
			this.changeDirection();
		} else if(this.direction === 'ghostRight' && this.x < this.maxX && $(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).hasClass('pacman')){
			$(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).removeClass('pacman');
			this.x++;
			pacman.lives -= 1;
			checkLives();
			pacman.x = 0;
			pacman.y = 0;
		} else if(this.direction === 'ghostRight' && this.x < this.maxX){
			this.x++;

		}
		$(`.gameSquare[x="${this.x}"][y="${this.y}"]`).addClass('ghost');
	}
	changeDirection() {
		// $('.ghost').removeClass('ghost');
		if(this.direction === 'ghostUp' && this.y < this.maxY && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('wall')){
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
		} else if(this.direction === 'ghostUp' && this.y < this.maxY && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('ghost')){
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
		} else if(this.direction === 'ghostUp' && this.y === this.maxY){
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

		} else if(this.direction === 'ghostDown' && this.y > this.minY && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('wall')){
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
		} else if(this.direction === 'ghostDown' && this.y > this.minY && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('ghost')){
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
		} else if(this.direction === 'ghostDown' && this.y === this.minY){
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
			
		} else if(this.direction === 'ghostLeft' && this.x > this.minX && $(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).hasClass('wall')){
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
		} else if(this.direction === 'ghostLeft' && this.x > this.minX && $(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).hasClass('ghost')){
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
		} else if(this.direction === 'ghostLeft' && this.x === this.minX){
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
		} else if(this.direction === 'ghostRight' && this.x < this.maxX && $(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).hasClass('wall')){
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
		} else if(this.direction === 'ghostRight' && this.x < this.maxX && $(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).hasClass('ghost')){
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
		} else if(this.direction === 'ghostRight' && this.x === this.maxX){
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
	const ghostOne = new Ghost(0, 14, "ghostDown", 15, 0, 14, 6);
	ghostOneInterval = setInterval(() => {ghostOne.move()},
	200);
	}

const addGhostTwo = () => {
	// $('.gameSquare[x="12"][y="7"]').addClass('ghost');
    const ghostTwo = new Ghost (25, 14, "ghostUp", 25, 10, 14, 6);
    ghostTwoInterval = setInterval(() => {ghostTwo.move()},
	300);
	}

const addGhostThree = () => {
	const ghostThree = new Ghost (0, 0, "ghostRight", 15, 0, 8, 0);
    ghostThreeInterval = setInterval(() => {ghostThree.move()},
	250);
	}

const addGhostFour = () => {
	const ghostFour = new Ghost (25, 0, "ghostLeft", 25, 10, 8, 0);
	ghostFourInterval = setInterval(() => {ghostFour.move()},
	150);
	}

const addBowser = () => {
	const bowser = new Bowser (13, 7, 18, 7, 11, 3, "ghostUp");
	bowserInterval = setInterval(() => {bowser.move()},
	160);
}

//PRINCESS PEACH
const addPrincess = () => {
	$(`.gameSquare[x="12"][y="7"]`).addClass('peach');
	console.log('peach has been added');
}

//BOWSER 
const addFire = () => {
	$(`.gameSquare[x="12"][y="8"]`).addClass('fire');
	console.log('fire has been added');
}

class Bowser {
	constructor(x, y, maxX, minX, maxY, minY, direction) {
		this.x = x;
		this.y = y;
		this.maxX = maxX;
		this.minX = minX;
		this.maxY = maxY;
		this.minY = minY;
		this.direction = 'ghostDown';
	}
		move(){
			$(`.gameSquare[x="${this.x}"][y="${this.y}"]`).removeClass('bowser');


		// UP
		if(this.direction === 'ghostUp' && this.y < this.maxY && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('wall')){	
			this.changeDirection();
		} else if(this.direction === 'ghostUp' && this.y < this.maxY && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('ghost')){	
			this.changeDirection();
		} else if(this.direction === 'ghostUp' && this.y === this.maxY){	
			this.changeDirection();
		} else if(this.direction === 'ghostUp' && this.y < this.maxY && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('pacman')){
			$(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).removeClass('pacman');
			this.y++;
			$('.pacman').removeClass('pacman');
			gameOver();
		} else if(this.direction === 'ghostUp' && this.y < this.maxY){
			this.y++;



		// DOWN
		} else if(this.direction === 'ghostDown' && this.y > this.minY && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('wall')){	
			this.changeDirection();
		} else if(this.direction === 'ghostDown' && this.y > this.minY && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('ghost')){	
			this.changeDirection();
		} else if(this.direction === 'ghostDown' && this.y === this.minY){	
			this.changeDirection();
		} else if(this.direction === 'ghostDown' && this.y > this.minY && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('pacman')){
			$(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).removeClass('pacman');
			this.y--;
			$('.pacman').removeClass('pacman');
			gameOver();
		} else if(this.direction === 'ghostDown' && this.y > this.minY){
			this.y--;



		// LEFT
		} else if(this.direction === 'ghostLeft' && this.x > this.minX && $(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).hasClass('wall')){	
			this.changeDirection();
		} else if(this.direction === 'ghostLeft' && this.x > this.minX && $(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).hasClass('ghost')){	
			this.changeDirection();
		} else if(this.direction === 'ghostLeft' && this.x === this.minX){	
			this.changeDirection();
			console.log('ghost hit a wall');
		} else if(this.direction === 'ghostLeft' && this.x > this.minX && $(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).hasClass('pacman')){
			$(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).removeClass('pacman');
			this.x--;
			$('.pacman').removeClass('pacman');
			gameOver();
		} else if(this.direction === 'ghostLeft' && this.x > this.minX){
			this.x--;



		// RIGHT
		} else if(this.direction === 'ghostRight' && this.x < this.maxX && $(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).hasClass('wall')){	
			this.changeDirection();
		} else if(this.direction === 'ghostRight' && this.x < this.maxX && $(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).hasClass('ghost')){	
			this.changeDirection();
		} else if(this.direction === 'ghostRight' && this.x === this.maxX){	
			this.changeDirection();
		} else if(this.direction === 'ghostRight' && this.x < this.maxX && $(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).hasClass('pacman')){
			$(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).removeClass('pacman');
			this.x++;
			$('.pacman').removeClass('pacman');
			gameOver();
		} else if(this.direction === 'ghostRight' && this.x < this.maxX){
			this.x++;

		}
		$(`.gameSquare[x="${this.x}"][y="${this.y}"]`).addClass('bowser');

		};
		changeDirection() {
		// $('.ghost').removeClass('ghost');
		if(this.direction === 'ghostUp' && this.y < this.maxY && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('wall')){
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
		} else if(this.direction === 'ghostUp' && this.y < this.maxY && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('ghost')){
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
		} else if(this.direction === 'ghostUp' && this.y === this.maxY){
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

		} else if(this.direction === 'ghostDown' && this.y > this.minY && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('wall')){
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
		} else if(this.direction === 'ghostDown' && this.y > this.minY && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('ghost')){
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
		} else if(this.direction === 'ghostDown' && this.y === this.minY){
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
			
		} else if(this.direction === 'ghostLeft' && this.x > this.minX && $(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).hasClass('wall')){
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
		} else if(this.direction === 'ghostLeft' && this.x > this.minX && $(`.gameSquare[x="${this.x - 1}"][y="${this.y}"]`).hasClass('ghost')){
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
		} else if(this.direction === 'ghostLeft' && this.x === this.minX){
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
		} else if(this.direction === 'ghostRight' && this.x < this.maxX && $(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).hasClass('wall')){
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
		} else if(this.direction === 'ghostRight' && this.x < this.maxX && $(`.gameSquare[x="${this.x + 1}"][y="${this.y}"]`).hasClass('ghost')){
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
		} else if(this.direction === 'ghostRight' && this.x === this.maxX){
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

//BONES

class Bones {
	constructor(x, y, maxY, minY, direction){
		this.x = x;
		this.y = y;
		// this.maxX = maxX;
		// this.minX = minX;
		this.maxY = maxY;
		this.minY = minY;
		this.direction = direction;
	}
	move(){
		$(`.gameSquare[x="${this.x}"][y="${this.y}"]`).removeClass('bones');


		// UP
		if(this.direction === 'ghostUp' && this.y < this.maxY && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('wall')){	
			this.changeDirection();
		} else if(this.direction === 'ghostUp' && this.y < this.maxY && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('ghost')){	
			this.changeDirection();
		} else if(this.direction === 'ghostUp' && this.y === this.maxY){	
			this.changeDirection();
		} else if(this.direction === 'ghostUp' && this.y < this.maxY && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('pacman')){
			$(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).removeClass('pacman');
			this.y++;
			pacman.lives --;
			checkLives();
			pacman.x = 0;
			pacman.y = 0;
		} else if(this.direction === 'ghostUp' && this.y < this.maxY){
			this.y++;



		// DOWN
		} else if(this.direction === 'ghostDown' && this.y > this.minY && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('wall')){	
			this.changeDirection();
		} else if(this.direction === 'ghostDown' && this.y > this.minY && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('ghost')){	
			this.changeDirection();
		} else if(this.direction === 'ghostDown' && this.y === this.minY){	
			this.changeDirection();
		} else if(this.direction === 'ghostDown' && this.y > this.minY && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('pacman')){
			$(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).removeClass('pacman');
			this.y--;
			pacman.lives--;
			checkLives();
			pacman.x = 0;
			pacman.y = 0;
		} else if(this.direction === 'ghostDown' && this.y > this.minY){
			this.y--;
		}
	$(`.gameSquare[x="${this.x}"][y="${this.y}"]`).addClass('bones');
	}
	changeDirection() {
		// IS GOING UP, NOW GO DOWN
		if(this.direction === 'ghostUp' && this.y < this.maxY && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('wall')){
				this.direction = 'ghostDown';
		} else if(this.direction === 'ghostUp' && this.y < this.maxY && $(`.gameSquare[x="${this.x}"][y="${this.y + 1}"]`).hasClass('ghost')){
				this.direction = 'ghostDown';
		} else if(this.direction === 'ghostUp' && this.y === this.maxY){
				this.direction = 'ghostDown';

		// IS GOING DOWN, NOW GO UP
		} else if(this.direction === 'ghostDown' && this.y > this.minY && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('wall')){
				this.direction = 'ghostUp';
		} else if(this.direction === 'ghostDown' && this.y > this.minY && $(`.gameSquare[x="${this.x}"][y="${this.y - 1}"]`).hasClass('ghost')){
				this.direction = 'ghostUp';
		} else if(this.direction === 'ghostDown' && this.y === this.minY){
				this.direction = 'ghostUp';
		
		}
	}
}

const addBones = () => {
	const bonesOne = new Bones (8, 5, 11, 5, "ghostUp");
	const bonesTwo = new Bones (17, 11, 11, 5, 'ghostDown');
	bonesOneInterval = setInterval(() => {bonesOne.move()},
	300);
	bonesTwoInterval = setInterval(() => {bonesTwo.move()},
	300);
	console.log('bones made');
}
// GENERATE GAME BOARD

const buildBoard = () => {
	$('body').append('<div class="gameBoard"></div>');
	for(let y = 15; y > -2; y--){
	$('.gameBoard').append(`<div class="row" id = "row_${y}"></div>`);
	for(let x = -1; x < 27; x++){
		$(`#row_${y}`).append(`<div class = "gameSquare" y = "${y}" x = "${x}"></div>`);
	}
	}
	}



// BUILD GAME

const buildMaze = () => {
	$('.gameSquare[x="-1"][y="-1"]').addClass('wall');
	$('.gameSquare[x="-1"][y="0"]').addClass('wall');
	$('.gameSquare[x="-1"][y="1"]').addClass('wall');
	$('.gameSquare[x="-1"][y="2"]').addClass('wall');
	$('.gameSquare[x="-1"][y="3"]').addClass('wall');
	$('.gameSquare[x="-1"][y="4"]').addClass('wall');
	$('.gameSquare[x="-1"][y="5"]').addClass('wall');
	$('.gameSquare[x="-1"][y="6"]').addClass('wall');
	$('.gameSquare[x="-1"][y="7"]').addClass('wall');
	$('.gameSquare[x="-1"][y="8"]').addClass('wall');
	$('.gameSquare[x="-1"][y="9"]').addClass('wall');
	$('.gameSquare[x="-1"][y="10"]').addClass('wall');
	$('.gameSquare[x="-1"][y="11"]').addClass('wall');
	$('.gameSquare[x="-1"][y="12"]').addClass('wall');
	$('.gameSquare[x="-1"][y="13"]').addClass('wall');
	$('.gameSquare[x="-1"][y="14"]').addClass('wall');
	$('.gameSquare[x="-1"][y="15"]').addClass('wall');


	$('.gameSquare[x="0"][y="1"]').addClass('wall');
	$('.gameSquare[x="0"][y="3"]').addClass('wall');
	$('.gameSquare[x="0"][y="4"]').addClass('wall');
	$('.gameSquare[x="0"][y="8"]').addClass('wall');
	$('.gameSquare[x="0"][y="9"]').addClass('wall');
	$('.gameSquare[x="0"][y="11"]').addClass('wall');
	$('.gameSquare[x="0"][y="15"]').addClass('wall');

	$('.gameSquare[x="1"][y="-1"]').addClass('wall');
	$('.gameSquare[x="1"][y="3"]').addClass('wall');
	$('.gameSquare[x="1"][y="4"]').addClass('wall');
	$('.gameSquare[x="1"][y="6"]').addClass('wall');
	$('.gameSquare[x="1"][y="11"]').addClass('wall');
	$('.gameSquare[x="1"][y="13"]').addClass('wall');
	$('.gameSquare[x="1"][y="14"]').addClass('wall');
	$('.gameSquare[x="1"][y="15"]').addClass('wall');

	$('.gameSquare[x="2"][y="-1"]').addClass('wall');
	$('.gameSquare[x="2"][y="0"]').addClass('wall');
	$('.gameSquare[x="2"][y="1"]').addClass('wall');
	$('.gameSquare[x="2"][y="6"]').addClass('wall');
	$('.gameSquare[x="2"][y="7"]').addClass('wall');
	$('.gameSquare[x="2"][y="8"]').addClass('wall');
	$('.gameSquare[x="2"][y="9"]').addClass('wall');
	$('.gameSquare[x="2"][y="15"]').addClass('wall');

	$('.gameSquare[x="3"][y="-1"]').addClass('wall');
	$('.gameSquare[x="3"][y="1"]').addClass('wall');
	$('.gameSquare[x="3"][y="3"]').addClass('wall');
	$('.gameSquare[x="3"][y="11"]').addClass('wall');
	$('.gameSquare[x="3"][y="12"]').addClass('wall');
	$('.gameSquare[x="3"][y="13"]').addClass('wall');
	$('.gameSquare[x="3"][y="15"]').addClass('wall');

	$('.gameSquare[x="4"][y="-1"]').addClass('wall');
	$('.gameSquare[x="4"][y="1"]').addClass('wall');
	$('.gameSquare[x="4"][y="3"]').addClass('wall');
	$('.gameSquare[x="4"][y="5"]').addClass('wall');
	$('.gameSquare[x="4"][y="6"]').addClass('wall');
	$('.gameSquare[x="4"][y="7"]').addClass('wall');
	$('.gameSquare[x="4"][y="8"]').addClass('wall');
	$('.gameSquare[x="4"][y="9"]').addClass('wall');
	$('.gameSquare[x="4"][y="11"]').addClass('wall');
	$('.gameSquare[x="4"][y="13"]').addClass('wall');
	$('.gameSquare[x="4"][y="15"]').addClass('wall');

	$('.gameSquare[x="5"][y="-1"]').addClass('wall');
	$('.gameSquare[x="5"][y="3"]').addClass('wall');
	$('.gameSquare[x="5"][y="5"]').addClass('wall');
	$('.gameSquare[x="5"][y="9"]').addClass('wall');
	$('.gameSquare[x="5"][y="11"]').addClass('wall');
	$('.gameSquare[x="5"][y="13"]').addClass('wall');
	$('.gameSquare[x="5"][y="15"]').addClass('wall');

	$('.gameSquare[x="6"][y="-1"]').addClass('wall');
	$('.gameSquare[x="6"][y="0"]').addClass('wall');
	$('.gameSquare[x="6"][y="3"]').addClass('wall');
	$('.gameSquare[x="6"][y="5"]').addClass('wall');
	$('.gameSquare[x="6"][y="7"]').addClass('wall');
	$('.gameSquare[x="6"][y="9"]').addClass('wall');
	$('.gameSquare[x="6"][y="11"]').addClass('wall');
	$('.gameSquare[x="6"][y="12"]').addClass('wall');
	$('.gameSquare[x="6"][y="13"]').addClass('wall');
	$('.gameSquare[x="6"][y="15"]').addClass('wall');

	$('.gameSquare[x="7"][y="-1"]').addClass('wall');
	$('.gameSquare[x="7"][y="0"]').addClass('wall');
	$('.gameSquare[x="7"][y="7"]').addClass('wall');
	$('.gameSquare[x="7"][y="8"]').addClass('wall');
	$('.gameSquare[x="7"][y="9"]').addClass('wall');
	$('.gameSquare[x="7"][y="15"]').addClass('wall');

	$('.gameSquare[x="8"][y="-1"]').addClass('wall');
	$('.gameSquare[x="8"][y="0"]').addClass('wall');
	$('.gameSquare[x="8"][y="1"]').addClass('wall');
	$('.gameSquare[x="8"][y="2"]').addClass('wall');
	$('.gameSquare[x="8"][y="4"]').addClass('wall');
	$('.gameSquare[x="8"][y="12"]').addClass('wall');
	$('.gameSquare[x="8"][y="13"]').addClass('wall');
	$('.gameSquare[x="8"][y="14"]').addClass('wall');
	$('.gameSquare[x="8"][y="15"]').addClass('wall');

	$('.gameSquare[x="9"][y="-1"]').addClass('wall');
	$('.gameSquare[x="9"][y="0"]').addClass('wall');
	$('.gameSquare[x="9"][y="4"]').addClass('wall');
	$('.gameSquare[x="9"][y="6"]').addClass('wall');
	$('.gameSquare[x="9"][y="7"]').addClass('wall');
	$('.gameSquare[x="9"][y="8"]').addClass('wall');
	$('.gameSquare[x="9"][y="10"]').addClass('wall');
	$('.gameSquare[x="9"][y="14"]').addClass('wall');
	$('.gameSquare[x="9"][y="15"]').addClass('wall');

	$('.gameSquare[x="10"][y="-1"]').addClass('wall');
	$('.gameSquare[x="10"][y="0"]').addClass('wall');
	$('.gameSquare[x="10"][y="2"]').addClass('wall');
	$('.gameSquare[x="10"][y="4"]').addClass('wall');
	$('.gameSquare[x="10"][y="10"]').addClass('wall');
	$('.gameSquare[x="10"][y="12"]').addClass('wall');
	$('.gameSquare[x="10"][y="14"]').addClass('wall');
	$('.gameSquare[x="10"][y="15"]').addClass('wall');

	$('.gameSquare[x="11"][y="-1"]').addClass('wall');
	$('.gameSquare[x="11"][y="2"]').addClass('wall');
	$('.gameSquare[x="11"][y="6"]').addClass('wall');
	$('.gameSquare[x="11"][y="7"]').addClass('wall');
	$('.gameSquare[x="11"][y="8"]').addClass('wall');
	$('.gameSquare[x="11"][y="12"]').addClass('wall');
	$('.gameSquare[x="11"][y="15"]').addClass('wall');

	$('.gameSquare[x="12"][y="-1"]').addClass('wall');
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
	$('.gameSquare[x="12"][y="15"]').addClass('wall');

	$('.gameSquare[x="13"][y="-1"]').addClass('wall');
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
	$('.gameSquare[x="13"][y="15"]').addClass('wall');

	$('.gameSquare[x="14"][y="-1"]').addClass('wall');
	$('.gameSquare[x="14"][y="2"]').addClass('wall');
	$('.gameSquare[x="14"][y="6"]').addClass('wall');
	$('.gameSquare[x="14"][y="7"]').addClass('wall');
	$('.gameSquare[x="14"][y="8"]').addClass('wall');
	$('.gameSquare[x="14"][y="12"]').addClass('wall');
	$('.gameSquare[x="14"][y="15"]').addClass('wall');

	$('.gameSquare[x="15"][y="-1"]').addClass('wall');
	$('.gameSquare[x="15"][y="0"]').addClass('wall');
	$('.gameSquare[x="15"][y="2"]').addClass('wall');
	$('.gameSquare[x="15"][y="4"]').addClass('wall');
	$('.gameSquare[x="15"][y="10"]').addClass('wall');
	$('.gameSquare[x="15"][y="12"]').addClass('wall');
	$('.gameSquare[x="15"][y="14"]').addClass('wall');
	$('.gameSquare[x="15"][y="15"]').addClass('wall');

	$('.gameSquare[x="16"][y="-1"]').addClass('wall');
	$('.gameSquare[x="16"][y="0"]').addClass('wall');
	$('.gameSquare[x="16"][y="4"]').addClass('wall');
	$('.gameSquare[x="16"][y="6"]').addClass('wall');
	$('.gameSquare[x="16"][y="7"]').addClass('wall');
	$('.gameSquare[x="16"][y="8"]').addClass('wall');
	$('.gameSquare[x="16"][y="10"]').addClass('wall');
	$('.gameSquare[x="16"][y="14"]').addClass('wall');
	$('.gameSquare[x="16"][y="15"]').addClass('wall');

	$('.gameSquare[x="17"][y="-1"]').addClass('wall');
	$('.gameSquare[x="17"][y="0"]').addClass('wall');
	$('.gameSquare[x="17"][y="1"]').addClass('wall');
	$('.gameSquare[x="17"][y="2"]').addClass('wall');
	$('.gameSquare[x="17"][y="4"]').addClass('wall');
	$('.gameSquare[x="17"][y="12"]').addClass('wall');
	$('.gameSquare[x="17"][y="13"]').addClass('wall');
	$('.gameSquare[x="17"][y="14"]').addClass('wall');
	$('.gameSquare[x="17"][y="15"]').addClass('wall');

	$('.gameSquare[x="18"][y="-1"]').addClass('wall');
	$('.gameSquare[x="18"][y="0"]').addClass('wall');
	$('.gameSquare[x="18"][y="7"]').addClass('wall');
	$('.gameSquare[x="18"][y="8"]').addClass('wall');
	$('.gameSquare[x="18"][y="9"]').addClass('wall');
	$('.gameSquare[x="18"][y="15"]').addClass('wall');

	$('.gameSquare[x="19"][y="-1"]').addClass('wall');
	$('.gameSquare[x="19"][y="0"]').addClass('wall');
	$('.gameSquare[x="19"][y="3"]').addClass('wall');
	$('.gameSquare[x="19"][y="5"]').addClass('wall');
	$('.gameSquare[x="19"][y="7"]').addClass('wall');
	$('.gameSquare[x="19"][y="9"]').addClass('wall');
	$('.gameSquare[x="19"][y="11"]').addClass('wall');
	$('.gameSquare[x="19"][y="12"]').addClass('wall');
	$('.gameSquare[x="19"][y="13"]').addClass('wall');
	$('.gameSquare[x="19"][y="15"]').addClass('wall');

	$('.gameSquare[x="20"][y="-1"]').addClass('wall');
	$('.gameSquare[x="20"][y="3"]').addClass('wall');
	$('.gameSquare[x="20"][y="5"]').addClass('wall');
	$('.gameSquare[x="20"][y="9"]').addClass('wall');
	$('.gameSquare[x="20"][y="11"]').addClass('wall');
	$('.gameSquare[x="20"][y="13"]').addClass('wall');
	$('.gameSquare[x="20"][y="15"]').addClass('wall');

	$('.gameSquare[x="21"][y="-1"]').addClass('wall');
	$('.gameSquare[x="21"][y="1"]').addClass('wall');
	$('.gameSquare[x="21"][y="3"]').addClass('wall');
	$('.gameSquare[x="21"][y="5"]').addClass('wall');
	$('.gameSquare[x="21"][y="6"]').addClass('wall');
	$('.gameSquare[x="21"][y="7"]').addClass('wall');
	$('.gameSquare[x="21"][y="8"]').addClass('wall');
	$('.gameSquare[x="21"][y="9"]').addClass('wall');
	$('.gameSquare[x="21"][y="11"]').addClass('wall');
	$('.gameSquare[x="21"][y="13"]').addClass('wall');
	$('.gameSquare[x="21"][y="15"]').addClass('wall');

	$('.gameSquare[x="22"][y="-1"]').addClass('wall');
	$('.gameSquare[x="22"][y="1"]').addClass('wall');
	$('.gameSquare[x="22"][y="3"]').addClass('wall');
	$('.gameSquare[x="22"][y="11"]').addClass('wall');
	$('.gameSquare[x="22"][y="12"]').addClass('wall');
	$('.gameSquare[x="22"][y="13"]').addClass('wall');
	$('.gameSquare[x="22"][y="15"]').addClass('wall');

	$('.gameSquare[x="23"][y="-1"]').addClass('wall');
	$('.gameSquare[x="23"][y="0"]').addClass('wall');
	$('.gameSquare[x="23"][y="1"]').addClass('wall');
	$('.gameSquare[x="23"][y="6"]').addClass('wall');
	$('.gameSquare[x="23"][y="7"]').addClass('wall');
	$('.gameSquare[x="23"][y="8"]').addClass('wall');
	$('.gameSquare[x="23"][y="9"]').addClass('wall');
	$('.gameSquare[x="23"][y="15"]').addClass('wall');

	$('.gameSquare[x="24"][y="-1"]').addClass('wall');
	$('.gameSquare[x="24"][y="3"]').addClass('wall');
	$('.gameSquare[x="24"][y="4"]').addClass('wall');
	$('.gameSquare[x="24"][y="6"]').addClass('wall');
	$('.gameSquare[x="24"][y="11"]').addClass('wall');
	$('.gameSquare[x="24"][y="13"]').addClass('wall');
	$('.gameSquare[x="24"][y="14"]').addClass('wall');
	$('.gameSquare[x="24"][y="15"]').addClass('wall');

	$('.gameSquare[x="25"][y="-1"]').addClass('wall');
	$('.gameSquare[x="25"][y="1"]').addClass('wall');
	$('.gameSquare[x="25"][y="3"]').addClass('wall');
	$('.gameSquare[x="25"][y="4"]').addClass('wall');
	$('.gameSquare[x="25"][y="8"]').addClass('wall');
	$('.gameSquare[x="25"][y="9"]').addClass('wall');
	$('.gameSquare[x="25"][y="11"]').addClass('wall');
	$('.gameSquare[x="25"][y="15"]').addClass('wall');

	$('.gameSquare[x="26"][y="-1"]').addClass('wall');
	$('.gameSquare[x="26"][y="0"]').addClass('wall');
	$('.gameSquare[x="26"][y="1"]').addClass('wall');
	$('.gameSquare[x="26"][y="2"]').addClass('wall');
	$('.gameSquare[x="26"][y="3"]').addClass('wall');
	$('.gameSquare[x="26"][y="4"]').addClass('wall');
	$('.gameSquare[x="26"][y="5"]').addClass('wall');
	$('.gameSquare[x="26"][y="6"]').addClass('wall');
	$('.gameSquare[x="26"][y="7"]').addClass('wall');
	$('.gameSquare[x="26"][y="8"]').addClass('wall');
	$('.gameSquare[x="26"][y="9"]').addClass('wall');
	$('.gameSquare[x="26"][y="10"]').addClass('wall');
	$('.gameSquare[x="26"][y="11"]').addClass('wall');
	$('.gameSquare[x="26"][y="12"]').addClass('wall');
	$('.gameSquare[x="26"][y="13"]').addClass('wall');
	$('.gameSquare[x="26"][y="14"]').addClass('wall');
	$('.gameSquare[x="26"][y="15"]').addClass('wall');

	}

const buildWarp = () => {
	$('.gameSquare[x="0"][y="10"]').addClass('warpOne');
	$('.gameSquare[x="25"][y="10"]').addClass('warpTwo');
	$('.gameSquare[x="25"][y="2"]').addClass('warpTwo');
	$('.gameSquare[x="0"][y="2"]').addClass('warpOne');	
	$('.gameSquare[x="0"][y="-1"]').addClass('warpThree');		

}

const buildDots = () => {
	$('.gameSquare[x="0"][y="5"]').addClass('dot');
	$('.gameSquare[x="0"][y="6"]').addClass('dot');
	$('.gameSquare[x="0"][y="7"]').addClass('dot');
	// $('.gameSquare[x="0"][y="10"]').addClass('dot');
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
	// $('.gameSquare[x="8"][y="5"]').addClass('dot');
	// $('.gameSquare[x="8"][y="6"]').addClass('dot');
	// $('.gameSquare[x="8"][y="7"]').addClass('dot');
	// $('.gameSquare[x="8"][y="8"]').addClass('dot');
	// $('.gameSquare[x="8"][y="9"]').addClass('dot');
	// $('.gameSquare[x="8"][y="10"]').addClass('dot');
	// $('.gameSquare[x="8"][y="11"]').addClass('dot');

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
	// $('.gameSquare[x="17"][y="5"]').addClass('dot');
	// $('.gameSquare[x="17"][y="6"]').addClass('dot');
	// $('.gameSquare[x="17"][y="7"]').addClass('dot');
	// $('.gameSquare[x="17"][y="8"]').addClass('dot');
	// $('.gameSquare[x="17"][y="9"]').addClass('dot');
	// $('.gameSquare[x="17"][y="10"]').addClass('dot');
	// $('.gameSquare[x="17"][y="11"]').addClass('dot');

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
	// $('.gameSquare[x="25"][y="2"]').addClass('dot');
	$('.gameSquare[x="25"][y="5"]').addClass('dot');
	$('.gameSquare[x="25"][y="6"]').addClass('dot');
	$('.gameSquare[x="25"][y="7"]').addClass('dot');
	// $('.gameSquare[x="25"][y="10"]').addClass('dot');
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
	playGame();
	buildBoard();
	buildDots();
	buildWarp();
	buildFruit();
	buildMaze();
	$('.gameSquare[x="0"][y="0"]').addClass('pacman');
	addBones();
	//SCORE ELEMENTS
	$('body').append(`<div class = "stats">Coins: <span class = "points">${pacman.points}</span>  Lives:<span class = "lives">${pacman.lives}</span></div>`);

	pacmanInterval = setInterval(() => {pacman.move()},
		300);
}


