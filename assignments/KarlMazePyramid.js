function turnRight() {
	turnLeft();
	turnLeft();
	turnLeft();
}


function turnAround() {
	turnleft();
	turnLeft();
}


function findBeepersInMaze() {
	while (noBeepersPresent()) {
		move();
		if (frontIsBlocked()) {
			turnRight();
		}
	}
}


function pickUpBeepers() {
	while (beepersPresent())
		pickBeeper();
}


function exitMaze() {
	turnAround();
	for(i=1; i<=11; i++){
		while (frontIsClear()) {
			move();
		}
		turnLeft();
	}
}


function repositionRight() {
		turnRight();
		move();
		turnRight();
		move();
}


function repositionLeft() {
		turnLeft();
		move();
}


function FindBeepersAndExitMaze() {
	move();
	turnLeft();
	findBeepersInMaze();
	pickUpBeepers();
	exitMaze();
}


function putBeepersPyramid(){
	move();
	for (i=1; i<=6; i++) {

		for (j=0; j<i; j++) {
			putBeeper();
            move();
		}			
					
		if ((i % 2) === 0) {
			repositionRight();
		} else {
			repositionLeft();
		}
	}
}
	

function goToEnd() {
	turnleft();
	while (frontIsClear()) {
		move();	
}


function main() {
	FindBeepersAndExitMaze();
	putBeepersPyramid;
	goToEnd();
}