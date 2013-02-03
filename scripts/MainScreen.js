var MainScreen = (function (_super) {
	__extends(MainScreen, _super);
	function MainScreen(bus) {
		_super.call(this, bus);

		_bumper = new BumperSprite(100, 200);
	}

	var _bumper;

	MainScreen.prototype.Id = function () {
		return "main";
	};

	MainScreen.prototype.draw = function (context) {
		_super.prototype.draw.call(this, context);

		if (!_super.prototype.running())
			return;

		_bumper.draw(context);
	};

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
