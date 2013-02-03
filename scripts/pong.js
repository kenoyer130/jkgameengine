var Pong = (function () {

	function Pong(canvas) {
		var height = $(canvas).height();
		var width = $(canvas).width();

		canvas.height = height;
		canvas.width = width;

		var bus = new JKBus();

		var game = new JKGame(bus, canvas);
		_game = game;

		//var intro = new IntroScreen(bus);
		//game.addScreen(intro);

		var main = new MainScreen(bus);
		game.addScreen(main);
	}

	Pong.prototype.start = function () {
		_game.start();
	}

	return Pong;
})();
