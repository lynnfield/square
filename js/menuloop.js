function menuloop() {
	if ((Globals.cycleNum % 69) == 0) {
		Globals.background = getRandomColorNum();
	}

	if ((Globals.cycleNum % 51) == 0) {
		Globals.square.color = getRandomColorNum();
	}

	// clear canvas
	Globals.context.fillStyle = numToColor(Globals.background);
	Globals.context.fillRect(0, 0, Globals.width, Globals.height);

	// draw Globals.square
	Globals.context.save();
	Globals.context.fillStyle = numToColor(Globals.square.color);
	Globals.context.translate(Globals.square.x, Globals.square.y);
	Globals.context.rotate(Globals.square.rotation += 0.01);
	Globals.context.shadowBlur = Globals.square.shadowBlur;
	Globals.context.shadowColor = numToColor(Globals.square.color);
	Globals.context.fillRect(-Globals.square.width / 2,
		-Globals.square.height / 2, Globals.square.width,
		Globals.square.height);
	Globals.context.restore();

	// draw bounds
	Globals.context.strokeStyle = "black";
	Globals.context.strokeRect(0, 0, Globals.width, Globals.height);

	// draw text
	Globals.context.font = "50px Arial";
	Globals.context.shadowBlur = 11;
	Globals.context.shadowColor = "#000000";
	Globals.context.fillStyle = "#336688";
	var nameWidth = Globals.context.measureText("Square").width;
	Globals.context.fillText("Square",  Globals.width / 2 - nameWidth / 2,
		Globals.height * 0.4);
	Globals.context.font = "25px Arial";
	var clicktoplayWidth = Globals.context.measureText("Click to play").width;
	Globals.context.fillText("Click to play", Globals.width / 2 -
		clicktoplayWidth / 2, Globals.height * 0.63);
	
	if (Globals.scores.xScore >= 1.0) {
		var playerXScoreWidth = Globals.context.measureText("Payer x: " +
			Globals.scores.xScore.toPrecision(Globals.precision)).width;
		Globals.context.fillText("Payer x: " +
			Globals.scores.xScore.toPrecision(Globals.precision),
			Globals.width * 0.25 - playerXScoreWidth / 2, Globals.height / 2);
	}

	if (Globals.scores.yScore >= 1.0) {
		var playerYScoreWidth = Globals.context.measureText("Payer y: " +
			Globals.scores.yScore.toPrecision(Globals.precision)).width;
		Globals.context.fillText("Payer y: " +
			Globals.scores.yScore.toPrecision(Globals.precision),
			Globals.width * 0.75 - playerYScoreWidth / 2, Globals.height / 2);
	}

	++ Globals.cycleNum;
}