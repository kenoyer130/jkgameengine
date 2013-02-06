var BumperSprite = (function (_super) {
	__extends(BumperSprite, _super);

	function BumperSprite(x, y) {
		_super.call(this, x, y);
		
		this._h = 180;
		this._w = 20;
	}
	
	BumperSprite.prototype.rotate = function (angle) {
		_super.prototype.rotate.call(this, angle);
	}
	
	BumperSprite.prototype.draw = function (context) {
		_super.prototype.draw.call(this, context);
		context.fillStyle = "rgb(150,29,28)";
		context.fillRect(this._x, this._y, this._w, this._h);
	}

	return BumperSprite;
})(BaseSprite);
