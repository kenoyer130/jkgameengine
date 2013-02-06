var BaseSprite = (function () {

	function BaseSprite(x, y) {
		this._x = x;
		this._y = y;

		this._h = 0;
		this._w = 0;

		this._velocityX = 1;
		this._velocityY = 1;

		this._dt = 1;

		this._acceleration = 0;

		this._angle = 0;

		this._maxAcceleration = -1;
	}

	BaseSprite.prototype.getX = function () {
		return this._x;
	}

	BaseSprite.prototype.setX = function (x) {
		this._x = x;
	}

	BaseSprite.prototype.getWidth = function () {
		return this._w;
	}

	BaseSprite.prototype.setWidth = function (w) {
		this._w = w;
	}

	BaseSprite.prototype.getVelocityX = function () {
		return this._velocityX;
	}

	BaseSprite.prototype.setVelocityX = function (velocityX) {
		this._velocityX = velocityX;
	}

	BaseSprite.prototype.getY = function () {
		return this._y;
	}

	BaseSprite.prototype.setY = function (y) {
		this._y = y;
	}

	BaseSprite.prototype.getVelocityY = function () {
		return this._velocityY;
	}

	BaseSprite.prototype.setVelocityY = function (velocityY) {
		this._velocityY = velocityY;
	}

	BaseSprite.prototype.getHeight = function () {
		return this._h;
	}

	BaseSprite.prototype.setHeight = function (h) {
		this._h = h;
	}

	BaseSprite.prototype.accelerate = function (amount) {
		if (this._maxAcceleration == -1 || (this._acceleration + amount) <= this._maxAcceleration)
			this._acceleration += amount;
	}

	BaseSprite.prototype.setFacing = function (degree, velocityX, velocityY) {
		this._velocityX = velocityX;
		this._velocityY = velocityY;
		
		this.rotate(degree *(Math.PI /180));
	}
	
	BaseSprite.prototype.rotate = function (angle) {
		_angle = angle;

		this._velocityX = this._velocityX * Math.cos(angle) - this._velocityX * Math.sin(angle);
		this._velocityY = this._velocityY * Math.sin(angle) + this._velocityY * Math.cos(angle);
	}

	BaseSprite.prototype.draw = function (context) {
		this.applyAcceleration();
	}

	BaseSprite.prototype.applyAcceleration = function () {
		this._x += this._velocityX * this._acceleration;
		this._y += this._velocityY * this._acceleration;
	}

	return BaseSprite;
})();
