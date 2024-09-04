function turnRight() {
	repeat(3) {
		turnLeft();
	}
}


function moveThree() {
	repeat(3) {
		move();	
	}
}

function moveTwo() {
	repeat(2) {
		move();
	}
}

function treeTops() {
	putBeeper();
	move();
	putBeeper();
	turnRight();
	move();
	putBeeper();
	turnRight();
	move();
	putBeeper();
	
}

function firstlastTree() {
	turnLeft();
	moveThree();
	treeTops();
	moveThree();
	turnLeft();
	moveTwo();
}



function main() {
	move();
	firstlastTree();
	turnLeft();
	moveTwo();
	treeTops();
	moveTwo();
	turnLeft();
	moveThree();
	turnLeft();
	moveThree();
	move();
	treeTops();
	moveThree();
	move();
	turnLeft();
	moveTwo();
	firstlastTree();		
}