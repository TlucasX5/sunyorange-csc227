function turnRight() {
	turnLeft();
	turnLeft();
	turnLeft();
}

function turnAround() {
	turnLeft();
	turnLeft();
}

function fillPothole() {
	turnRight();
	move();
	putBeeper();
	turnAround();
	move();
	turnRight();
}

function fillTwoHoles() {
	move();
	fillPothole();
	move();
	move();
	move();
	fillPothole();
	move();
}


function main() {
	fillTwoHoles();

}