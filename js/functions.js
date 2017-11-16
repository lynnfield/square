function getRandomColorNum() {
	return Math.random() * 0xFFFFFF << 0;
}

function numToColor(num) {
	return "#" + num.toString(16);
}

function turnOffShadows() {
	Globals.context.shadowColor = "#000000";
	Globals.context.shadowBlur = 0;
	Globals.context.shadowOffsetX = 0;
	Globals.context.shadowOffsetY = 0;
}

function setControlKey(e) {
	console.dir(this);
	var that = this;

	document.onkeypress = function(e) {
		Globals._defaults.keys[that.id + "Code"] = e.keyCode;
		Globals.keys[that.id + "Code"] = e.keyCode;
		that.innerText = that.text.slice(0, that.text.length - 1) +
			String.fromCharCode(e.keyCode).toUpperCase();
		document.onkeypress = null;
	}
}