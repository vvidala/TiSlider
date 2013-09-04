var animateRight = Ti.UI.createAnimation({
	left : 250,
	curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration : 150
});

var animateReset = Ti.UI.createAnimation({
	left : 0,
	curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration : 150
});

var animateLeft = Ti.UI.createAnimation({
	left : -250,
	curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration : 150
});

var touchStartX = 0;
var touchRightStarted = false;
var touchLeftStarted = false;
var buttonPressed = false;
var hasSlided = false;
var direction = "reset";

$.leftButton.addEventListener('click', function() {
	if (!hasSlided) {
		//alert("opening");
		direction = "right";
		//$.leftButton.touchEnabled = false;
		$.movableview.animate(animateRight);
		hasSlided = true;
	} else {
		//alert("closing");
		direction = "reset";
		$.leftButton.touchEnabled = true;
		$.movableview.animate(animateReset);
		hasSlided = false;
		//$.movableview.left = 0;
	}
});

$.index.open();

$.menu.addEventListener('click', function(e) {
	direction = "reset";
	$.leftButton.touchEnabled = true;
	$.index.animate(animateReset);
	hasSlided = false;
});

$.lab.addEventListener('click', function(){
	var win = Alloy.createController('profile').getView();
	win.open();
});
