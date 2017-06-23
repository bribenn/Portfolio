$(document).ready(function(){

	var $menu = $("#sidebar-wrapper");

//these lines are event propagation. They return a false so that the links can still work.//
	$(document).on('click', '.js-menu-open', function(evt) {
		$menu.addClass('open');
		return evt.target.tagName === 'A';
	}).on('click', '.js-menu-close', function(evt) {
		console.log("hello");
		console.log($menu);
		$menu.removeClass('open');
	})

// update the cover picture based on weather

	function getWeather(){
		$.ajax({
			url: "https://api.wunderground.com/api/5e460255713ef6c7/geolookup/conditions/q/49445.json",
			dataType: "jsonp",
			success: function(response){
				var conditions = response.current_observation.weather;
				loadImage(conditions);
				console.log(conditions);
			}
		});
	}
		
		getWeather();

	function getTimeOfDay(){
		var time = new Date();
		var hours = time.getHours();
		var timeOfDay = "";
		if (hours >= 17){
			timeOfDay = 'night';
		} else if (hours >= 12 && hours <=16){
			timeOfDay = "afternoon";
		} else {
			timeOfDay = "morning";
		}
	}

	function loadImage(conditions){
		var imageSRC = "img/weather/hero-";
		var validConditions = ["clear", "cloudy", "rain", "snow"];
		var timeOfDay = getTimeOfDay();
		conditions = conditions.toLowerCase();
		if (validConditions.indexOf(conditions) === -1) {
			conditions = "cloudy";
		} else {
			conditions = conditions;
		}
		console.log(conditions);

		var apiImg = imageSRC + conditions + ".jpeg";
		console.log(apiImg);

		$('#intro').css("background-image", 'url(' + apiImg + ')');
	}

});

