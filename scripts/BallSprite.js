var BallSprite = (function (_super) {
	__extends(BallSprite, _super);

	function BallSprite(x, y) {
		_super.call(this, x, y)

		this._velocityX = 1;
		this._velocityY = 1;
	}

	BallSprite.prototype.rotate = function (angle) {
		_super.prototype.rotate.call(this, angle);
	}
	
	BallSprite.prototype.draw = function (context) {
		_super.prototype.draw.call(this, context);

		context.beginPath();
		context.arc(this._x, this._y, 10, 0, 2 * Math.PI, false);
		context.fillStyle = 'green';
		context.fill();
		context.lineWidth = 2;
		context.strokeStyle = '#003300';
		context.stroke();
	}

	return BallSprite;
})(BaseSprite);
