var MainScreen = (function (_super) {
	__extends(MainScreen, _super);
	function MainScreen(bus) {
		_super.call(this, bus);

		_bumper = new BumperSprite(100, 200);
		_bumper._maxAcceleration = 4;

		_ball = new BallSprite(400, 20);

		_ball.rotate(1.6);
		_ball.accelerate(10);
	}

	var _bumper;
	var _ball;

	var _score = 0;

	MainScreen.prototype.Id = function () {
		return "main";
	};

	MainScreen.prototype.draw = function (context) {
		_super.prototype.draw.call(this, context);

		if (!_super.prototype.running())
			return;

		context.font = "bold 20px sans-serif";
		context.textAlign = 'center';
		context.fillStyle = 'blue';
		context.fillText("Score :" + _score, 210, 30);

		detectCollisions();

		_bumper.draw(context);
		_ball.draw(context);
	};

	var detectCollisions = function () {
		detectBumperCollision();
		detectBallCollision();
	}

	var detectBumperCollision = function () {
		if (_bumper.getY() <= 0) {
			_bumper.setY(0);
			_bumper.setVelocityY(_bumper.getVelocityY() * -1);
		}

		if ((_bumper.getY() + _bumper.getHeight()) >= $(window).height()) {
			_bumper.setY($(window).height() - _bumper.getHeight());
			_bumper.setVelocityY(_bumper.getVelocityY() * -1);
		}
	}

	var detectBallCollision = function () {
		if (_ball.getY() <= 0) {
			_ball.setY(0);
			_ball.setVelocityY(_ball.getVelocityY() * -1);
		}

		if (_ball.getY() >= $(window).height()) {
			_ball.setY($(window).height());
			_ball.setVelocityY(_ball.getVelocityY() * -1);
		}

		if (_ball.getX() <= 0) {
			_ball.setX(800);
			_ball.setY(20);
			_ball.setFacing(0, 1, 1);
			_ball.rotate(1.6);
						
			_score++;
			if(_score > 4){
				alert("you lose!");
				_score = 0;
			}			
		}

		if (_ball.getX() >= $(window).width()) {
			_ball.setX($(window).width());
			_ball.setVelocityX(_ball.getVelocityX() * -1);
		}

		if (((_ball.getX() >= _bumper.getX())
				 && (_ball.getX() <= (_bumper.getX() + _bumper.getWidth())))
			 && ((_ball.getY() >= _bumper.getY())
				 && (_ball.getY() <= (_bumper.getY() + _bumper.getHeight())))) {
			_ball.setVelocityX(_ball.getVelocityX() * -1);

		}
	}

	MainScreen.prototype.keyPressed = function (e) {
		if (e.keyCode == 80) {
			_bus.onEvent('pause');
		} else if (e.keyCode == 27) {
			_bus.onEvent('show', {
				'screenId' : 'intro'
			});
		} else if (e.keyCode == 38) {
			_bumper.setFacing(180, 0, 1);
			_bumper.accelerate(20);
		} else if (e.keyCode == 40) {
			_bumper.setFacing(0, 0, 1);
			_bumper.accelerate(1);
		}
	}

	return MainScreen;
})(BaseScreen);
