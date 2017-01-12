$(document).ready(function(){

	var $menu = $("#sidebar-wrapper");

//these lines are event propagation. They return a false so that the links can still work.//
	$(document).on('click', '.js-menu-open', function(evt) {
		$menu.addClass('open');
		return evt.target.tagName === 'A';
	}).on('click', '.js-menu-close', function(evt) {
		console.log("hellow");
		console.log($menu);
		$menu.removeClass('open');
	});

});

