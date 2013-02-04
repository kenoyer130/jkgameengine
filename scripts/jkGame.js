// Jon Kenoyer Game Framework
// Pass in a HTML5 Canvas object on construction.
// Set each screen to be tracked by calling addScreen. Screens must support Id and draw(canvas.context) methods.
// Call start
// On each heartbeat the current screen's draw method is called.
// show a different screen with the Show method.
var JKGame = (function () {

	// 1/60th a second
	var LOOP_TIMER = 16.7;

	// private variables
	var _screens = {};
	var _currentScreen;
	var _engineTimer;
	var _context;
	var _canvas;
	var _running;
	var _bus;

	var _draw = function () {
		_currentScreen.draw(_context);
	}

	var _bindWindow = function () {
		$(window).bind('keydown', _pressed);
		$(window).bind('blur', _blurred);
		$(window).bind('focus', _focused);
	}

	var _pressed = function (e) {
		_currentScreen.keyPressed(e);
	}

	var _blurred = function () {
		_running = true;
		_pause();
	}

	var _focused = function () {
		_running = false;
		_pause();
	}

	// constructor
	function JKGame(bus, canvas) {
		_canvas = canvas;
		_context = canvas.getContext('2d');
		
		_bus = bus;

		_bus.register(this);
		
		_bindWindow();
	};

	// adds a screen to the screen collection
	JKGame.prototype.addScreen = function (screen) {
		_addScreen(screen);
	};

	var _addScreen = function (screen) {
		console.debug('adding screen ' + screen.Id());
		// set the first screen as the current screen
		if (_currentScreen == null)
			_currentScreen = screen;

		_screens[screen.Id()] = screen;
	}
	
	JKGame.prototype.paused = function () {
		_show(screenId);
	};

	// shows the indicated screen by id
	JKGame.prototype.show = function (screenId) {
		return _running;
	};
	var _show = function (screenId) {
		_currentScreen = _screens[screenId];
		_stop();
		_start();
	}
	
	JKGame.prototype.onEvent = function(event, args){
		_onEvent(event, args);
	}
	var _onEvent = function (event, args) {
		if(event=='show')
			_show(args.screenId);
		else if(event=='pause')
			_pause();
	}
	
	// starts the engine up
	JKGame.prototype.start = function () {
		_start();
	};

	var _start = function () {
		_bus.onEvent('engineStarted');
	
		// trigger first screen draw
		_draw();

		_running = true;

		// start our engine loop, each interval we call draw on the current screen
		_engineTimer = setInterval(function () {
				_draw();
			}, LOOP_TIMER);
	}

	// stops the engine
	JKGame.prototype.stop = function () {
		_stop();
	};
	var _stop = function () {
		_bus.onEvent('engineStopped');
		_running = false;
		window.clearInterval(_engineTimer)
	}

	JKGame.prototype.pause = function () {
		_pause()
	}
	var _pause = function () {
		if (_running == true) {
			_running = false;
			_stop();
		} else {
			_running = true;
			_start();
		}
	}

	return JKGame;
})();

// adds class extension type concept to javascript
var __extends = this.__extends || function (d, b) {
	function __() {
		this.constructor = d;
	}
	__.prototype = b.prototype;
	d.prototype = new __();
};
