var BaseScreen = (function () {

	var _bus;
	var _running = true;

	function BaseScreen(bus) {			
		_bus = bus;		
		_bus.register(this);
	}
	
	BaseScreen.prototype.running = function(){
		return _running;
	}
	
	BaseScreen.prototype.onEvent = function(event, args){
		_onEvent(event, args);
	}
	var _onEvent = function (event, args) {
		if(event=='engineStarted')
			_running = true;
		else if(event=='engineStopped')
			_running = false;	
	}
	
	BaseScreen.prototype.draw = function (context) {
		var _height = window.innerHeight;
		var _width = window.innerWidth;

		context.canvas.width = _width;
		context.canvas.height = _height;

		context.clearRect(0, 0, _width, _height);

		// fill in background
		context.fillStyle = "#000000";
		context.fillRect(0, 0, _width, _height);
		
		if(!_running){
			context.font = "bold 126px sans-serif";
			context.textAlign = 'center';
			context.fillStyle = 'red';
			context.fillText("PAUSED", 280, 130);
		}
	};
	
	return BaseScreen;
})();
