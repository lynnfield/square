function input() {
	if (Globals.keys.up) {
		if (Globals.square.yVelocity < 0.0) 
			Globals.square.yVelocity = 0.0;
		Globals.square.yVelocity +=
			(Globals.acceleration * Globals.deltaTime);
	} else if (Globals.keys.down) {
		if (Globals.square.yVelocity > 0.0)
			Globals.square.yVelocity = 0.0;
		Globals.square.yVelocity -=
			(Globals.acceleration * Globals.deltaTime);
	} else {
		if (Math.abs(Globals.square.yVelocity) < Globals.velocityEpsilon)
			Globals.square.yVelocity = 0.0;
		else if (Globals.square.yVelocity > 0.0)
			Globals.square.yVelocity -=
				(Globals.acceleration * Globals.deltaTime);
		else if (Globals.square.yVelocity < 0.0)
			Globals.square.yVelocity +=
				(Globals.acceleration * Globals.deltaTime);
	}


	if (Globals.keys.left) {
		if (Globals.square.xVelocity > 0.0) 
			Globals.square.xVelocity = 0.0;
		Globals.square.xVelocity -=
			(Globals.acceleration * Globals.deltaTime);
	} else if (Globals.keys.right) {
		if (Globals.square.xVelocity < 0.0)
			Globals.square.xVelocity = 0.0;
		Globals.square.xVelocity +=
			(Globals.acceleration * Globals.deltaTime);
	} else {
		if (Math.abs(Globals.square.xVelocity) < Globals.velocityEpsilon)
			Globals.square.xVelocity = 0.0;
		else if (Globals.square.xVelocity > 0.0)
			Globals.square.xVelocity -=
				(Globals.acceleration * Globals.deltaTime);
		else if (Globals.square.xVelocity < 0.0)
			Globals.square.xVelocity +=
				(Globals.acceleration * Globals.deltaTime);
	}
}

function AI() {

}

function move() {
	Globals.square.y += Globals.square.yVelocity;
	Globals.square.x += Globals.square.xVelocity;
	Globals.square.rotation += Math.random() - 0.5;
}

function collisions() {
	if (Globals.square.y > Globals.height) {
		Globals.square.y = 2 * Globals.width - Globals.square.y;
		Globals.square.yVelocity = -Globals.square.yVelocity;
	} else if (Globals.square.y < 0) {
		Globals.square.y = -Globals.square.y;
		Globals.square.yVelocity = -Globals.square.yVelocity;
	}

	if (Globals.square.x > Globals.width) {
		Globals.square.x = 2 * Globals.width - Globals.square.x;
		Globals.square.xVelocity = -Globals.square.xVelocity;
	} else if (Globals.square.x < 0) {
		Globals.square.x = -Globals.square.x;
		Globals.square.xVelocity = -Globals.square.xVelocity;
	}
}

function draw() {
	if ((Globals.cycleNum % Globals.colorChangeFrequency) == 0) {
		Globals.background = getRandomColorNum();
		Globals.square.color = getRandomColorNum();
	}

	// clear canvas
	Globals.context.fillStyle = numToColor(Globals.background);
	Globals.context.fillRect(0, 0, Globals.width, Globals.height);

	// draw Globals.square
	Globals.context.save();
	Globals.context.translate(Globals.square.x, Globals.square.y);
	Globals.context.rotate(Globals.square.rotation);
	Globals.context.shadowBlur = Globals.square.shadowBlur;
	Globals.context.shadowColor = numToColor(Globals.square.color);
	Globals.context.fillStyle = numToColor(Globals.square.color);
	Globals.context.fillRect(-Globals.square.width / 2,
		-Globals.square.height / 2, Globals.square.width,
		Globals.square.height);
	Globals.context.restore();

	// draw bounds
	Globals.context.strokeStyle = "black";
	Globals.context.strokeRect(0, 0, Globals.width, Globals.height);

	// draw text
	// var textPosition = 0.0;
	// Globals.context.font = "10px Arial";
	// Globals.context.fillStyle = "#111111"
	// Globals.context.fillText("Globals.deltaTime: " + Globals.deltaTime, 5,
	// 	textPosition += 10);
	// Globals.context.fillText("Globals.fps: " + Globals.fps, 5,
	// 	textPosition += 10);
	// Globals.context.fillText("Globals.square.y: " + Globals.square.y, 5,
	// 	textPosition += 10);
	// Globals.context.fillText("Globals.square.yVelocity: " +
	// 	Globals.square.yVelocity, 5, textPosition += 10);
	// Globals.context.fillText("Globals.keys.up: " + Globals.keys.up, 5,
	// 	textPosition += 10);
	// Globals.context.fillText("Globals.keys.down: " + Globals.keys.down, 5,
	// 	textPosition += 10);
	// Globals.context.fillText("Globals.square.x: " + Globals.square.x, 5,
	// 	textPosition += 10);
	// Globals.context.fillText("Globals.square.xVelocity: " +
	// 	Globals.square.xVelocity, 5, textPosition += 10);
	// Globals.context.fillText("Globals.keys.right: " + Globals.keys.right, 5,
	// 	textPosition += 10);
	// Globals.context.fillText("Globals.keys.left: " + Globals.keys.left, 5,
	// 	textPosition += 10);
	// Globals.context.fillText("Globals.square.rotation: " +
	// 	Globals.square.rotation, 5, textPosition += 10);
	// Globals.context.fillText("Globals.cycleNum: " + Globals.cycleNum, 5,
	// 	textPosition += 10);
	// Globals.context.fillText("Globals.scores.xScore: " + Globals.scores.xScore, 5,
	// 	textPosition += 10);
	// Globals.context.fillText("Globals.scores.yScore: " + Globals.scores.yScore, 5,
	// 	textPosition += 10);
}

function sounds() {

}