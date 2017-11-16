var date;

function loop() {
	var newDate = (new Date()).getTime();
	
	Globals.deltaTime = (newDate - date) / 1000;
	Globals.fps = 1 / Globals.deltaTime;
	
	date = newDate;

	// check for user input
	input();
	// run AI
	AI();
	// move
	move();
	// resolve collisions
	collisions();
	// draw graphics
	draw();
	// play sounds
	sounds();

	if (Globals.scores.xScore < Math.abs(Globals.square.xVelocity))
		Globals.scores.xScore = Math.abs(Globals.square.xVelocity);

	if (Globals.scores.yScore < Math.abs(Globals.square.yVelocity))
		Globals.scores.yScore = Math.abs(Globals.square.yVelocity);

	++Globals.cycleNum;
}