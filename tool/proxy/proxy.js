;(function(window){
'use strict';
var location = window.location;
var document = window.document;
var navigator = window.navigator;
var protocol = location.protocol;
var c = {
	log: function(message){
		if (console) console.log(message);
		return log(message);
	}
};
var debug = function(){
	var stack = [];
	var addStack = function(message){
		return stack.push(message);
	}
	return addStack;
};
var log = debug();
if (protocol !== 'https' && protocol !== 'http') c.log('[protocol]','Expected protocol');
else c.log('[protocol]','Protocol is not common and unexpected thing');

})(window);