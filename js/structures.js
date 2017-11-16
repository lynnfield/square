function Square() {
	var that = this;

	this.x = 250.0;
	this.xVelocity = 0.1;

	this.y = 250.0;
	this.yVelocity = 0.1;	
	
	this.rotation = 1.0;
	
	this.color = "#000000";
	this.shadowBlur = 40;

	this.width = 40.0;
	this.height = 40.0;

	this.fnDefault = function() {
		that.x = 250.0;
		that.xVelocity = 0.1;

		that.y = 250.0;
		that.yVelocity = 0.1;	
		
		that.rotation = 1.0;
		
		that.color = "#000000";
		that.shadowBlur = 40;

		that.width = 40.0;
		that.height = 40.0;
	}
}

function Keys() {
	var that = this;

	this.up = false;
	this.down = false;
	this.left = false;
	this.right = false;

	this.upCode = 77;
	this.downCode = 75;
	this.leftCode = 65;
	this.rightCode = 83;

	this.fnDefault = function() {
		that.up = false;
		that.down = false;
		that.left = false;
		that.right = false;

		that.upCode = 77;
		that.downCode = 75;
		that.leftCode = 65;
		that.rightCode = 83;
	}
}

function Scores() {
	var that = this;

	this.yScore = 0.0;
	this.xScore = 0.0;

	this.fnDefault = function() {
		that.yScore = 0.0;
		that.xScore = 0.0;
	}
}