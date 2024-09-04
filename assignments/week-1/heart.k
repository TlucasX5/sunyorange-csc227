function old() {
	while (frontIsClear()) {
			
		if (beepersPresent()) {
			pickBeeper();
			while (beepersInBag()) {
				putBeeper();
				move();
			}
		}
		move();
		while (frontIsBlocked()) {
			turnAround();
		}
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



function main() {
	while (frontIsClear()) {
		move();
		if (beepersPresent()) {
			pickBeeper();
			while (beepersInBag()) {
				putBeeper();
				move();
			}
		}
		if (frontIsBlocked()) {
			turnAround();
		}
	}

}
