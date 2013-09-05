if( $.leftButton !== undefined) {
	$.leftButton.addEventListener('click', function(e){
		Ti.App.fireEvent("slider:toggle", e); 
	});
}

