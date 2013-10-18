
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
var sliderMoving = false;
var touchLeftStarted = false;
var buttonPressed = false;
var hasSlided = false;
var direction = "reset";

function toggleSlider(){
	if (!hasSlided) {
		direction = "right";
		$.index.animate(animateRight);
		hasSlided = true;
	} 
	else {
		direction = "reset";
		$.index.animate(animateReset);
		hasSlided = false;
	}
}

$.sideScreen.open();
$.index.open();

Ti.Gesture.addEventListener('orientationchange', function() {
	$.index.width = Ti.Platform.displayCaps.platformWidth;
});

Ti.App.addEventListener("slider:toggle", function(e){
 	toggleSlider();
});

Ti.App.addEventListener("nav:openbasewin", function(e){
	$.index.setActiveTab(eval("$."+e.target));
});

Ti.App.addEventListener("nav:openwin", function(e){
	Ti.API.info(JSON.stringify(e));
	var win = Alloy.createController(e.target).getView();
	$.index.activeTab.open(win);
});
