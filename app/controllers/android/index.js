var animateRight = Ti.UI.createAnimation({
	left : 0,
	curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration : 350
});

var animateReset = Ti.UI.createAnimation({
	left : "-250dp",
	curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration : 350
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
		$.leftMenu.animate(animateRight);
		hasSlided = true;
	} else {
		//alert("closing");
		direction = "reset";
		$.leftMenu.animate(animateReset);
		hasSlided = false;
	}
}


Ti.App.addEventListener('slider:toggle', function(e) {
	toggleSlider();
});

$.index.addEventListener('open', function(e) {
    var activity = $.index.activity;
 
    // Menu Item Specific Code
    activity.onPrepareOptionsMenu = function(e) {
    	activity.actionBar.title = "DemoApp";
	 	activity.actionBar.onHomeIconItemSelected = function() {
        	toggleSlider();
        }; 
    };  
});

$.index.open();
var windows = [];
//windows.push($.contentview.children[0]);
function clearContents(){
	windows.forEach(function(win){
		$.contentview.remove(win);
	});
	windows = [];
}

function addContentView(view){
	var view = Alloy.createController(view).getView();
	$.contentview.add(view);
	windows.push(view);
}

Ti.App.addEventListener("nav:openbasewin", function(e){
		clearContents();
		addContentView(e.target);
});

Ti.App.addEventListener('nav:openwin', function(e){
	addContentView(e.target);
});

$.index.addEventListener("android:back", function(e){
	if(windows.length > 1) {
		$.contentview.remove(windows.pop());
	}
	else{
		/* Either close window or have a custom logic to 
		 * goto the main view and then exit the app */ 
		$.index.close();
	}
});
