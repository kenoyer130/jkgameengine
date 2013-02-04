var MainScreen = (function (_super) {
	__extends(MainScreen, _super);
	function MainScreen(bus) {
		_super.call(this, bus);

		_bumper = new BumperSprite(100, 200);
		_ball = new BallSprite(400, 20);
		
		_ball.rotate(1.6);
		_ball.accelerate(6);		
	}

	var _bumper;
	var _ball;

	MainScreen.prototype.Id = function () {
		return "main";
	};

	MainScreen.prototype.draw = function (context) {
		_super.prototype.draw.call(this, context);

		if (!_super.prototype.running())
			return;

		detectCollisions();
			
		_bumper.draw(context);
		_ball.draw(context);
	};
	
	var detectCollisions = function() {
		if(_ball.getY() <= 0 ){
			_ball.setY(0);		
			_ball.setVelocityY(_ball.getVelocityY() * -1);
		}
		
		if(_ball.getY() >= $(window).height() ){
			_ball.setY($(window).height());		
			_ball.setVelocityY(_ball.getVelocityY() * -1);
		}
		
		if(_ball.getX() <= 0 ){
			_ball.setX(0);		
			_ball.setVelocityX(_ball.getVelocityX() * -1);
		}
		
		if(_ball.getX() >= $(window).width() ){
			_ball.setX($(window).width());		
			_ball.setVelocityX(_ball.getVelocityX() * -1);
		}
		
		if(((_ball.getX() >= _bumper.getX()) 
			&& (_ball.getX() <= (_bumper.getX()+_bumper.getWidth())))
			&& ((_ball.getY() >= _bumper.getY())
			&& (_ball.getY() <= (_bumper.getY()+_bumper.getHeight())))
			){
			_ball.setX(_bumper.getX()+_bumper.getWidth());		
			_ball.setY(_bumper.getY()+_bumper.getHeight());	
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
			if (_bumper.getY() - 10 < 5)
				return;

			_bumper.setY(_bumper.getY() - 10);
		} else if (e.keyCode == 40) {
			if (_bumper.getY() + 10 + _bumper.getHeight() + 15 > $(window).height())
				return;

			_bumper.setY(_bumper.getY() + 10);
		}
	}

	return MainScreen;
})(BaseScreen);
