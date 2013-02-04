var BallSprite = (function () {
	var _x;
	var _y;
	var _h;
	var _w;
	
	var _velocityX;
	var _velocityY;
	var _dt=1;
	var _acceleration;
	var _angle;

	function BallSprite(x, y) {
		_x = x;
		_y = y;
		
		_velocityX = 1;
		_velocityY = 1;
		
		_h = 180;
		_w = 20;
	}

	BallSprite.prototype.getX = function () {
		return _x;
	}

	BallSprite.prototype.setX = function (x) {
		_x = x;
	}
	
	BallSprite.prototype.getVelocityX = function () {
		return _velocityX;
	}

	BallSprite.prototype.setVelocityX = function (velocityX) {
		_velocityX = velocityX;
	}

	BallSprite.prototype.getY = function () {
		return _y;
	}

	BallSprite.prototype.setY = function (y) {
		_y = y;
	}
	
	BallSprite.prototype.getVelocityY = function () {
		return _velocityY;
	}

	BallSprite.prototype.setVelocityY = function (velocityY) {
		_velocityY = velocityY;
	}
	
	BallSprite.prototype.getHeight = function () {
		return _h;
	}
	
	BallSprite.prototype.accelerate = function(amount) {
		_acceleration = amount;
	}	
	
	BallSprite.prototype.rotate = function(angle) {
		_rotate(angle);
	}
	
	var _rotate = function(angle) {
		_angle = angle;
	
		_velocityX = _velocityX * Math.cos(angle) - _velocityX * Math.sin(angle);
        _velocityY = _velocityY * Math.sin(angle) + _velocityY * Math.cos(angle);
	}
	
	var applyAcceleration = function() {		
		_x += _velocityX * _acceleration;
		_y += _velocityY * _acceleration;
	}	

	BallSprite.prototype.draw = function (context) {
	
	 applyAcceleration();	 
	
	  context.beginPath();
      context.arc(_x, _y, 10, 0, 2 * Math.PI, false);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = '#003300';
      context.stroke();
		
	}

	return BallSprite;
})();
