var IntroScreen = (function (_super) {
	__extends(IntroScreen, _super);
	function IntroScreen(bus) {
		_super.call(this, bus);
		
		_bus = bus;
	}

	IntroScreen.prototype.keyPressed = function (e) {
		if (e.keyCode == 80) {
			_bus.onEvent('pause');
		} else if (e.keyCode == 32) {
			_bus.onEvent('show',{
				'screenId' : 'main'
			});
		}
	}

	IntroScreen.prototype.Id = function () {
		return "intro";
	};

	IntroScreen.prototype.draw = function (context) {
		_super.prototype.draw.call(this, context);
		
		if(!_super.prototype.running())
			return;

		context.font = "bold 26px sans-serif";
		context.textAlign = 'center';
		context.fillStyle = 'red';
		context.fillText("Welcome to PONG!", 280, 30);
		context.fillText("Press P at any time to pause", 280, 60);
		context.fillText("Press ESC to come back to the this screen", 280, 90);
		context.fillText("Press <- and -> to move your paddle", 280, 120);
		context.fillText("Press SPACE to begin", 280, 150);
	};
	return IntroScreen;
})(BaseScreen);
