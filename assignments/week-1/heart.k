function getBeepers() {
	while (beepersPresent()) {
		pickBeeper();
	}

}

function putBeepers() {
	while (beepersInBag()) {
		putBeeper();
		move();
	}
}

function turnRight() {
	turnLeft();
	turnLeft();
	turnLeft();
}

function turnAround(){
	turnLeft();
	turnLeft();
	while (frontIsClear()) {
		move();
	}
	turnRight();
	move();
	turnRight();
}

function repeatRows() {
	repeat(11) {
		while (frontIsClear()) {
			move();
			getBeepers();
			putBeepers();	
		}
		if (frontIsBlocked()) {
			turnAround();
		}
	}
}

function lastRow() {
	while (frontIsClear()) {
		move();
	}
}


function main() {
	repeatRows();
	lastRow();
}
