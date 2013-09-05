$.menu.addEventListener('click', function(e) {
	if(typeof e.row.target !== "undefined"){
		Ti.API.info(JSON.stringify(e));
		Ti.App.fireEvent('nav:openbasewin', {target: e.row.target});
	}
	Ti.App.fireEvent('slider:toggle');
});