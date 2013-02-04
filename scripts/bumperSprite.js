var BumperSprite = (function () {
	var _x;
	var _y;
	var _h;
	var _w;

	function BumperSprite(x, y) {
		_x = x;
		_y = y;
		
		_h = 180;
		_w = 20;
	}

	BumperSprite.prototype.getX = function () {
		return _x;
	}

	BumperSprite.prototype.setX = function (x) {
		_x = x;
	}

	BumperSprite.prototype.getY = function () {
		return _y;
	}

	BumperSprite.prototype.setY = function (y) {
		_y = y;
	}
	
	BumperSprite.prototype.getHeight = function () {
		return _h;
	}
	
	BumperSprite.prototype.getWidth = function () {
		return _w;
	}

	BumperSprite.prototype.draw = function (context) {
		context.fillStyle = "rgb(150,29,28)";
		context.fillRect(_x, _y, _w, _h);
	}

	return BumperSprite;
})();
