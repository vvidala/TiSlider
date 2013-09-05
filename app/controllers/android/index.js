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

function toggleSlider() {
	if (!hasSlided) {
		//alert("opening");
		direction = "right";
		$.movableview.animate(animateRight);
		hasSlided = true;
	} else {
		//alert("closing");
		direction = "reset";
		$.movableview.animate(animateReset);
		hasSlided = false;
	}
}

Ti.App.addEventListener('slider:toggle', function(e) {
	toggleSlider();
});

$.index.open();
var windows = [];
windows.push($.contentview.children[0]);

$.menu.addEventListener('click', function(e) {
	Ti.API.info(JSON.stringify(e));
	if(typeof e.row.target !== "undefined"){
		windows.forEach(function(win){
			$.contentview.remove(win);
		});
		windows = [];
		//$.contentview.children = [];
		var view = Alloy.createController(e.row.target).getView();
		$.contentview.add(view);
		windows.push(view);
	}
	toggleSlider();
});

Ti.App.addEventListener('nav:openwin', function(e){
	var win = Alloy.createController('profile').getView();
	$.contentview.add(win);
	windows.push(win);
});

$.index.addEventListener("android:back", function(e){
	if(windows.length > 1) {
		$.contentview.remove(windows[windows.length - 1]);
		windows.pop();
	}
});
