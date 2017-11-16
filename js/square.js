var loopsTimeEvent;

function prepareForStart() {
	Globals.blocked = true;
	window.clearInterval(loopsTimeEvent);
	init();
	loopsTimeEvent = setInterval(menuloop, 30);
	if (Globals.scores.xScore >= 1.0) {
		var element = document.createElement("il");
		element.textContent = Globals.scores.xScore.toPrecision(4).toString();
		document.getElementById("xPlayerScores").appendChild(element);
	}
	if (Globals.scores.yScore >= 1.0) {
		var element = document.createElement("il");
		element.textContent = Globals.scores.yScore.toPrecision(4).toString();
		document.getElementById("yPlayerScores").appendChild(element);
	}
}

function startGame() {
	if (Globals.blocked) {
		Globals.blocked = false;
		Globals.scores = new Scores();

		window.clearInterval(loopsTimeEvent);

		init();

		date = (new Date()).getTime();

		loopsTimeEvent = setInterval(loop, 15);

		setTimeout(prepareForStart, 60000);
	}
}

$(document).ready(function() {
	var canvas = $("#canvas");

	Globals._defaults.context = canvas[0].getContext("2d");
	Globals._defaults.height = $("#canvas").height();
	Globals._defaults.width = $("#canvas").width();

	canvas.click(startGame);

	$("#left.control").click(setControlKey);
	$("#right.control").click(setControlKey);
	$("#up.control").click(setControlKey);
	$("#down.control").click(setControlKey);

	prepareForStart();
});