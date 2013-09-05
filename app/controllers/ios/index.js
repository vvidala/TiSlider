
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

Ti.App.addEventListener("slider:toggle", function(e){
 	toggleSlider();
});

$.sideScreen.open();
$.index.open();

$.menu.addEventListener('click', function(e) {
	if(typeof e.row.target !== "undefined"){
		$.index.setActiveTab(eval("$."+e.row.target));
	}
	
	toggleSlider();
});

Ti.App.addEventListener("nav:openwin", function(e){
	Ti.API.info("open win Received");
	var win = Alloy.createController("profile").getView();
	$.index.activeTab.open(win);
});
