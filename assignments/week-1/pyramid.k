
function moveToEnd() {
	while (frontIsClear()) {
		move();
	}
}

function turnRight() {
	turnLeft();
	turnLeft();
	turnLeft();
}

function climbUp() {
	turnLeft();
	move();
	turnRight();
	move();
}

function climbDown() {
	turnRight();
	move();
	turnLeft();
	if (frontIsClear()) {
		move();
	}
}



function main() {
	moveToEnd();
	while (frontIsBlocked()) {
		climbUp();
	}
	putBeeper();
	move();
	while (rightIsClear()) {
		climbDown();
	}
	moveToEnd();
	
}
