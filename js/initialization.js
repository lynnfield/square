function init() {
	for (var field in Globals)
		switch(field) {
			case "_defaults": break;
			case "square": Globals[field] = new Square(); break;
			case "keys": break;
			case "scores": break;
			default: Globals[field] = Globals._defaults[field]; break;
		}

	$(document).keydown(function (e) {
		var code = e.keyCode;

		if (code == Globals.keys.upCode) {
			Globals.keys.up = true;
			Globals.keys.down = false;
		} else if (code == Globals.keys.downCode) {
			Globals.keys.down = true;
			Globals.keys.up = false;
		} else if (code == Globals.keys.leftCode) {
			Globals.keys.left = true;
			Globals.keys.right = false;
		} else if (code == Globals.keys.rightCode) {
			Globals.keys.right = true;
			Globals.keys.left = false;
		} else return;
	});

	$(document).keyup(function (e) {
		var code = e.keyCode;

		if (code == Globals.keys.upCode)
			Globals.keys.up = false;
		else if (code == Globals.keys.downCode)
			Globals.keys.down = false;
		else if (code == Globals.keys.leftCode)
			Globals.keys.left = false
		else if (code == Globals.keys.rightCode)
			Globals.keys.right = false;
		else return;
	});
}