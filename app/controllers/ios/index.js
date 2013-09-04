
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


$.leftButton.addEventListener('click', function(e){
	    if (!hasSlided) {
			direction = "right";
			$.leftButton.touchEnabled = false;
			$.index.animate(animateRight);
			hasSlided = true;
		} else {
			direction = "reset";
			$.leftButton.touchEnabled = true;
			$.index.animate(animateReset);
			hasSlided = false;
		} 
	});

$.sideScreen.open();
$.index.open();

$.menu.addEventListener('click', function(e) {
	Ti.API.info(JSON.stringify(e));
	if(e.row.title== "My Apartments"){
		$.index.setActiveTab($.myAptsTab);
	}
	
	direction = "reset";
	$.leftButton.touchEnabled = true;
	$.index.animate(animateReset);
	hasSlided = false;
});

$.lab.addEventListener('click', function(){
	var win = Alloy.createController("profile").getView();
	$.index.activeTab.open(win);
});
