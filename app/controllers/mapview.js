$.leftButton.addEventListener('click', function(e){
	Ti.App.fireEvent("slider:toggle", e);
});


$.lab.addEventListener('click', function(){
	Ti.API.info("open win fired");
	Ti.App.fireEvent("nav:openwin",{target: "profile"});
});
