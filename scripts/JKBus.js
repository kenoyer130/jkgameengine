var JKBus = (function () {

	var targets = new Array();

	function JKBus() {}

	JKBus.prototype.onEvent = function (event, args) {
		for (var i = 0; i < targets.length; i++) {
			if (typeof targets[i].onEvent == 'function')
				targets[i].onEvent(event, args);
		}
	}

	JKBus.prototype.register = function (o) {
		targets.push(o);
	}

	return JKBus;
})();
