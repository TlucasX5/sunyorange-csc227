function turnRight() {
	turnLeft();
	turnLeft();
	turnLeft();
}

function turnAround() {
	turnLeft();
	turnLeft();
}


function fillPotHole() {
	if (rightIsClear()) {
		turnRight();
		move();
		if (noBeepersPresent()) {
			putBeeper();
		}
		turnAround();
		move();
		turnRight();
	}
}

function fillAllPotHoles() {
	while (frontIsClear()) {
		fillPotHole();
		move();
	}
	fillPotHole();
}


function main() {
	move();
	fillAllPotHoles();
}